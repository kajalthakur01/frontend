// src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/auth/register", // your backend URL
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;
// http://localhost:5000/api/acduth/register
// http://localhost:3000/api