import axios from "axios";

// 🔥 Automatically switch between local & production
const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : "https://stock-dashboard-4s3r.onrender.com/api";

const API = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
});

// 🔐 Attach JWT automatically
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");

    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
  },
  (error) => Promise.reject(error)
);

export default API;