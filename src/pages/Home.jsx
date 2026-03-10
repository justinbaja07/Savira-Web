import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import DataTicker from '../components/DataTicker';
import { ScanLine, Microscope, BadgeDollarSign } from 'lucide-react';

function ScannerAnimation() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="relative" style={{ width: '200px', height: '200px' }}>
        {/* Corner brackets */}
        {/* Top-left */}
        <div className="absolute top-0 left-0" style={{ width: '28px', height: '28px', borderTop: '3px solid #0A0A0A', borderLeft: '3px solid #0A0A0A' }} />
        {/* Top-right */}
        <div className="absolute top-0 right-0" style={{ width: '28px', height: '28px', borderTop: '3px solid #0A0A0A', borderRight: '3px solid #0A0A0A' }} />
        {/* Bottom-left */}
        <div className="absolute bottom-0 left-0" style={{ width: '28px', height: '28px', borderBottom: '3px solid #0A0A0A', borderLeft: '3px solid #0A0A0A' }} />
        {/* Bottom-right */}
        <div className="absolute bottom-0 right-0" style={{ width: '28px', height: '28px', borderBottom: '3px solid #0A0A0A', borderRight: '3px solid #0A0A0A' }} />
        {/* Scan line */}
        <div
          style={{
            position: 'absolute',
            left: '8px',
            right: '8px',
            height: '2px',
            background: 'linear-gradient(to right, transparent, #FF6B87, transparent)',
            boxShadow: '0 0 8px 2px rgba(255,107,135,0.4)',
            animation: 'scan-line 2s ease-in-out infinite',
          }}
        />
      </div>
      <p className="font-mono text-xs" style={{ color: '#C8C5BF', letterSpacing: '0.12em' }}>SCANNING...</p>
      <style>{`
        @keyframes scan-line {
          0% { top: 8px; }
          50% { top: calc(100% - 10px); }
          100% { top: 8px; }
        }
      `}</style>
    </div>
  );
}
import ShrinkToggle from '../components/ShrinkToggle';
import FeatureGrid from '../components/FeatureGrid';
import StatBar from '../components/StatBar';

function FadeSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div>
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen pt-16 overflow-hidden"
        style={{ background: '#F7F5F2' }}
      >
        {/* Subtle radial following the cursor */}
        <div
          className="pointer-events-none absolute inset-0 transition-all duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(244,160,176,0.15) 0%, transparent 70%)`,
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className="flex flex-col lg:flex-row items-stretch min-h-[calc(100vh-4rem)]">

            {/* Left: Headline */}
            <div className="flex-1 flex flex-col justify-center py-20 lg:py-0 lg:pr-16">
              <div className="mb-6">
                <span
                  className="font-mono text-xs inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                  style={{
                    background: '#FFF0F3',
                    color: '#FF6B87',
                    letterSpacing: '0.12em',
                    border: '1px solid #FFCDD5',
                  }}
                >
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: '#FF6B87' }}
                  />
                  FREE DURING BETA · NO ADS · NO PREMIUM
                </span>
              </div>

              <h1
                className="font-display leading-none mb-6"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                  letterSpacing: '-0.04em',
                  color: '#0A0A0A',
                }}
              >
                STOP
                <br />
                <span style={{ color: '#FF6B87' }}>PAYING</span>
                <br />
                FOR AIR.
              </h1>

              <p
                className="mb-10 max-w-lg"
                style={{
                  fontSize: '1.15rem',
                  color: '#555555',
                  lineHeight: '1.7',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Savira scans any product and tells you if it's shrunk, if the price has risen, and where you can buy it cheapest. No premium. No ads. Just the truth.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  to={createPageUrl('Download')}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-200 hover:scale-105"
                  style={{
                    background: '#0A0A0A',
                    color: '#FFFFFF',
                    fontFamily: "'Inter Tight', sans-serif",
                    fontWeight: 800,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    fontSize: '14px',
                    textDecoration: 'none',
                  }}
                >
                  Download Free
                  <span>→</span>
                </Link>
                <Link
                  to={createPageUrl('Mission')}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:text-pink-500"
                  style={{
                    color: '#555555',
                    fontFamily: "'Inter Tight', sans-serif",
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    fontSize: '13px',
                    textDecoration: 'none',
                  }}
                >
                  Our Mission
                  <span style={{ color: '#FF6B87' }}>↗</span>
                </Link>
              </div>

              {/* Beta badge */}
              <div
                className="mt-10 inline-flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{ background: '#FFFFFF', border: '1px solid #E2E0DC', width: 'fit-content' }}
              >
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69af087d3aa01b6a545e1feb/7b968987e_icon.png"
                  alt=""
                  className="w-8 h-8 rounded-lg"
                />
                <div>
                  <p className="font-mono text-xs font-bold" style={{ color: '#0A0A0A', letterSpacing: '0.08em' }}>
                    CURRENTLY IN BETA
                  </p>
                  <p className="font-mono text-xs" style={{ color: '#999999' }}>
                    Everything free · No strings attached
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Scanner animation */}
            <div
              className="hidden lg:flex items-center justify-center w-72 xl:w-96"
              style={{ borderLeft: '1px solid #E2E0DC', paddingLeft: '2rem' }}
            >
              <ScannerAnimation />
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="font-mono text-xs" style={{ color: '#C8C5BF', letterSpacing: '0.1em' }}>SCROLL</span>
          <div
            className="w-px h-10"
            style={{ background: 'linear-gradient(to bottom, #C8C5BF, transparent)' }}
          />
        </div>
      </section>

      {/* ── STAT BAR ── */}
      <StatBar />

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <FadeSection>
            <div className="mb-16">
              <p className="font-mono text-xs mb-3" style={{ color: '#FF6B87', letterSpacing: '0.15em' }}>
                HOW IT WORKS
              </p>
              <h2
                className="font-display font-black"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  letterSpacing: '-0.03em',
                  color: '#0A0A0A',
                }}
              >
                THREE STEPS.
                <br />
                <span style={{ color: '#FF6B87' }}>ZERO CONFUSION.</span>
              </h2>
            </div>
          </FadeSection>

          <div className="grid md:grid-cols-3" style={{ border: '1px solid #E2E0DC', borderRadius: '8px', overflow: 'hidden' }}>
            {[
              {
                step: '1',
                Icon: ScanLine,
                title: 'Scan or Search',
                desc: 'Open Savira, point at a barcode or type a product name. Takes less than two seconds.',
              },
              {
                step: '2',
                Icon: Microscope,
                title: 'Get the Full Picture',
                desc: 'See weight history, price history, shrinkflation percentage, and a forensic breakdown of real cost.',
              },
              {
                step: '3',
                Icon: BadgeDollarSign,
                title: 'Buy Smarter',
                desc: 'Compare prices across retailers instantly. Savira shows you exactly where to buy it cheaper — right now.',
              },
            ].map((item, i) => (
              <FadeSection key={i} delay={i * 150}>
                <div
                  className="p-10 h-full"
                  style={{ background: '#FAFAF9', borderRight: i < 2 ? '1px solid #E2E0DC' : 'none' }}
                >
                  <p
                    className="font-mono font-bold mb-4"
                    style={{ color: '#FF6B87', fontSize: '2.5rem', letterSpacing: '-0.02em' }}
                  >
                    {item.step}
                  </p>
                  <item.Icon className="w-8 h-8 mb-4" style={{ color: '#0A0A0A' }} />
                  <h3
                    className="font-display font-bold mb-3"
                    style={{
                      fontFamily: "'Inter Tight', sans-serif",
                      fontWeight: 800,
                      fontSize: '1.3rem',
                      letterSpacing: '-0.02em',
                      color: '#0A0A0A',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: '#555555', fontSize: '16px', lineHeight: '1.65' }}>
                    {item.desc}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHRINK TOGGLE ── */}
      <section className="py-24 px-6" style={{ background: '#F7F5F2' }}>
        <div className="max-w-7xl mx-auto">
          <FadeSection>
            <div className="mb-6">
              <p className="font-mono text-xs mb-3" style={{ color: '#FF6B87', letterSpacing: '0.15em' }}>
                THE SHRINK-O-METER
              </p>
              <h2
                className="font-display font-black mb-4"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  letterSpacing: '-0.03em',
                  color: '#0A0A0A',
                }}
              >
                THE INVISIBLE
                <br />
                <span style={{ color: '#FF6B87' }}>PRICE RISE.</span>
              </h2>
              <p style={{ color: '#555555', fontSize: '1.05rem', maxWidth: '540px', lineHeight: '1.7' }}>
                Hover over a product to see how much it's shrunk and what that actually cost you on average. This is what Savira does for every scan.
              </p>
            </div>
          </FadeSection>

          <FadeSection delay={200}>
            <ShrinkToggle />
          </FadeSection>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto">
          <FadeSection>
            <div className="mb-16">
              <p className="font-mono text-xs mb-3" style={{ color: '#FF6B87', letterSpacing: '0.15em' }}>
                FEATURES
              </p>
              <h2
                className="font-display font-black"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  letterSpacing: '-0.03em',
                  color: '#0A0A0A',
                }}
              >
                EVERYTHING SAVIRA
                <br />
                <span style={{ color: '#FF6B87' }}>DOES FOR YOU.</span>
              </h2>
            </div>
          </FadeSection>
          <FadeSection delay={100}>
            <FeatureGrid />
          </FadeSection>
        </div>
      </section>

      {/* ── PROMISE BANNER ── */}
      <section
        className="py-24 px-6"
        style={{ background: '#0A0A0A' }}
      >
        <div className="max-w-7xl mx-auto">
          <FadeSection>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="font-mono text-xs mb-4" style={{ color: '#FF6B87', letterSpacing: '0.15em' }}>
                  OUR PROMISE
                </p>
                <h2
                  className="font-display font-black mb-6"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontWeight: 900,
                    fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                    letterSpacing: '-0.04em',
                    color: '#FFFFFF',
                    lineHeight: 1.05,
                  }}
                >
                  FREE NOW.
                  <br />
                  <span style={{ color: '#FF6B87' }}>FREE AFTER.</span>
                  <br />
                  ALWAYS FREE.
                </h2>
                <p style={{ color: '#A1A1A1', fontSize: '1.05rem', lineHeight: '1.7', maxWidth: '460px' }}>
                  Savira is fully free during beta. After beta, there will be an extremely generous free tier and no pressure to upgrade. We will never show you ads. Ever.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { label: 'Ads', value: 'None. Not now, not ever.', color: '#FF6B87', icon: '✕' },
                  { label: 'Premium paywalls', value: 'Everything is free during beta. Generous free tier always.', color: '#D97706', icon: '✕' },
                  { label: 'Selling your data', value: 'We don\'t share, rent, or sell your data. Period.', color: '#FF6B87', icon: '✕' },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-xl"
                    style={{ background: '#161616', border: '1px solid #262626' }}
                  >
                    <span
                      className="font-mono font-bold text-lg mt-0.5"
                      style={{ color: item.color, lineHeight: 1 }}
                    >
                      {item.icon}
                    </span>
                    <div>
                      <p
                        className="font-mono text-xs font-bold mb-1"
                        style={{ color: item.color, letterSpacing: '0.1em' }}
                      >
                        {item.label.toUpperCase()}
                      </p>
                      <p style={{ color: '#A1A1A1', fontSize: '15px', lineHeight: '1.6' }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6 text-center" style={{ background: '#F7F5F2' }}>
        <FadeSection>
          <img
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69af087d3aa01b6a545e1feb/7b968987e_icon.png"
            alt="Savira"
            className="w-20 h-20 rounded-2xl mx-auto mb-8 object-cover"
            style={{ boxShadow: '0 8px 40px rgba(255,107,135,0.2)' }}
          />
          <h2
            className="font-display font-black mb-6"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.2rem, 6vw, 5rem)',
              letterSpacing: '-0.04em',
              color: '#0A0A0A',
              lineHeight: 1.05,
            }}
          >
            START SCANNING.
            <br />
            <span style={{ color: '#FF6B87' }}>IT'S FREE.</span>
          </h2>
          <p
            className="mb-10 mx-auto"
            style={{ color: '#555555', fontSize: '1.1rem', lineHeight: '1.7', maxWidth: '500px' }}
          >
            Download Savira and scan your next shop. No account required to get started.
          </p>
          <Link
            to={createPageUrl('Download')}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold transition-all duration-200 hover:scale-105"
            style={{
              background: '#FF6B87',
              color: '#FFFFFF',
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 800,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              fontSize: '15px',
              textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(255,107,135,0.35)',
            }}
          >
            Download Savira Free →
          </Link>
        </FadeSection>
      </section>
    </div>
  );
}