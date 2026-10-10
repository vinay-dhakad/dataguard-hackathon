import api from './client';
export const getFiles = () => api.get('/api/files').then(r => r.data);
export const getFile = id => api.get(`/api/files/${id}`).then(r => r.data);
