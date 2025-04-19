import axios from 'axios';

const API_URL = 'https://tasks-imx1.onrender.com';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const taskService = {
  getAllTasks: async () => {
    const response = await apiClient.get('/tasks');
    return response.data;
  },
  createTask: async (taskData) => {
    const response = await apiClient.post('/tasks', taskData);
    return response.data;
  }
};
