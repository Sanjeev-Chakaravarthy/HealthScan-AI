import axios from 'axios';

export const vitalsAPI = {
  getAll: () => axios.get('/api/vitals'),
  getLatest: () => axios.get('/api/vitals/latest'),
  add: (data) => axios.post('/api/vitals', data),
  predict: (data) => axios.post('/api/vitals/predict', data)
};

export const doctorsAPI = {
  getAll: (params) => axios.get('/api/doctors', { params }),
  getById: (id) => axios.get(`/api/doctors/${id}`)
};
