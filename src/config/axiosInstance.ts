import axios from "axios";

// Función para utilizar axios de manera global

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL_BASE,
  withCredentials: true,
});

export default axiosInstance;
