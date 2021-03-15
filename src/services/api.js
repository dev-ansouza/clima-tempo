import axios from 'axios';

export const key = '7e12c851';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
});

export default api;