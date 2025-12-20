import axios from 'axios';

// ✅ Base URL from env
const API = import.meta.env.VITE_API_URL;

// ✅ Axios instance
const api = axios.create({
  baseURL: API,
});

export const vitalsAPI = {
  getAll: () => api.get('/api/vitals'),
  getLatest: () => api.get('/api/vitals/latest'),
  add: (data) => api.post('/api/vitals', data),
  predict: (data) => api.post('/api/vitals/predict', data),
};

export const doctorsAPI = {
  getAll: (params) => api.get('/api/doctors', { params }),
  getById: (id) => api.get(`/api/doctors/${id}`),
};

export default api;