import axios from 'axios';

// 👇 Use full working backend URL
const API_URL = 'https://tasks-imx1.onrender.com/api/tasks';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const taskService = {
  getAllTasks: async () => {
    const response = await apiClient.get('/tasks'); // makes a GET to /api/tasks
    return response.data;
  },
  createTask: async (taskData) => {
    const response = await apiClient.post('/tasks', taskData); // makes a POST to /api/tasks
    return response.data;
  }
};
