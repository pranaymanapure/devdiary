import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api",
    withCredentials: true, // IMPORTANT for cookies (JWT)
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.warn("Unauthorized, please login again");
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
