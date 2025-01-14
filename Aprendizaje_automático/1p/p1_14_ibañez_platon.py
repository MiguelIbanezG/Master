import os
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler
from sklearn.dummy import DummyClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix, balanced_accuracy_score, recall_score

def create_images_directory():
    if not os.path.exists('images'):
        os.makedirs('images')

def load_data(filepath):
    columns = [
        "Fecha Transaccion", "Hora Transaccion", "Cliente Id", "Perfil Cliente", "Segmento", "Ip", 
        "Modo Acceso", "Id Sesion", "Importe", "Tipo Mensaje", "Canal", "Fecha Sesion", "Hora Sesion", 
        "Medio Autenticacion", "Tipo Transaccion", "Entidad", "Oficina Origen", "Cuenta Origen", 
        "Entidad Destino", "Oficina Destino", "Cuenta Destino", "Tipo Firma", "Tipo Cuenta Origen", 
        "Pais Destino", "Fecha Alta Canal", "Fecha Activacion Canal", "Fecha Nac Titu Cta Cargo", 
        "Fecha Alta Cta Cargo", "Pais Ip", "Latitud", "Longitud", "Browser", "Browser Version", 
        "Os", "Os Version", "Profesion Cliente", "Sector Cliente", "Segmento Cliente", "Indicador Fraude"
    ]
    df = pd.read_csv(filepath, sep='|', header=None)
    df.columns = columns
    return df

def analyze_unique_values(df):
    unique_values_counts = df.nunique()
    fraude_count = (df["Indicador Fraude"] == 1).sum()
    print(f"Número de fraudes detectados: {fraude_count}")
    print(unique_values_counts)
    return unique_values_counts

def filter_data(df, unique_values_counts):
    filtered_columns = unique_values_counts[unique_values_counts != 1].index
    filtered_df = df[filtered_columns]
    columns_to_drop = [
        "Cliente Id", "Ip", "Id Sesion", "Oficina Origen", "Cuenta Origen", 
        "Entidad Destino", "Oficina Destino", "Cuenta Destino", "Fecha Alta Canal", 
        "Fecha Activacion Canal", "Fecha Nac Titu Cta Cargo", "Fecha Alta Cta Cargo", 
        "Latitud", "Longitud"
    ]
    filtered_df = filtered_df.drop(columns=columns_to_drop)
    return filtered_df, columns_to_drop

def print_unique_values(df, columns_to_drop):
    for column in columns_to_drop:
        n_unicos = len(df[column].dropna().unique())
        print(f'Número de valores únicos en {column}: {n_unicos}')

def plot_histogram_and_boxplot(filtered_df):
    plt.figure(figsize=(8, 4))
    plt.hist(filtered_df["Indicador Fraude"], edgecolor='purple', color='pink')
    plt.title(f'Frecuencia de Indicador Fraude')
    unique_values = sorted(filtered_df["Indicador Fraude"].unique())
    plt.xticks(unique_values, rotation=45)
    plt.tight_layout()
    plt.savefig('images/histograma_indicador_fraude.png')

    q75, q25 = np.percentile(filtered_df["Importe"], [75, 25])
    iqr = q75 - q25
    upper_limit = q75 + 1.5 * iqr
    filtered_data = filtered_df[filtered_df["Importe"] <= upper_limit]

    plt.figure(figsize=(8, 4))
    plt.boxplot(filtered_data["Importe"], boxprops=dict(color='black'), 
                medianprops=dict(color='red'), whiskerprops=dict(color='black'), showmeans=True)
    plt.title('Boxplot de Importe')
    plt.xticks([1], ['Importe'])
    plt.tight_layout()
    plt.savefig('images/boxplot_importe.png')

def plot_categorical_bars(filtered_df):
    numerical_fields = [
        "Indicador Fraude", "Fecha Transaccion", "Hora Transaccion", 
        "Fecha Sesion", "Hora Sesion", "Importe"
    ]
    filtered_df = filtered_df.drop(columns=numerical_fields)

    for field in filtered_df:
        plt.figure(figsize=(8, 4))
        value_counts = filtered_df[field].value_counts().nlargest(40)
        plt.bar(value_counts.index, value_counts.values, edgecolor='purple', color='pink')
        plt.title(f'Frecuencia de {field}')
        plt.xticks(rotation=45)
        plt.tight_layout()
        plt.savefig(f'images/frecuencia_{field}.png')

def plot_time_series(df):
    df['Fecha Transaccion'] = pd.to_datetime(df['Fecha Transaccion'], format='%Y%m%d')
    df['Fecha Sesion'] = pd.to_datetime(df['Fecha Sesion'], format='%Y%m%d')
    date_fields = ['Fecha Transaccion', 'Fecha Sesion']

    for field in date_fields:
        plt.figure(figsize=(10, 6))
        time_series_data = df[field].value_counts().sort_index()
        plt.plot(time_series_data.index, time_series_data.values, marker='o', linestyle='-', color='black')
        plt.title(f'Serie Temporal de {field}')
        plt.xlabel('Fechas')
        plt.ylabel('Frecuencia')
        plt.xticks(rotation=45)
        plt.tight_layout()
        plt.savefig(f'images/serie_temporal_{field}.png')

