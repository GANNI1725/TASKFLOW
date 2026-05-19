import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Crown, User } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { cn } from '../utils/cn';

const plans = [
  {
    name: 'Guest (Current)',
    price: '0',
    description: 'Perfect for quick testing.',
    features: ['2 Active Tasks', 'Basic Task Tracking', 'Local Persistence'],
    buttonText: 'Current Plan',
    highlight: false,
    gold: false,
    current: true
  },
  {
    name: 'Starter',
    price: '299',
    description: 'Designed for individual productivity.',
    features: ['20 Active Tasks', '3 Active Projects', 'Mobile Sync', 'Community Forum'],
    buttonText: 'Buy Plan',
    highlight: false,
    gold: false
  },
  {
    name: 'Professional',
    price: '1,499',
    description: 'Built for collaborative teams.',
    features: ['Unlimited Tasks', 'Unlimited Projects', 'Workflow Automation', 'Shared Workspaces'],
    buttonText: 'Buy Plan',
    highlight: true,
    gold: false
  },
  {
    name: 'Enterprise',
    price: '4,999',
    description: 'Tailored for large-scale operations.',
    features: ['Everything in Pro', 'Dedicated Account Manager', 'Custom Data Integrations', 'SAML & SSO Support'],
    buttonText: 'Buy Plan',
    highlight: false,
    gold: true
  }
];

export default function PricingPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background py-20 px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
          <ArrowLeft size={16} /> Back to dashboard
        </Link>
        
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold tracking-tight">Choose your plan</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "p-8 rounded-[2rem] border flex flex-col space-y-6 transition-all hover:shadow-xl relative",
                plan.highlight 
                  ? "bg-primary text-primary-foreground border-primary shadow-xl shadow-primary/20 scale-105 z-10" 
                  : plan.gold 
                    ? "bg-gradient-to-b from-[#fbf3d4] to-[#e6c17a] text-black border-[#d4af37] shadow-lg"
                    : plan.current
                      ? "bg-secondary border-dashed border-primary"
                      : "bg-card text-foreground border-border"
              )}
            >
              {plan.gold && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#d4af37] text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 uppercase tracking-wider">
                  <Crown size={14} /> Recommended
                </div>
              )}
              <div>
                <p className={cn("text-xs uppercase tracking-widest font-bold mb-2 flex items-center gap-2", 
                  plan.highlight ? "opacity-80" : plan.gold ? "text-[#8b6508]" : "text-primary")}>
                  {plan.current && <User size={14}/>} {plan.name}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold">NPR</span>
                  <h3 className="text-4xl font-bold">{plan.price}</h3>
                  <span className={cn("text-xs font-medium", plan.highlight ? "opacity-60" : plan.gold ? "text-black/60" : "text-muted-foreground")}>/mo</span>
                </div>
              </div>

              <ul className="flex-1 space-y-3">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3 text-xs font-medium">
                    <CheckCircle size={16} className={plan.highlight ? "text-primary-foreground" : plan.gold ? "text-[#8b6508]" : "text-primary"} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                size="lg" 
                className={cn(
                  "w-full h-12 text-md font-bold transition-all",
                  plan.highlight 
                    ? "bg-background text-foreground hover:bg-background/90" 
                    : plan.gold
                      ? "bg-black text-white hover:bg-black/90"
                      : plan.current
                        ? "bg-primary/20 text-primary hover:bg-primary/30"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                {plan.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}