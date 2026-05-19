import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { Moon, Sun } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">Settings</h1>
      
      <div className="bg-card p-6 rounded-2xl border shadow-sm">
        <h2 className="text-xl font-bold mb-4">Appearance</h2>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="font-medium text-foreground">Dark Mode</p>
            <p className="text-sm text-muted-foreground">Toggle between light and dark themes</p>
          </div>
          <Button onClick={toggleTheme} className="gap-2">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </div>
      </div>
    </div>
  );
}
