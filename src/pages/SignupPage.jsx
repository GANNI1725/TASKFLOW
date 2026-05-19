import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function SignupPage() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:flex flex-1 bg-primary p-12 flex-col justify-between text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        
        <Link to="/" className="flex items-center gap-2 relative z-10">
          <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-md">
            <CheckCircle className="text-white" size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight">TaskFlow</span>
        </Link>

        <div className="relative z-10">
          <h2 className="text-5xl font-bold leading-tight">Empower your team with TaskFlow.</h2>
          <p className="mt-6 text-xl opacity-80 max-w-lg">
            Create an account and discover why the world's most productive teams trust TaskFlow for their daily operations.
          </p>
        </div>

        <div className="relative z-10 opacity-60 text-sm">
          &copy; 2026 TaskFlow Inc.
        </div>
      </div>

      <div className="flex-1 bg-background flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
            <ArrowLeft size={16} /> Back to home
          </Link>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Create your account</h1>
            <p className="text-muted-foreground">Get started for free. No credit card required.</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">First Name</label>
                <input required type="text" placeholder="John" className="w-full h-12 px-4 rounded-xl border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Last Name</label>
                <input required type="text" placeholder="Doe" className="w-full h-12 px-4 rounded-xl border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Work Email</label>
              <input required type="email" placeholder="john@company.com" className="w-full h-12 px-4 rounded-xl border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <input required type="password" placeholder="••••••••" className="w-full h-12 px-4 rounded-xl border bg-card focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
            </div>
            <p className="text-xs text-muted-foreground pt-2">
              By signing up, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
            </p>
            <Button className="w-full h-12 text-lg">Create Account</Button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
