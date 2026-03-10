import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: '700M+', label: 'Barcode database', color: '#FF6B87' },
  { value: 'FREE', label: 'Cost of Savira', color: '#D97706' },
  { value: '$500', label: 'est. annual saving per household', color: '#FF6B87' },
  { value: '0', label: 'Ads. Ever.', color: '#0A0A0A' },
];

export default function StatBar() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4"
      style={{ borderTop: '1px solid #E2E0DC', borderBottom: '1px solid #E2E0DC' }}
    >
      {stats.map((s, i) => (
        <div
          key={i}
          className="px-8 py-10 flex flex-col gap-2 transition-all duration-700"
          style={{
            borderRight: i < stats.length - 1 ? '1px solid #E2E0DC' : 'none',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: `${i * 100}ms`,
          }}
        >
          <p
            className="font-display font-black"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              letterSpacing: '-0.03em',
              color: s.color,
            }}
          >
            {s.value}
          </p>
          <p className="font-mono text-xs" style={{ color: '#999999', letterSpacing: '0.05em' }}>
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}