import axios from 'axios';

export const key = "efd9ef09cb413f35f0b4ad07ef35f7da7a06c41f";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;