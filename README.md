
# Aplicación web de Catálogos de películas

Este proyecto es una aplicación frontend desarrollada con **React**, **Redux**, **TypeScript** y otras tecnologías modernas. Se conecta con una API backend para ofrecer una experiencia de usuario dinámica basada en información de películas provista por la API de TMDB (The Movie Database).

🔗 Repositorio del backend: [backend-tmdb](https://github.com/goarguello97/backend-tmdb)

## Tecnologías

- **React**: Librería para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript con tipado estático.
- **Redux / @reduxjs/toolkit**: Manejo del estado global.
- **React Router DOM**: Manejo de rutas en aplicaciones SPA.
- **Axios**: Cliente HTTP para realizar peticiones al backend.
- **React Bootstrap**: Componentes UI basados en Bootstrap.
- **React Icons**: Librería de íconos para React.
- **React Player**: Componente para reproducir videos.
- **Bootstrap**: Framework de diseño responsivo.
- **Jest + Testing Library**: Testing de componentes.

## Requisitos

Antes de comenzar, asegurate de tener instalados:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Instalación

Cloná el repositorio e instalá las dependencias:

```bash
git clone https://github.com/goarguello97/frontend-tmdb/blob/master/package.json
cd client
npm install
```

## Scripts

- **Iniciar la aplicación**:

  ```bash
  npm start
  ```

- **Compilar el proyecto**:

  ```bash
  npm run build
  ```

## Estructura del Proyecto

```bash
client/
├── public/                 # Archivos públicos (index.html, favicon, etc.)
├── src/
│   ├── assets/             # Archivos estáticos (imágenes, videos, etc.)
│   ├── components/         # Componentes reutilizables
│   ├── pages/              # Vistas principales de la aplicación
│   ├── redux/              # Configuración y slices de Redux
│   ├── services/           # Servicios HTTP con Axios
│   ├── App.tsx             # Componente principal
│   ├── index.tsx           # Punto de entrada de React
│   ├── routes/             # Definición de rutas de la app
│   └── types/              # Definición de tipos personalizados
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

```

El frontend se comunica con el backend ubicado en el siguiente repositorio:
👉 https://github.com/goarguello97/backend-tmdb

Asegurate de tener corriendo el backend en local (localhost:3000 por defecto) o de configurar correctamente la URL base en los servicios (services/).
