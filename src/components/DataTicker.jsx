import React from 'react';

const tickerData = [
  { name: 'Pringles Original 200g', change: '-17%', type: 'shrink' },
  { name: 'Walkers Ready Salted', change: '+12% price', type: 'price' },
  { name: 'Cadbury Dairy Milk 200g', change: '-14%', type: 'shrink' },
  { name: 'Heinz Baked Beans 415g', change: '+8% price', type: 'price' },
  { name: 'McVitie\'s Digestives', change: '-11%', type: 'shrink' },
  { name: 'Warburtons Toastie 800g', change: '-6%', type: 'shrink' },
  { name: 'Persil Washing Liquid', change: '-20%', type: 'shrink' },
  { name: 'Tropicana Orange 1.6L', change: '-11%', type: 'shrink' },
  { name: 'Hovis Best of Both', change: '+15% price', type: 'price' },
  { name: 'Fairy Washing Up Liquid', change: '-25%', type: 'shrink' },
  { name: 'Hellmann\'s Real Mayo 430g', change: '-13%', type: 'shrink' },
  { name: 'Tetley Tea Bags 160pk', change: '-20pk', type: 'shrink' },
  { name: 'Flora Original 500g', change: '-17%', type: 'shrink' },
  { name: 'Dolmio Bolognese Sauce', change: '+9% price', type: 'price' },
  { name: 'Kellogg\'s Corn Flakes', change: '-10%', type: 'shrink' },
  { name: 'Lurpak Butter 500g', change: '+22% price', type: 'price' },
  { name: 'Cathedral City Cheddar', change: '-8%', type: 'shrink' },
  { name: 'Bisto Gravy Granules', change: '-14%', type: 'shrink' },
  { name: 'Carte Noire Instant', change: '-15%', type: 'shrink' },
  { name: 'Ribena Blackcurrant', change: '-25%', type: 'shrink' },
];

const doubled = [...tickerData, ...tickerData];

export default function DataTicker({ reverse = false, speed = 'normal' }) {
  const animClass = speed === 'slow' ? 'animate-ticker-slow' : 'animate-ticker';
  const reverseStyle = reverse
    ? { animationDirection: 'reverse' }
    : {};

  return (
    <div className="overflow-hidden h-full" aria-hidden="true">
      <div className={`flex flex-col gap-3 ${animClass}`} style={reverseStyle}>
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between gap-4 px-4 py-2.5 rounded-lg"
            style={{
              background: '#FFFFFF',
              border: '1px solid #E2E0DC',
              minWidth: '240px',
            }}
          >
            <span
              className="font-mono text-sm truncate flex-1"
              style={{ color: '#0A0A0A', fontSize: '13px' }}
            >
              {item.name}
            </span>
            <span
              className="font-mono text-xs font-bold shrink-0"
              style={{
                color: item.type === 'shrink' ? '#FF6B87' : '#D97706',
                background: item.type === 'shrink' ? '#FFF0F3' : '#FFF8E7',
                padding: '2px 8px',
                borderRadius: '4px',
                letterSpacing: '0.05em',
              }}
            >
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}