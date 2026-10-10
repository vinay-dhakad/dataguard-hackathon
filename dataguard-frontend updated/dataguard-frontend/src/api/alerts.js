import api from './client';
export const getAlerts = (params = {}) => api.get('/api/alerts', { params }).then(r => r.data);
export const getAlert = id => api.get(`/api/alerts/${id}`).then(r => r.data);
export const updateAlert = (id, status) => api.patch(`/api/alerts/${id}`, { status }).then(r => r.data);
