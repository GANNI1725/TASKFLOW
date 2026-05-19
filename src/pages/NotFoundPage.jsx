import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Ghost } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-background">
      <div className="bg-primary/10 p-6 rounded-3xl mb-8 animate-bounce">
        <Ghost size={64} className="text-primary" />
      </div>
      <h1 className="text-6xl font-black text-primary mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-4">Page not found</h2>
      <p className="text-muted-foreground max-w-md mb-8">
        Oops! The page you're looking for doesn't exist or has been moved. 
        Let's get you back on track.
      </p>
      <Link to="/">
        <Button size="lg" className="px-10 h-14 text-lg">Return Home</Button>
      </Link>
    </div>
  );
}
