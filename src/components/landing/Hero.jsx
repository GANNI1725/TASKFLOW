import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import taskFlowImg from '../../assets/Task flow.webp';
import taskFlow2Img from '../../assets/Task flow 2.webp';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-bold text-sm">
            <span>New: AI Task Automation is live</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-none">
            Workflow simplified, <span className="text-primary italic">results amplified.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg">
            TaskFlow helps modern teams collaborate, manage complex projects, and reach peak productivity.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="h-14 px-8 text-lg" onClick={() => navigate('/dashboard')}>
              Get Started <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} className="relative">
          <div className="relative rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
            <img 
              src={taskFlowImg} 
              alt="TaskFlow Dashboard" 
              className="rounded-2xl shadow-2xl border border-white/10 w-full h-auto" 
            />
            <img 
              src={taskFlow2Img} 
              alt="TaskFlow Workflow" 
              className="absolute -bottom-16 -right-16 h-48 w-64 shadow-xl border border-white/10 rounded-2xl hidden md:block" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
