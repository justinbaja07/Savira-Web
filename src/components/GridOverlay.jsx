import React from 'react';

export default function GridOverlay() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
      style={{
        backgroundImage: `
          linear-gradient(to right, #262626 0.5px, transparent 0.5px),
          linear-gradient(to bottom, #262626 0.5px, transparent 0.5px)
        `,
        backgroundSize: 'calc(100% / 12) 80px'
      }}
      aria-hidden="true"
    />
  );
}