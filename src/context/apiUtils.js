import axios from "axios";

const ClientAPI = axios.create({
  baseURL: "http://192.168.0.117:8000/api/",
});

ClientAPI.interceptors.request.use(function (config) {
  console.log("Request Sent");
  const token = localStorage.getItem("howard_shores");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default ClientAPI;
