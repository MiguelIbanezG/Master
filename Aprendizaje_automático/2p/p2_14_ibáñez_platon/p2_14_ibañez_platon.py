import numpy as np
import matplotlib
import matplotlib.pyplot as plt
from scipy.spatial.distance import cdist
from itertools import cycle
from scipy.stats import multivariate_normal as mvn


#---------------------------------------------------------------------------------------------------------
#---------------------------------------------------------------------------------------------------------
def plotModel(x, t, title, centers=None, new_figure=False):
    color_iter = cycle(['r', 'g', 'b', 'c', 'm'])
    labels = np.unique(t)
    
    if new_figure==True:
        plt.figure(figsize=(4, 4))
        
    for i, (label, color) in enumerate(zip(labels, color_iter)):
        plt.plot(x[t==label, 0], x[t==label, 1], '.', color=color)

    if centers is not None:
        color_iter = cycle(['r', 'g', 'b', 'c', 'm'])
        for i, (label, color) in enumerate(zip(labels, color_iter)):
            plt.plot(centers[i, 0], centers[i, 1], 'o', markersize=12, color='k')
            plt.plot(centers[i, 0], centers[i, 1], 'o', markersize=9, color=color)

    if new_figure==True:
        plt.title(title)
        plt.grid(True)
        plt.show()


#---------------------------------------------------------------------------------------------------------
#---------------------------------------------------------------------------------------------------------
def plotModelGMM(x, clf, title):
    color_iter = cycle(['r', 'g', 'b', 'c', 'm'])

    y = np.argmax(clf.predict(x), axis=1)
    plt.figure(figsize=(6,6))
    splot = plt.subplot(1, 1, 1)

    for i, (mean, covar, color) in enumerate(zip(clf.centers, clf.covariances, color_iter)):
        v, w = np.linalg.eigh(covar)
        u = w[0] / np.linalg.norm(w[0])
        plt.plot(x[y == i, 0], x[y == i, 1], '.', color=color)

        # Plot an ellipse to show the Gaussian component
        angle = np.arctan(u[1] / (u[0] + 1.e-20))
        angle = 180 * angle / np.pi  # convert to degrees
        ell = matplotlib.patches.Ellipse(mean, v[0]*3.0, v[1]*3.0, angle=180+angle, color=color)
        ell.set_clip_box(splot.bbox)
        ell.set_alpha(0.5)
        splot.add_artist(ell)

    plt.title(title)
    plt.grid(True)
    plt.axis('equal')
    plt.show()


#---------------------------------------------------------------------------------------------------------
#---------------------------------------------------------------------------------------------------------
class KMeans:
    def __init__(self, num_clusters, num_iters, random_state=None):
        self.num_clusters = num_clusters
        self.num_iters = num_iters
        self.centers = []
        if random_state is not None:
            np.random.seed(random_state)
        
    def fit(self, x):
        """
        Recibe un array de numpy de dimensiones (n, d), donde n es el número
        de puntos y d es su dimensión, y ejecuta el algoritmo K-Means para ajustar
        self.num_clusters clusters a los datos. El número de iteraciones del
        algoritmo vendrá dado por self.num_iters. Los centros de los clusters se
        almacenarán en la lista self.centers.
        """

        # Inicializamos los centros aletorimente
        random_indices = np.random.choice(len(x), self.num_clusters, replace=False)
        self.centers = x[random_indices]

        # Con la implementación que esta más abajo comentada(K-Means++) para inicializar los centros,
        # los resultados son mejores, dado que calcula las probabilidades de 
        # elegir cada punto como un nuevo centro, asignando una mayor probabilidad 
        # a los puntos más distantes de los centros actuales lo que ayuda a dispersar los centros

        # self.centers = [x[np.random.choice(len(x))]]
        # for _ in range(1, self.num_clusters):
        #     distances = np.min(cdist(x, np.array(self.centers)), axis=1)
        #     probs = distances / distances.sum()
        #     cumulative_probs = probs.cumsum()
        #     r = np.random.rand()
        #     for j, p in enumerate(cumulative_probs):
        #         if r < p:
        #             self.centers.append(x[j])
        #             break
        # self.centers = np.array(self.centers)
        

        # Iteramos para encontrar los clusters
        for _ in range(self.num_iters):
            distances = cdist(x, self.centers)
            labels = np.argmin(distances, axis=1)
            
            new_centers = np.array([x[labels == i].mean(axis=0) for i in range(self.num_clusters)])
            
            if np.allclose(self.centers, new_centers, atol=1e-4):
                break
            self.centers = new_centers


    def predict(self, x):
        """
        Recibe un array de numpy de dimensiones (n, d), donde n es el número
        de puntos y d es su dimensión, y devuelve un array de numpy de dimensiones
        (n,) con el índice del cluster al que pertenece cada punto. El método
        predict no se puede invocar sobre un objeto si no se ha hecho fit
        previamente.
        """
        # Asignamos cada punto al cluster más cercano
        distances = cdist(x, self.centers)
        return np.argmin(distances, axis=1)

    def get_centers(self):
        return self.centers

