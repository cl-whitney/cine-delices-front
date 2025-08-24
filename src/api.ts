import axios from 'axios';

const api = axios.create({
  baseURL: "https://cine-delices-api.onrender.com/api", // ton vrai domaine Render
});

export default api;
