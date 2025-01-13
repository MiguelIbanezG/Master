#FROM openjdk:17-jdk-alpine
#MAINTAINER devtiro.com
## COPY target/*.jar app.jar
#COPY *.jar app.jar
#ENTRYPOINT ["java","-jar","/app.jar"]

FROM maven:3-eclipse-temurin-17 AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-alpine AS runtime
WORKDIR /app
COPY --from=build /app/target/*.jar /app.jar

EXPOSE 8080
ENTRYPOINT ["java","-Dspring.profiles.active=render", "-jar", "/app.jar"]
