import axios from 'axios';

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// axios.interceptors.request.use((request) => {
//     request.headers.Authorization = 'Hello 1234';
//     return request;
// }, (error) => {
//     return Promise.reject(error);
// })

// axios.interceptors.response.use((response) => {
//     console.log('response interceptor')
//     return response.data;
// })

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