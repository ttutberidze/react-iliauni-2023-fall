import {privateApi} from '../api/axios';

export const fetchPosts = async () => privateApi.get('/posts');

export const updatePosts = async (params) => privateApi.post('/posts', params);