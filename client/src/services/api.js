import axios from 'axios';

// 👇 Use the full working backend URL
const API_URL = 'https://tasks-imx1.onrender.com/api/tasks';  // Base URL with the correct endpoint

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const taskService = {
  getAllTasks: async () => {
    const response = await apiClient.get('');  // No need for /tasks since it's already in baseURL
    return response.data;
  },
  createTask: async (taskData) => {
    const response = await apiClient.post('', taskData);  // Same here, just post to /tasks
    return response.data;
  }
};
