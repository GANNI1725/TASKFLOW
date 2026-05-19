import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Plus,
  Trash2,
  Calendar,
  Zap,
  Info
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import { Input } from '../components/ui/Input';
import { useTasks } from '../context/TaskContext';
import { useUI } from '../context/UIContext';
import { cn } from '../utils/cn';

export default function Dashboard() {
  const { tasks, addTask, deleteTask, toggleTaskStatus } = useTasks();
  const { addNotification } = useUI();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', priority: 'Medium', deadline: 'Today' });

  const handleAddTask = (e) => {
    e.preventDefault();
    if (tasks.length >= 2) {
      addNotification('Guest Mode Limit: Only 2 tasks allowed. Please upgrade for more!', 'error');
      setIsModalOpen(false);
      return;
    }
    if (!newTask.title.trim()) {
      addNotification('Please enter a task title', 'error');
      return;
    }
    addTask({ ...newTask, status: 'Pending' });
    setNewTask({ title: '', priority: 'Medium', deadline: 'Today' });
    setIsModalOpen(false);
    addNotification('New task added successfully!', 'success');
  };

  const completedTasks = tasks.filter(t => t.status === 'Completed').length;
  const stats = [
    { label: 'Total Tasks', value: tasks.length, trend: 'Live', icon: CheckCircle2, color: 'text-green-600' },
    { label: 'Completed', value: completedTasks, trend: 'Update', icon: TrendingUp, color: 'text-primary' },
    { label: 'In Progress', value: tasks.length - completedTasks, trend: 'Active', icon: Clock, color: 'text-amber-600' },
    { label: 'Blocked', value: '0', trend: 'Static', icon: AlertCircle, color: 'text-red-600' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="gap-2 shadow-lg shadow-primary/20">
          <Plus size={18} /> New Task
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            key={stat.label}
            className="bg-card p-6 rounded-2xl border shadow-sm group hover:border-primary/30 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-secondary group-hover:bg-primary/10 transition-colors">
                <stat.icon size={20} className={stat.color} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                {stat.trend}
              </span>
            </div>
            <h3 className="text-muted-foreground text-sm font-medium">{stat.label}</h3>
            <p className="text-3xl font-bold mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-bold">Tasks List ({tasks.length}/2)</h2>
          </div>
          <div className="bg-card rounded-2xl border overflow-hidden shadow-sm">
            <div className="divide-y">
              <AnimatePresence initial={false}>
                {tasks.map((task) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    key={task.id} 
                    className="p-5 flex items-center justify-between hover:bg-secondary/30 transition-colors group cursor-pointer"
                    onClick={() => toggleTaskStatus(task.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-3 h-3 rounded-full shrink-0",
                        task.priority === 'High' ? "bg-red-500" : task.priority === 'Medium' ? "bg-amber-500" : "bg-green-500"
                      )} />
                      <div>
                        <h4 className={cn(
                          "font-semibold transition-all",
                          task.status === 'Completed' ? "line-through text-muted-foreground" : "text-foreground"
                        )}>
                          {task.title}
                        </h4>
                        <p className="text-xs text-muted-foreground flex items-center gap-2 mt-1">
                          <Calendar size={12} /> {task.deadline}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
                      <span className={cn(
                        "text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter",
                        task.status === 'Completed' ? "bg-green-100 text-green-700" : "bg-primary/10 text-primary"
                      )}>
                        {task.status}
                      </span>
                      <button 
                        onClick={() => {
                          deleteTask(task.id);
                          addNotification('Task deleted', 'info');
                        }}
                        className="p-2 opacity-0 group-hover:opacity-100 hover:bg-red-50 text-red-500 rounded-lg transition-all"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {tasks.length === 0 && (
                <div className="p-10 text-center text-muted-foreground">
                  No tasks yet. Click "New Task" to create one! (Max 2)
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold px-2">System Insights</h2>
          <div className="bg-card rounded-2xl border border-border p-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl text-primary">
                <Zap size={20} />
              </div>
              <div>
                <h5 className="font-bold text-sm">Quick Tip</h5>
                <p className="text-xs text-muted-foreground mt-1">
                  Click on any task in the list to quickly toggle its status between 'In Progress' and 'Completed'.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 pt-4 border-t border-border">
              <div className="bg-amber-500/10 p-3 rounded-xl text-amber-600">
                <Info size={20} />
              </div>
              <div>
                <h5 className="font-bold text-sm">Session Status</h5>
                <p className="text-xs text-muted-foreground mt-1">
                  You are currently in Guest Mode. Data is stored in your browser's local cache. Clear cache to reset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Add New Task">
        <form onSubmit={handleAddTask} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Task Title</label>
            <Input 
              value={newTask.title}
              onChange={(e) => setNewTask({...newTask, title: e.target.value})}
              placeholder="What needs to be done?"
              className="w-full"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Priority</label>
              <select 
                className="w-full bg-secondary p-2.5 rounded-lg border border-input text-sm"
                value={newTask.priority}
                onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium">Deadline</label>
              <Input 
                value={newTask.deadline}
                onChange={(e) => setNewTask({...newTask, deadline: e.target.value})}
                placeholder="Today"
              />
            </div>
          </div>
          <Button type="submit" className="w-full">Create Task</Button>
        </form>
      </Modal>
    </div>
  );
}