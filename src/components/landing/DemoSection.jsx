import React from 'react';
import { motion } from 'framer-motion';

export default function DemoSection() {
  return (
    <section className="py-20 px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold">See TaskFlow in action</h2>
          <p className="text-muted-foreground text-lg">Watch how our platform transforms team productivity.</p>
        </div>
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-border"
        >
          <iframe 
            width="100%" 
            height="500" 
            src="https://www.youtube.com/embed/_3tOmPT2aOQ?si=Yywr7px_9AA77aL_&autoplay=1&mute=1" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
