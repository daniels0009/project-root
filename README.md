# Proyecto Dockerizado - Gestor de Productos

Este proyecto consiste en una aplicación Full Stack desarrollada con un **frontend en React**, un **backend en Java con Spring Boot** y un **API Gateway**. Todo el proyecto está completamente dockerizado para facilitar su despliegue y uso.

## Estructura del Proyecto

El proyecto se organiza en las siguientes carpetas:

```
project-root/
├── frontend/              # Código del frontend (React)
│   ├── public/           # Archivos públicos
│   ├── src/              # Código fuente de React
│   ├── Dockerfile        # Dockerfile para el frontend
│   └── package.json      # Dependencias y scripts del frontend
│
├── backend/              # Código del backend (Spring Boot)
│   ├── src/              # Código fuente de Java
│   ├── Dockerfile        # Dockerfile para el backend
│   └── build.gradle      # Configuración de Gradle
│
├── api-gateway/          # Código del API Gateway (Spring Boot)
│   ├── src/              # Código fuente de Java
│   ├── Dockerfile        # Dockerfile para el API Gateway
│   └── build.gradle      # Configuración de Gradle
│
├── docker-compose.yml    # Archivo de configuración para Docker Compose
└── README.md             # Documentación del proyecto
```

## Requisitos Previos

- **Docker**: Asegúrate de tener Docker instalado en tu sistema.
- **Docker Compose**: También necesitas Docker Compose para orquestar los contenedores.

## Configuración Inicial

1. Clona este repositorio:
   ```bash
   git clone https://github.com/daniels0009/project-root.git
   cd project-root
   ```

2. Construye y levanta los contenedores:
   ```bash
   docker-compose up --build
   ```

Esto creará y levantará los siguientes servicios:

- **frontend** en el puerto `3000`
- **backend** en el puerto `8080`
- **api-gateway** en el puerto `8081`
- **mongodb** en el puerto `27017`

## Acceso a la Aplicación

Una vez que todos los servicios estén en funcionamiento:

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend** (API): [http://localhost:8080/api/products](http://localhost:8080/api/products)
- **API Gateway**: [http://localhost:8081](http://localhost:8081)

## Características del Proyecto

- **Frontend**:
  - Aplicación React para gestionar productos.
  - Permite crear, leer, actualizar y eliminar productos (CRUD).

- **Backend**:
  - API RESTful desarrollada en Spring Boot.
  - Conexión a MongoDB para almacenar datos de productos.

- **API Gateway**:
  - Redirige las solicitudes entre el frontend y el backend.
  - Implementado con Spring Cloud Gateway.

## Variables de Entorno

El archivo `docker-compose.yml` ya incluye las configuraciones necesarias para las conexiones entre servicios. Sin embargo, si necesitas personalizarlas, puedes modificar las siguientes variables:

- **MONGODB_HOST**: Nombre del host de MongoDB.
- **MONGODB_PORT**: Puerto de MongoDB.
- **API_GATEWAY_PORT**: Puerto del API Gateway.

## Despliegue en un Servidor

Para hacer accesible la aplicación desde cualquier lugar:

1. Configura un servidor con acceso a internet.
2. Instala Docker y Docker Compose en el servidor.
3. Copia el proyecto al servidor y levanta los servicios:
   ```bash
   docker-compose up --build
   ```
4. Asegúrate de configurar el servidor para exponer los puertos correspondientes.

## Comandos Útiles

- Detener todos los contenedores:
  ```bash
  docker-compose down
  ```

- Ver logs de un servicio específico:
  ```bash
  docker-compose logs <servicio>
  ```

- Reconstruir contenedores sin cache:
  ```bash
  docker-compose build --no-cache
  ```

## Autor

Desarrollado por **Daniel S.** - [GitHub](https://github.com/daniels0009)

---

¡Gracias por usar este proyecto! No dudes en abrir un issue en GitHub si encuentras algún problema o tienes sugerencias para mejorar.
