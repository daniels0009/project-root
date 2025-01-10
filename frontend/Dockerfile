FROM node:16
RUN useradd -ms /bin/bash appuser
WORKDIR /app
COPY package*.json ./
RUN chown -R appuser:appuser /app
USER appuser
RUN npm install
USER root
RUN mkdir -p /app/node_modules/.cache && chmod -R 777 /app/node_modules/.cache
USER appuser
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
