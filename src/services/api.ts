import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5098/api", // Apne .NET backend ka URL yahan dein
});

// Request interceptor jo har request ke sath JWT token attach karega
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
