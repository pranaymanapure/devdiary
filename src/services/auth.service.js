// src/services/auth.service.js
import axiosInstance from "./axiosInstance";

export const loginUser = (data) => {
    return axiosInstance.post("/users/login", data);
};

export const registerUser = (data) => {
    return axiosInstance.post("/users/register", data);
};

export const logoutUser = () => {
    return axiosInstance.post("/users/logout");
};

export const getCurrentUser = () => {
    return axiosInstance.get("/users");
};