#---------------------------------------------------------------------------------------------------------
#---------------------------------------------------------------------------------------------------------
class GMM:
    def __init__(self, num_components, num_iters, random_state=None):
        self.num_components = num_components
        self.num_iters = num_iters
        self.centers = []
        self.covariances = []
        self.weights = []
        print("GMM")
        if random_state is not None:
            np.random.seed(random_state)
    

    def farthest_first_initialization(self, x, num_components):
        centers = [x[np.random.choice(x.shape[0])]]
        for _ in range(num_components-1):
            distances = np.min(cdist(x, np.array(centers)), axis=1)
            next_center = x[np.argmax(distances)]
            centers.append(next_center)
        
        return np.array(centers)
        
    def fit(self, x):
        """
        Recibe un array de numpy de dimensiones (n, d), donde n es el número
        de puntos y d es su dimensión, y ejecuta el algoritmo EM para ajustar
        una mezcla de self.num_components componentes gausianas a los datos.
        El número de iteraciones del algoritmo vendrá dado por self.num_iters.
        Los centros, covarianzas y prioris de cada componente se almacenarán
        en las listas self.centers, self.covariances y self.weights,
        respectivamente.
        """
        self.centers = x[np.random.choice(x.shape[0], self.num_components, replace=False)] # Inicializamos los centros a puntos aleatorios (se puede cambiar por la heurística de puntos mas alejados)
        self.covariances = [np.eye(x.shape[1]) + i + 1 for i in range(self.num_components)] # Inicializamos las covarianzas a la matriz identidad
        self.weights = np.ones(self.num_components) / self.num_components # Inicializamos los pesos a 1/self.num_components

        for _ in range(self.num_iters):
            # x = datos, centers = medias, covariances = sigma**2 * I, wieghts = PI
            gaussian_probs = np.array([mvn.pdf(x, self.centers[i], self.covariances[i]) for i in range(self.num_components)]).T
            gaussian_probs = np.nan_to_num(gaussian_probs)
            # axis = 1 para sumar cada columna (componente)
            # np.newaxis para que se pueda hacer la division (sigue siendo un array de 1D)
            norm = np.sum(gaussian_probs * self.weights, axis=1)[: , np.newaxis]
            norm = np.nan_to_num(norm)
            actual_probs = (gaussian_probs * self.weights) / norm 
            actual_probs = np.nan_to_num(actual_probs)

            # Actualizar los pesos
            self.weights = np.mean(actual_probs, axis=0)
            self.weights = np.nan_to_num(self.weights)
            self.weights = np.nan_to_num(self.weights)
            self.centers = np.dot(actual_probs.T, x) / np.sum(actual_probs, axis=0)[:, np.newaxis]
            self.centers = np.nan_to_num(self.centers)
            self.covariances = [np.dot((x - self.centers[i]).T, (x - self.centers[i]) * actual_probs[:, i][:, np.newaxis]) / np.sum(actual_probs[:, i]) for i in range(self.num_components)]
            self.covariances = np.nan_to_num(self.covariances)
            # Añadimos un pequeño valor a la diagonal para evitar singularidades
            self.covariances = self.covariances + 1e-6 * np.eye(x.shape[1])
            
    def predict(self, x):
        """
        Recibe un array de numpy de dimensiones (n, d), donde n es el número
        de puntos y d es su dimensión, y devuelve un array de numpy de dimensiones
        (n, self.num_components) con las probabilidades de pertenencia de cada
        punto a cada una de las componentes (la suma por filas debe ser 1). El
        método predict no se puede invocar sobre un objeto si no se ha hecho fit
        previamente.
        """
        
        # x = datos, centers = medias, covariances = sigma**2 * I, wieghts = PI
        gaussian_probs = np.array([mvn.pdf(x, self.centers[i], self.covariances[i]) for i in range(self.num_components)]).T
        gaussian_probs = np.nan_to_num(gaussian_probs)
        # axis = 1 para sumar cada columna (componente)
        # np.newaxis para que se pueda hacer la division (sigue siendo un array de 1D)
        norm = np.sum(gaussian_probs * self.weights, axis=1)[: , np.newaxis]
        norm = np.nan_to_num(norm)
        actual_probs = (gaussian_probs * self.weights) / norm
        actual_probs = np.nan_to_num(actual_probs)
        return actual_probs
