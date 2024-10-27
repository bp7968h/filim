#Build stage
FROM maven:3.3.5-openjdk-21 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

#Serve the app
FROM openjdk:21-jre-slim
WORKDIR /app
COPY --from=build /app/target/filim_server.jar filim_server.jar
ENTRYPOINT ["java", "-jar", "filim_server.jar"]
