import axios from 'axios';
const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000', timeout: 15000, headers: { 'Content-Type': 'application/json' } });
export default api;
export function errorMessage(error) { return error?.response?.data?.detail || error?.message || 'Something went wrong'; }
