import React, { useState } from 'react';

const products = [
  {
    name: 'Chocolate Bar',
    emoji: '🍫',
    oldWeight: '200g',
    newWeight: '170g',
    oldPrice: '$1.73',
    newPrice: '$2.00',
    weightLoss: '-15%',
    priceLoss: '+15.5%',
    effectivePriceRise: '+35%',
    year: '2019 → 2024',
  },
  {
    name: 'Bag of Chips',
    emoji: '🥔',
    oldWeight: '40g',
    newWeight: '32g',
    oldPrice: '$0.99',
    newPrice: '$1.20',
    weightLoss: '-20%',
    priceLoss: '+21.5%',
    effectivePriceRise: '+51%',
    year: '2020 → 2024',
  },
  {
    name: 'Coffee',
    emoji: '☕',
    oldWeight: '200g',
    newWeight: '170g',
    oldPrice: '$4.50',
    newPrice: '$5.20',
    weightLoss: '-15%',
    priceLoss: '+15.6%',
    effectivePriceRise: '+35%',
    year: '2018 → 2024',
  },
];

export default function ShrinkToggle() {
  const [hovered, setHovered] = useState(null);
  const [active, setActive] = useState(null);

  const current = active ?? hovered;

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {products.map((product, idx) => {
        const isActive = current === idx;
        return (
          <div
            key={idx}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setActive(active === idx ? null : idx)}
            className="relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 select-none"
            style={{
              border: isActive ? '1.5px solid #FF6B87' : '1.5px solid #E2E0DC',
              background: '#FFFFFF',
            }}
          >
            {/* Product visual */}
            <div
              className="flex flex-col items-center justify-center transition-all duration-500 ease-out"
              style={{
                padding: isActive ? '20px 24px 12px' : '36px 24px 24px',
                background: isActive ? '#FFF0F3' : '#FAFAF9',
              }}
            >
              <div
                className="transition-all duration-500 ease-out flex items-center justify-center"
                style={{
                  fontSize: isActive ? '3.5rem' : '5rem',
                  transform: isActive ? 'scale(0.72)' : 'scale(1)',
                  filter: isActive ? 'grayscale(30%)' : 'none',
                  lineHeight: 1,
                }}
              >
                {product.emoji}
              </div>
              {isActive && (
                <div
                  className="mt-1 font-mono text-xs text-center"
                  style={{ color: '#FF6B87', letterSpacing: '0.08em' }}
                >
                  SHRUNK {product.weightLoss}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-5">
              <p
                className="font-display font-bold text-base mb-3"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 800,
                  color: '#0A0A0A',
                  fontSize: '15px',
                  letterSpacing: '-0.01em',
                }}
              >
                {product.name}
              </p>

              {!isActive ? (
                <div>
                  <p className="font-mono text-xs mb-1" style={{ color: '#999999' }}>
                    {product.year}
                  </p>
                  <p
                    className="text-sm mt-2"
                    style={{ color: '#555555', fontFamily: "'Inter', sans-serif" }}
                  >
                    Hover to reveal what changed.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <div
                    className="p-3 rounded-xl"
                    style={{ background: '#F7F5F2' }}
                  >
                    <p className="font-mono text-xs mb-1" style={{ color: '#999999' }}>WEIGHT</p>
                    <p className="font-mono text-sm font-bold" style={{ color: '#0A0A0A' }}>
                      {product.oldWeight}
                    </p>
                    <p className="font-mono text-xs" style={{ color: '#FF6B87' }}>
                      → {product.newWeight}
                    </p>
                  </div>
                  <div
                    className="p-3 rounded-xl"
                    style={{ background: '#F7F5F2' }}
                  >
                    <p className="font-mono text-xs mb-1" style={{ color: '#999999' }}>PRICE</p>
                    <p className="font-mono text-sm font-bold" style={{ color: '#0A0A0A' }}>
                      {product.oldPrice}
                    </p>
                    <p className="font-mono text-xs" style={{ color: '#D97706' }}>
                      → {product.newPrice}
                    </p>
                  </div>
                  <div
                    className="col-span-2 p-3 rounded-xl"
                    style={{ background: '#FFF0F3', border: '1px solid #FFCDD5' }}
                  >
                    <p className="font-mono text-xs mb-1" style={{ color: '#FF6B87' }}>
                      REAL COST INCREASE
                    </p>
                    <p
                      className="font-mono font-bold"
                      style={{ color: '#FF6B87', fontSize: '1.5rem' }}
                    >
                      {product.effectivePriceRise}
                    </p>
                    <p className="font-mono text-xs mt-1" style={{ color: '#999999' }}>
                      per gram since {product.year.split(' ')[0]}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {!isActive && (
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200"
                style={{
                  background: 'rgba(255,107,135,0.04)',
                  opacity: hovered === idx ? 1 : 0,
                }}
              >
                <span
                  className="font-mono text-xs px-3 py-1.5 rounded-full"
                  style={{
                    background: '#FF6B87',
                    color: '#FFFFFF',
                    letterSpacing: '0.1em',
                  }}
                >
                  REVEAL
                </span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}