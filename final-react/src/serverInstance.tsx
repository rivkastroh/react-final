import axios from "axios";

const token = localStorage.getItem("token");

const serverInstance = axios.create({
    baseURL: "http://localhost:3000",
});

serverInstance.interceptors.request.use((config) => {
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


export { serverInstance };
