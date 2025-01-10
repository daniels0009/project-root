FROM node:16

# Crea un usuario no root con permisos adecuados
RUN useradd -ms /bin/bash appuser

WORKDIR /app
COPY package*.json ./

# Cambia el propietario de los archivos a appuser
RUN chown -R appuser:appuser /app

# Instala las dependencias como usuario no root
USER appuser
RUN npm install

# Cambia los permisos específicamente en node_modules/.cache
USER root
RUN mkdir -p /app/node_modules/.cache && chmod -R 777 /app/node_modules/.cache

# Cambia nuevamente al usuario no root
USER appuser
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
