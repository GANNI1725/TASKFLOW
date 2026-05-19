import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Hero from '../components/landing/Hero';
import TrustedBy from '../components/landing/TrustedBy';
import Features from '../components/landing/Features';
import About from '../components/landing/About';
import Pricing from '../components/landing/Pricing';
import { Button } from '../components/ui/Button';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 px-8 h-20 flex items-center justify-between border-b bg-background/80 backdrop-blur-md">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg"><CheckCircle className="text-primary-foreground" size={24} /></div>
          <span className="text-2xl font-bold tracking-tight">TaskFlow</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 font-medium">
          {['Features', 'About', 'Pricing'].map(i => <a key={i} href={'#' + i.toLowerCase()} className="hover:text-primary transition-colors">{i}</a>)}
        </div>
        <div className="hidden md:flex gap-4">
          <Link to="/login"><Button variant="ghost">Login</Button></Link>
          <Link to="/signup"><Button>New User</Button></Link>
        </div>
      </nav>

      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <About />
        <Pricing />
      </main>

      <footer className="border-t py-12 px-8 text-center text-muted-foreground">
        <p>&copy; 2026 TaskFlow. Built with passion for productive teams.</p>
      </footer>
    </div>
  );
}
