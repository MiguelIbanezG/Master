import pandas as pd
import matplotlib.pyplot as plt
import json

with open('datos_fina_optB.json', 'r') as file:
    data = json.load(file)

df = pd.DataFrame(data)

plt.figure(figsize=(10, 6))

for tipo in df["Type"].unique():
    df_tipo = df[df["Type"] == tipo]
    plt.plot(df_tipo["Chunk"], df_tipo["Eficiencia"], marker='o', label=tipo)

plt.title("Granularidad Fina")
plt.xlabel("Chunks")
plt.ylabel("Eficiencia")
plt.legend(title="Tipo de Asignación")
plt.grid(True)

plt.savefig('granularidad_fina_optB.png', format='png')
plt.close() 
