import axios, { AxiosInstance, AxiosError } from "axios";

export const instanceAxios: AxiosInstance = axios.create({
    baseURL: "https://blog-api-t6u0.onrender.com",
    // baseURL: "http://localhost:3003"
})

instanceAxios.interceptors.request.use(
    (config) => {
        return config
    },
    (err: AxiosError) => {
        return Promise.reject(err)
    }
)