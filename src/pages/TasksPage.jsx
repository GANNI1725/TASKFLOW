import React from 'react';
import { useTasks } from '../context/TaskContext';
import { Calendar, Trash2 } from 'lucide-react';
import { cn } from '../utils/cn';
import { useUI } from '../context/UIContext';

export default function TasksPage() {
  const { tasks, deleteTask, toggleTaskStatus } = useTasks();
  const { addNotification } = useUI();

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">Tasks</h1>
      <div className="bg-card rounded-2xl border shadow-sm divide-y">
        {tasks.map(task => (
          <div key={task.id} className="p-5 flex items-center justify-between">
            <div>
              <h4 className="font-semibold">{task.title}</h4>
              <p className="text-xs text-muted-foreground">Deadline: {task.deadline}</p>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => toggleTaskStatus(task.id)} className="text-primary text-sm font-medium">
                {task.status}
              </button>
              <button onClick={() => { deleteTask(task.id); addNotification('Deleted', 'info'); }} className="text-red-500">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
        {tasks.length === 0 && <p className="p-6 text-center text-muted-foreground">No tasks found.</p>}
      </div>
    </div>
  );
}