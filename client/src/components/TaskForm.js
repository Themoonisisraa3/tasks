import React, { useState } from 'react';
import { taskService } from '../services/api';

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    setSubmitting(true);
    try {
      const newTask = await taskService.createTask({ title });
      setTitle('');
      if (onTaskAdded) onTaskAdded(newTask);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nouvelle tâche"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={submitting}
      />
      <button type="submit" disabled={submitting}>
        {submitting ? 'Ajout...' : 'Ajouter'}
      </button>
    </form>
  );
};

export default TaskForm;
