import api from './client';
export const getExceptions = () => api.get('/api/exceptions').then(r => r.data);
export const createException = payload => api.post('/api/exceptions', payload).then(r => r.data);
export const deleteException = id => api.delete(`/api/exceptions/${id}`).then(r => r.data);
