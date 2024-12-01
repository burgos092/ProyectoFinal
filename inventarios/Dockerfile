# Etapa de construcción
FROM maven:3.9.4-eclipse-temurin-20 AS build
WORKDIR /app

# Copiar el archivo de configuración de Maven
COPY pom.xml ./

# Descargar las dependencias
RUN mvn dependency:go-offline -B

# Copiar todo el código fuente del proyecto
COPY . ./

# Construir el archivo JAR
RUN mvn clean package -DskipTests

# Etapa de ejecución
FROM eclipse-temurin:20-jre-alpine
WORKDIR /app

# Copiar el archivo JAR desde la etapa de construcción
COPY --from=build /app/target/*.jar app.jar

# Exponer el puerto que usará Spring Boot
EXPOSE 8083

# Comando para ejecutar la aplicación
CMD ["java", "-jar", "app.jar"]