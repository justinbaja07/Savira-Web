import React from 'react';
import { ScanLine, TrendingDown, ShoppingCart, BarChart2, Search, Bell } from 'lucide-react';

const features = [
  {
    Icon: ScanLine,
    label: 'SCAN',
    title: 'Point. Scan. Know.',
    desc: 'Scan any barcode instantly. Savira cross-references millions of product records to surface the truth behind the packaging.',
    accent: '#FF6B87',
  },
  {
    Icon: TrendingDown,
    label: 'SHRINKFLATION',
    title: 'Has it shrunk?',
    desc: 'We track product weights over time. If the pack got smaller but the price stayed the same — or rose — we show you exactly by how much.',
    accent: '#FF6B87',
  },
  {
    Icon: ShoppingCart,
    label: 'PRICE COMPARE',
    title: 'Cheapest near you.',
    desc: 'Compare the same product across major retailers in real time. Find the best value without opening five different apps.',
    accent: '#D97706',
  },
  {
    Icon: BarChart2,
    label: 'INFLATION INDEX',
    title: 'Track it over time.',
    desc: 'See how a product\'s real cost — price per gram, per litre, per unit — has changed over months and years. Inflation made visible.',
    accent: '#D97706',
  },
  {
    Icon: Search,
    label: 'SEARCH',
    title: 'No barcode? No problem.',
    desc: 'Search by product name, brand, or category. Every search returns the same forensic breakdown: weight history, price history, best value.',
    accent: '#FF6B87',
  },
  {
    Icon: Bell,
    label: 'ALERTS',
    title: 'Stay ahead of changes.',
    desc: 'Save products you buy regularly. Savira will alert you if a pack shrinks or a price spikes.',
    accent: '#D97706',
  },
];

export default function FeatureGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: '#E2E0DC' }}>
      {features.map((f, i) => (
        <div
          key={i}
          className="p-8 group hover:bg-white transition-colors duration-200"
          style={{ background: '#F7F5F2' }}
        >
          <div className="mb-4 flex items-center gap-3">
            <f.Icon className="w-5 h-5" style={{ color: f.accent }} />
            <span
              className="font-mono text-xs font-bold"
              style={{ color: f.accent, letterSpacing: '0.12em' }}
            >
              {f.label}
            </span>
          </div>
          <h3
            className="font-display font-bold mb-3"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 800,
              fontSize: '1.2rem',
              letterSpacing: '-0.02em',
              color: '#0A0A0A',
            }}
          >
            {f.title}
          </h3>
          <p style={{ color: '#555555', fontSize: '16px', lineHeight: '1.6' }}>
            {f.desc}
          </p>
          <div
            className="mt-6 h-0.5 transition-all duration-300"
            style={{
              background: f.accent,
              width: '0px',
              transition: 'width 0.3s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.width = '40px')}
            onMouseLeave={e => (e.currentTarget.style.width = '0px')}
          />
        </div>
      ))}
    </div>
  );
}