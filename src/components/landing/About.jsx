import React from 'react';
import { motion } from 'framer-motion';
import businessImg from '../../assets/Business.png';

export default function About() {
  return (
    <section id="about" className="py-20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
          <h2 className="text-4xl font-bold tracking-tight">Built for modern businesses</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At TaskFlow, we believe that productivity should feel effortless. We noticed that teams were drowning in complex tools, so we built a platform that simplifies everything without sacrificing power.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Whether you are a startup building your MVP or an enterprise team managing thousands of tasks, TaskFlow scales with you. We are dedicated to building a workspace that puts people first.
          </p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
          <img 
            src={businessImg} 
            alt="TaskFlow for Business" 
            className="rounded-3xl shadow-2xl w-full h-auto border border-white/10" 
          />
        </motion.div>
      </div>
    </section>
  );
}
