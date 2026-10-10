import api from './client';
export const getEvents = (params = {}) => api.get('/api/events', { params }).then(r => r.data);
export const createEvent = payload => api.post('/api/events', payload).then(r => r.data);
