import React from 'react';

export default function TeamPage() {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">Team</h1>
      <div className="bg-card p-8 rounded-2xl border shadow-sm text-center">
        <h2 className="text-xl font-bold">Team Management</h2>
        <p className="text-muted-foreground mt-2">Collaborate with your team seamlessly. This feature requires a subscription.</p>
      </div>
    </div>
  );
}