def plot_hour_frequency(df):
    hour_fields = ["Hora Transaccion", "Hora Sesion"]
    df['Hora Transaccion'] = df['Hora Transaccion'].astype(str).str.zfill(6).str[:2].astype(int)
    df['Hora Sesion'] = df['Hora Sesion'].astype(str).str.zfill(6).str[:2].astype(int)

    for field in hour_fields:
        plt.figure(figsize=(10, 5))
        plt.hist(df[field], bins=23, edgecolor='purple', color='pink')
        plt.title(f'Frecuencia de {field}')
        plt.xlabel('Hora')
        plt.ylabel('Frecuencia')
        plt.xticks(range(24))
        plt.xlim(-0.5, 23.5)
        plt.tight_layout()
        plt.savefig(f'images/frecuencia_horas_{field}.png')

def plot_scatter_plots(df):
    def scale_and_plot(field_x, field_y, labels, title, filename):

        if field_x == "Importe":
            scaler = StandardScaler()
            df[[field_x]] = scaler.fit_transform(df[[field_x]])

        plt.figure(figsize=(10, 6))
        plt.scatter(df[df['Indicador Fraude'] == 0][field_x], 
                    df[df['Indicador Fraude'] == 0][field_y], 
                    label="Genuino", alpha=0.6, c="blue", marker='o')
        plt.scatter(df[df['Indicador Fraude'] == 1][field_x], 
                    df[df['Indicador Fraude'] == 1][field_y], 
                    label="Fraude", alpha=0.6, c="red", marker='x')
        plt.title(title)
        plt.xlabel(labels[0])
        plt.ylabel(labels[1])
        plt.grid()
        plt.legend()
        plt.tight_layout()
        plt.savefig(f'images/{filename}.png')
        plt.close()

    # Importe vs. Hora Transacción
    scale_and_plot("Importe", "Hora Transaccion", 
                   ["Importe Normalizado", "Hora de Transacción Normalizada"], 
                   "Importe vs. Hora de Transacción - Visualización en 2D", "scatter_importe_hora")

    # Importe vs. Segmento Cliente
    scale_and_plot("Importe", "Segmento Cliente", 
                   ["Importe Normalizado", "Segmento Cliente Codificado"], 
                   "Importe vs. Segmento Cliente - Visualización en 2D", "scatter_importe_segmento_cliente")
    
    # Tipo Mensaje vs. Medio Autenticación
    scale_and_plot("Tipo Mensaje", "Medio Autenticacion",
                     ["Tipo Mensaje Codificado", "Medio Autenticación Codificado"],
                     "Tipo Mensaje vs. Medio Autenticación - Visualización en 2D", "scatter_tipo_mensaje_medio_autenticacion")
    
    # Tipo Firma vs. Medio Autenticación
    scale_and_plot("Tipo Firma", "Medio Autenticacion",
                     ["Tipo Firma Codificado", "Medio Autenticación Codificado"],
                        "Tipo Firma vs. Medio Autenticación - Visualización en 2D", "scatter_tipo_firma_medio_autenticacion")

def train_dummy_classifiers(df):
    X = df.drop(columns=['Indicador Fraude'])
    y = df['Indicador Fraude']

    # Dummy Classifier - Estratificado
    X_train, X_test, y_train, y_test_stratified = train_test_split(X, y, test_size=0.2, random_state=42)
    dummy_clf_stratified = DummyClassifier(strategy='stratified')
    dummy_clf_stratified.fit(X_train, y_train)
    y_pred_stratified = dummy_clf_stratified.predict(X_test)

    # Dummy Classifier - Frecuencia más alta
    X_train, X_test, y_train, y_test_most_frequent = train_test_split(X, y, test_size=0.2, random_state=42)
    dummy_clf_most_frequent = DummyClassifier(strategy='most_frequent', random_state=42)
    dummy_clf_most_frequent.fit(X_train, y_train)
    y_pred_most_frequent = dummy_clf_most_frequent.predict(X_test)

    return (y_test_stratified, y_pred_stratified), (y_test_most_frequent, y_pred_most_frequent)

def print_metrics(y_test, y_pred, strategy_name):
    cm = confusion_matrix(y_test, y_pred)
    print(f"Métricas del Modelo {strategy_name}:")
    print(f"Precisión: {accuracy_score(y_test, y_pred):.4f}")
    print(f"Sensibilidad (TPR): {recall_score(y_test, y_pred):.4f}")
    print(f"Balanced Accuracy: {balanced_accuracy_score(y_test, y_pred):.4f}")
    print("Confusion Matrix:")
    print(cm)

def main(filepath):
    create_images_directory()
    df = load_data(filepath)
    unique_values_counts = analyze_unique_values(df)
    filtered_df, columns_to_drop = filter_data(df, unique_values_counts)
    print_unique_values(df, columns_to_drop)

    plot_histogram_and_boxplot(filtered_df)
    plot_categorical_bars(filtered_df)
    plot_time_series(df)
    plot_hour_frequency(df)
    plot_scatter_plots(df)

    
    (y_test_stratified, y_pred_stratified), (y_test_most_frequent, y_pred_most_frequent) = train_dummy_classifiers(filtered_df)

    
    print_metrics(y_test_stratified, y_pred_stratified, "Dummy Estratificado")
    print_metrics(y_test_most_frequent, y_pred_most_frequent, "Dummy Frecuencia Más Alta")

if __name__ == "__main__":
    main('datos_practica.txt.gz')
