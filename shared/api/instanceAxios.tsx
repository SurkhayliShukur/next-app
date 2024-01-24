import axios, { AxiosInstance, AxiosError } from "axios";

export const instanceAxios: AxiosInstance = axios.create({
    baseURL: "http://localhost:3003"
})

instanceAxios.interceptors.request.use(
    (config) => {
        return config
    },
    (err: AxiosError) => {
        return Promise.reject(err)
    }
)