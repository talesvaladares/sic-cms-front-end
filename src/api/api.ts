import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:7077/api'
});

export default api;