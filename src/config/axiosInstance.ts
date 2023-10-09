import axios from "axios";

// Función para utilizar axios de manera global
axios.defaults.withCredentials = true;

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL_BASE,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});

export default axiosInstance;
