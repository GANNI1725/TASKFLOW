import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Users, BarChart3, Clock, Layers } from 'lucide-react';
import { VisualAsset } from '../ui/VisualAsset';

const features = [
  { icon: Zap, title: 'AI Automation', desc: 'Automate repetitive tasks with our intelligent workflow engine.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'Advanced encryption ensuring your data stays safe and secure.' },
  { icon: Users, title: 'Team Collaboration', desc: 'Real-time syncing and communication tools for remote teams.' },
  { icon: BarChart3, title: 'Smart Analytics', desc: 'Track your team’s progress with detailed, actionable insights.' },
  { icon: Clock, title: 'Deadline Tracking', desc: 'Smart notifications so you never miss a critical milestone.' },
  { icon: Layers, title: 'Unified Workspace', desc: 'Everything you need in one place, perfectly organized.' }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-secondary/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-8 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">Everything you need to ship</h2>
          <p className="text-muted-foreground text-lg">Powerful tools built for modern teams that want to move faster.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-card rounded-3xl border border-border hover:border-primary/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <f.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
