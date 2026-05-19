import React from 'react';

const companies = [
  { name: 'Slack', url: 'https://slack.com' },
  { name: 'Notion', url: 'https://notion.so' },
  { name: 'Linear', url: 'https://linear.app' },
  { name: 'Figma', url: 'https://figma.com' },
  { name: 'Spotify', url: 'https://spotify.com' },
  { name: 'GitHub', url: 'https://github.com' },
];

export default function TrustedBy() {
  return (
    <section className="py-12 border-b">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center text-sm font-bold text-muted-foreground uppercase tracking-widest mb-8">Trusted by industry leaders</p>
        <div className="flex flex-wrap justify-center gap-12">
          {companies.map(company => (
            <a 
              key={company.name} 
              href={company.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl font-bold opacity-50 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110 transition-all duration-300"
            >
              {company.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
