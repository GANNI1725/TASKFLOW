import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { useUI } from '../../context/UIContext';
import { useTasks } from '../../context/TaskContext';
import { cn } from '../../utils/cn';

export default function Navbar() {
  const { addNotification, isSidebarOpen, openModal } = useUI();
  const { tasks } = useTasks();

  const handleNotificationClick = () => {
    if (tasks.length >= 2) {
      addNotification('You have exceeded your limit', 'error');
    } else {
      addNotification('You have no new notifications', 'info');
    }
  };

  return (
    <header className={cn(
      "fixed top-0 right-0 h-20 bg-background/80 backdrop-blur-md border-b z-30 flex items-center justify-between px-8 transition-all duration-300",
      isSidebarOpen ? "left-64" : "left-20"
    )}>
      <div className="hidden md:flex items-center gap-3 bg-secondary px-4 py-2 rounded-full w-96 border border-border/50 focus-within:border-primary/50 transition-colors">
        <Search size={18} className="text-muted-foreground" />
        <input 
          type="text" 
          placeholder="Search tasks, teams..." 
          className="bg-transparent border-none outline-none w-full text-sm"
        />
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={handleNotificationClick}
          className="p-2.5 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-all relative"
        >
          <Bell size={20} />
          {tasks.length >= 2 && (
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background" />
          )}
        </button>
        
        <div className="h-8 w-[1px] bg-border mx-2" />
        
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-primary">Guest Mode</p>
            <p className="text-xs text-muted-foreground">Limited Preview</p>
          </div>
          <button 
            onClick={() => openModal('profile')}
            className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center border-2 border-border cursor-pointer hover:border-primary/50 transition-all"
          >
            <User size={20} className="text-muted-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
}