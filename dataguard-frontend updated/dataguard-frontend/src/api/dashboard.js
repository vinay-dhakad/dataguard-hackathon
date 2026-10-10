import api from './client';
export const getDashboardSummary = () => api.get('/api/dashboard/summary').then(r => r.data);
export const getRiskTrend = () => api.get('/api/dashboard/risk-trend').then(r => r.data);
export const getRecentAlerts = () => api.get('/api/dashboard/recent-alerts').then(r => r.data);
