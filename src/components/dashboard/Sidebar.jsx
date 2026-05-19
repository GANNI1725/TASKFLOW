import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Users, 
  Settings, 
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  LogOut,
  Lock,
  BarChart3,
  Workflow,
  Link as LinkIcon,
  Crown
} from 'lucide-react';
import { useUI } from '../../context/UIContext';
import { useToast } from '../../hooks/useToast';
import { cn } from '../../utils/cn';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: CheckSquare, label: 'Tasks', path: '/dashboard/tasks' },
  { icon: Users, label: 'Team', path: '/dashboard/team' },
];

const lockedItems = [
  { icon: BarChart3, label: 'Analytics', plan: 'Professional' },
  { icon: Workflow, label: 'AI Automation', plan: 'Professional' },
  { icon: CheckSquare, label: 'Advanced Task Labels', plan: 'Professional' },
  { icon: LinkIcon, label: 'Custom Integrations', plan: 'Enterprise' },
  { icon: Lock, label: 'SSO & Security', plan: 'Enterprise' },
];

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useUI();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleLockedClick = (plan) => {
    addToast(
        <div className="flex flex-col gap-2">
          <span>This feature is available in the {plan} plan.</span>
          <button onClick={() => navigate('/pricing')} className="font-bold underline text-xs">Upgrade Now</button>
        </div>,
        'info'
    );
  };

  return (
    <aside className={cn(
      "fixed left-0 top-0 h-full bg-card border-r z-40 transition-all duration-300 ease-in-out",
      isSidebarOpen ? "w-64" : "w-20"
    )}>
      <Link to="/" className="h-20 flex items-center px-6 border-b hover:bg-secondary/50 transition-colors">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="bg-primary p-1.5 rounded-lg shrink-0">
            <CheckCircle className="text-primary-foreground" size={24} />
          </div>
          {isSidebarOpen && <span className="text-xl font-bold tracking-tight whitespace-nowrap">TaskFlow</span>}
        </div>
      </Link>

      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} end={item.path === '/dashboard'} className={({ isActive }) => cn(
            "flex items-center gap-4 px-3 py-3 rounded-xl transition-all duration-200 group relative",
            isActive ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" : "text-muted-foreground hover:bg-secondary hover:text-foreground"
          )}>
            <item.icon size={22} className="shrink-0" />
            {isSidebarOpen && <span className="font-medium">{item.label}</span>}
          </NavLink>
        ))}

        <div className="pt-4 pb-2 px-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          {isSidebarOpen ? "Pro Features" : "..."}
        </div>

        {lockedItems.map((item) => (
          <button key={item.label} onClick={() => handleLockedClick(item.plan)} className="flex items-center gap-4 px-3 py-3 w-full rounded-xl text-muted-foreground hover:bg-secondary hover:text-foreground transition-all group relative">
            <div className="relative">
                <item.icon size={22} className="shrink-0" />
                <Lock size={10} className="absolute -top-1 -right-1 bg-background text-primary rounded-full" />
            </div>
            {isSidebarOpen && <span className="font-medium">{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-4 left-0 w-full px-4 space-y-2">
                <Link to="/pricing" className="flex items-center gap-4 px-4 py-3 w-full rounded-xl bg-gradient-to-br from-[#fbf3d4] to-[#e6c17a] text-[#8b6508] hover:shadow-lg transition-all shadow-md">
           <Crown size={20} />
           {isSidebarOpen && <span className="font-bold">Upgrade Plan</span>}
        </Link>
        <NavLink to="/dashboard/settings" className={({isActive}) => cn("flex items-center gap-4 px-3 py-3 w-full rounded-xl transition-all", isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary")}>
            <Settings size={22} />
            {isSidebarOpen && <span className="font-medium">Settings</span>}
        </NavLink>
        <Link to="/" className="flex items-center gap-4 px-3 py-3 w-full rounded-xl text-red-500 hover:bg-red-50 transition-all">
          <LogOut size={22} />
          {isSidebarOpen && <span className="font-medium">Exit Guest Mode</span>}
        </Link>
        <button onClick={toggleSidebar} className="flex items-center justify-center w-full py-2 text-muted-foreground hover:text-primary transition-colors border-t border-border/50 pt-4">
          {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>
    </aside>
  );
}