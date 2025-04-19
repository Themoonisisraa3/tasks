import React, { useState, useEffect } from 'react';
import { taskService } from '../services/api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await taskService.getAllTasks();
        setTasks(data);
      } catch {
        setError('Erreur lors du chargement des tâches');
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>Liste des tâches</h3>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title} - {task.completed ? '✔️' : '❌'}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
