import axios from 'axios'

const baseURL = "https://api.eduskillplace.com/api";

const api = axios.create({
  baseURL,
  withCredentials: true, // if using cookies
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api
