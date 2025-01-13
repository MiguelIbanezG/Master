# teaching-dgp24-digitaltwin-team3

### Pre commit
```bash
pre-commit install
```

### Sonarqube
- https://www.baeldung.com/sonar-qube
- http://localhost:9000/
```bash
mvn clean verify sonar:sonar \
  -Dsonar.projectKey=test \
  -Dsonar.projectName='test' \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.token=sqp_52b73ee90bebb3e3ec08f4db8ec3293ffb641e54

```

### Jacoco code report
```bash
mvn clean test jacoco:report
mvn clean verify -Dtest=ExampleTest#test1
```

### aiven



# FrontEnd despliegue local

Para no tener ningun problema usar la version de Node v14.21.3, para comprobar la version:

  ```bash
  node -v
  ```
Para compilar, entrar en la carpeta front-end y ejecutar:

 ```bash
  npm install
  ```

Si no funciona lo anterior por algun error de dependencia (no pasa con la version v14.21.3):

  ```bash
  export NODE_OPTIONS=--openssl-legacy-provider
  npm install --force
  ```

Y luego:

  ```bash
  ng serve
  ```

Si todo ha ido bien la app estara disponible en http://localhost:4200