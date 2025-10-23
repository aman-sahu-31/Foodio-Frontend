import axios from "axios";

// Create an axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000", // your API base URL
  withCredentials: true, // if your backend uses cookies
});

// Request interceptor: attach token to headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        // Optional: redirect to login if token expired
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
