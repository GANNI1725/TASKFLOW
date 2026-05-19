import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ArrowRight, Play, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import taskFlowImg from '../../assets/Task flow.webp';
import taskFlow2Img from '../../assets/Task flow 2.webp';

export default function Hero() {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative pt-32 pb-20 px-8 overflow-hidden">
      {showVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md">
           <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl">
              <button onClick={() => setShowVideo(false)} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
                 <X size={24} />
              </button>
              <iframe 
                width="100%" 
                height="500" 
                src="https://www.youtube.com/embed/_3tOmPT2aOQ?si=Yywr7px_9AA77aL_&autoplay=1" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen
              ></iframe>
           </div>
        </div>
      )}
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
            <Button variant="outline" size="lg" className="h-14 px-8 text-lg" onClick={() => setShowVideo(true)}>
              <Play className="mr-2" size={20} /> Watch Demo
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