import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:8000',
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
