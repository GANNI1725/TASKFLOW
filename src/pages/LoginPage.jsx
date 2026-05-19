import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex flex-1 bg-primary p-12 flex-col justify-between text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
        
        <Link to="/" className="flex items-center gap-2 relative z-10">
          <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-md">
            <CheckCircle className="text-white" size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight">TaskFlow</span>
        </Link>

        <div className="relative z-10">
          <h2 className="text-5xl font-bold leading-tight">Join 10,000+ teams shipping faster.</h2>
          <p className="mt-6 text-xl opacity-80 max-w-lg">
            "TaskFlow has completely transformed how our engineering team operates. We've seen a 30% increase in velocity since switching."
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20" />
            <div>
              <p className="font-bold">Alex Rivera</p>
              <p className="text-sm opacity-60">VP Engineering, TechScale</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 opacity-60 text-sm">
          &copy; 2026 TaskFlow Inc.
        </div>
      </div>

      <div className="flex-1 bg-background flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="md:hidden flex justify-center mb-8">
            <Link to="/" className="flex items-center gap-2 text-primary">
              <CheckCircle size={32} />
              <span className="text-2xl font-bold">TaskFlow</span>
            </Link>
          </div>

          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
            <ArrowLeft size={16} /> Back to home
          </Link>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Sign in to TaskFlow</h1>
            <p className="text-muted-foreground">Enter your details below to access your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <input 
                required
                type="email" 
                placeholder="name@company.com"
                className="w-full h-12 px-4 rounded-xl border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Password</label>
                <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
              </div>
              <input 
                required
                type="password" 
                placeholder="••••••••"
                className="w-full h-12 px-4 rounded-xl border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
            <Button className="w-full h-12 text-lg">Sign In</Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t" /></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-muted-foreground">Or continue with</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-12">Google</Button>
            <Button variant="outline" className="h-12">GitHub</Button>
          </div>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account? <Link to="/signup" className="text-primary font-bold hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
