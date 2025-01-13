"""
  Codigo para generar alturas aleatorias. Parametros:
     -Numero de datos a generar
"""
import sys
import numpy as np

MEDIA_ALTURA_H = 176
MEDIA_ALTURA_M = 170

DESV_ALTURA_H = 10
DESV_ALTURA_M = 10

P_ERROR  = 0.05
P_METROS = 0.05

if __name__ == "__main__":
    num_datos = 10 if len(sys.argv)==1 else int(sys.argv[1])
     
    rnd = np.random.rand(num_datos,3)
    res = np.random.randn(num_datos,1)

    hombres = rnd[:,0]<0.5 

    res[hombres,0]  *= DESV_ALTURA_H 
    res[~hombres,0] *= DESV_ALTURA_M 
    res[hombres,0]  += MEDIA_ALTURA_H 
    res[~hombres,0] += MEDIA_ALTURA_M 

    res = np.array(res, dtype=int)
    res = np.array(res, dtype=float)

    res[rnd[:,2]<P_METROS,0] /= 100.0
    res[rnd[:,1]<P_ERROR,0]  = -100

    sexo = np.where(hombres, np.array('H'), np.array('M'))

    for s,a in zip(sexo,res):
        print("%s, %3g" % (s,a))
#    np.savetxt(sys.stdout, res, delimiter=', ', fmt = "%s")#, fmt = "%3g")


