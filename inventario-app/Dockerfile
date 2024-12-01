# Usa una imagen base ligera
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos necesarios para instalar las dependencias
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

# Instala Angular CLI globalmente (asegúrate de que sea compatible con Angular 15)
RUN npm install -g @angular/cli@15

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Construye la aplicación para producción
RUN ng build --configuration production

# Cambia el propietario del directorio a un usuario no root por seguridad
RUN chown -R node /usr/src/app
USER node

# Exponer el puerto 4500
EXPOSE 4500

# Comando para servir la aplicación (solo para desarrollo)
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4500"]
