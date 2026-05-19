import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/dashboard/Sidebar';
import Navbar from '../components/dashboard/Navbar';
import { useUI } from '../context/UIContext';
import { cn } from '../utils/cn';
import { Modal } from '../components/ui/Modal';
import { User } from 'lucide-react';

function ProfileModal() {
  const { activeModal, closeModal } = useUI();
  return (
    <Modal isOpen={activeModal === 'profile'} onClose={closeModal} title="User Profile">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <User size={32} />
          </div>
          <div>
            <h3 className="font-bold">Guest User</h3>
            <p className="text-sm text-muted-foreground">guest@taskflow.local</p>
          </div>
        </div>
        <div className="pt-4 border-t space-y-2">
           <p className="text-sm font-medium">Plan: Free</p>
           <p className="text-xs text-muted-foreground">You are currently using the guest account.</p>
        </div>
      </div>
    </Modal>
  );
}

function NotificationCenter() {
  const { notifications } = useUI();
  
  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2">
      {notifications.map(n => (
        <div 
          key={n.id}
          className="bg-primary text-primary-foreground px-4 py-3 rounded-lg shadow-lg border border-primary/20 animate-in slide-in-from-right-full"
        >
          {n.message}
        </div>
      ))}
    </div>
  );
}

export default function DashboardLayout() {
  const { isSidebarOpen } = useUI();
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-background">
      <Sidebar />
      
      <div className={cn(
        "transition-all duration-300 ease-in-out min-h-screen flex flex-col",
        isSidebarOpen ? "pl-64" : "pl-20"
      )}>
        <Navbar />
        
        <div className="flex-grow pt-20">
          <main className="p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
      
      <NotificationCenter />
      <ProfileModal />
    </div>
  );
}
