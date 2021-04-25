import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

console.log(`Backend End point ${process.env.REACT_APP_BACKEND_ENDPOINT}`);
const http = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_ENDPOINT,
});

http.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        console.log(`Reqeust Interceptor Called`);
        return config;
    },
    (error: any) => {
        console.log(error);
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    (config: AxiosResponse) => {
        console.log(`Response Interceptor Called`);
        return config;
    },
    (error: any) => {
        console.log(error);
        return Promise.reject(error);
    }
);

export default http;
