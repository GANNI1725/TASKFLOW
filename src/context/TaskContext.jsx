import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage('taskflow_tasks', []);

  const addTask = (task) => {
    setTasks(prev => [{ id: Date.now(), ...task }, ...prev]);
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleTaskStatus = (id) => {
    setTasks(prev => prev.map(task => 
      task.id === id 
        ? { ...task, status: task.status === 'Completed' ? 'In Progress' : 'Completed' }
        : task
    ));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);
