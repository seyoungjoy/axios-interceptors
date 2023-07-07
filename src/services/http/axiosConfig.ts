import axios, {AxiosInstance} from "axios";
import {onErrorResponse, onRequest, onResponse} from "./utils";

const axiosInstance:AxiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    timeout: 5000,
});

axiosInstance.interceptors.request.use(onRequest);
axiosInstance.interceptors.response.use(onResponse, onErrorResponse)

export default axiosInstance;