import axios from 'axios';

export const privateApi = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        "Content-Type": "application/json"
    }
})

privateApi.interceptors.request.use((request) => {
    request.headers.Authorization = 'Hello 1234';
    return request;
}, (error) => {
    return Promise.reject(error);
})

privateApi.interceptors.response.use((response) => {
    console.log('response interceptor')
    return response.data;
})