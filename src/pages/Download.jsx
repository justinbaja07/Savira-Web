import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ScanLine, Search, TrendingDown, ShoppingCart, BarChart2, Bell, Lock, Gift } from 'lucide-react';

function FadeSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(28px)', transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function PlayStoreLogo() {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
      alt="Google Play"
      width="28"
      height="28"
      style={{ objectFit: "contain" }}
    />
  );
}
const perks = [
  { Icon: ScanLine, label: 'Barcode scanner', desc: 'Scan any product in seconds.' },
  { Icon: Search, label: 'Product search', desc: 'Find anything by name or brand.' },
  { Icon: TrendingDown, label: 'Shrinkflation history', desc: 'Full weight & size timeline.' },
  { Icon: ShoppingCart, label: 'Price comparison', desc: 'Best price across all major retailers.' },
  { Icon: BarChart2, label: 'Inflation index', desc: 'Real cost per gram tracked over time.' },
  { Icon: Bell, label: 'Price alerts', desc: 'Get notified when your products change.' },
  { Icon: Lock, label: 'Zero tracking', desc: 'No data collected on you. Ever.' },
  { Icon: Gift, label: 'No ads, no premium', desc: 'Everything free, no strings.' },
];

export default function Download() {

  return (
    <div style={{ background: '#F7F5F2' }}>
      {/* Hero */}
      <section
        className="pt-40 pb-24 px-6 relative overflow-hidden"
        style={{ background: '#FFFFFF' }}
      >
        {/* Decorative ring */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            border: '1px solid #F4A0B0',
            right: '-200px',
            top: '-200px',
            opacity: 0.3,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            border: '1px solid #F4A0B0',
            right: '-100px',
            top: '-100px',
            opacity: 0.2,
          }}
          aria-hidden="true"
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69af087d3aa01b6a545e1feb/7b968987e_icon.png"
              alt="Savira"
              className="w-24 h-24 rounded-3xl object-cover mb-8"
              style={{ boxShadow: '0 16px 60px rgba(255,107,135,0.25)' }}
            />
            <p className="font-mono text-xs mb-4" style={{ color: '#FF6B87', letterSpacing: '0.18em' }}>
              AVAILABLE NOW · FREE
            </p>
            <h1
              className="font-display font-black mb-6 leading-none"
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(3rem, 8vw, 6rem)',
                letterSpacing: '-0.04em',
                color: '#0A0A0A',
              }}
            >
              GET SAVIRA.
              <br />
              <span style={{ color: '#FF6B87' }}>IT'S FREE.</span>
            </h1>
            <p
              className="mb-10 max-w-xl"
              style={{ color: '#555555', fontSize: '1.1rem', lineHeight: '1.75' }}
            >
              Download Savira on Android. No account required to start scanning. Everything is free during beta — and there will always be a generous free tier.
            </p>

            {/* Download button */}
            <div
              className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl cursor-pointer transition-all duration-200 hover:scale-105"
              style={{ background: '#0A0A0A', color: '#FFFFFF' }}
            >
              <PlayStoreLogo />
              <div className="text-left">
                <p className="font-mono text-xs mb-0.5" style={{ color: '#A1A1A1', letterSpacing: '0.1em' }}>
                  GET IT ON
                </p>
                <p
                  className="font-display font-bold"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 800, fontSize: '1.1rem' }}
                >
                  Google Play
                </p>
              </div>
            </div>

            {/* Beta note */}
            <div
              className="mt-8 px-6 py-3 rounded-full"
              style={{ background: '#FFF0F3', border: '1px solid #FFCDD5' }}
            >
              <p className="font-mono text-xs" style={{ color: '#FF6B87', letterSpacing: '0.08em' }}>
                Currently in beta · Everything is free · No account needed to scan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="font-mono text-xs mb-4" style={{ color: '#FF6B87', letterSpacing: '0.15em' }}>
              WHAT YOU GET
            </p>
            <h2
              className="font-display font-black mb-16"
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                letterSpacing: '-0.03em',
                color: '#0A0A0A',
              }}
            >
              EVERYTHING.
              <br />
              <span style={{ color: '#FF6B87' }}>FOR FREE.</span>
            </h2>
          </FadeSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {perks.map((perk, i) => (
              <FadeSection key={i} delay={i * 60}>
                <div
                  className="p-6 rounded-2xl"
                  style={{ background: '#FFFFFF', border: '1px solid #E2E0DC' }}
                >
                  <perk.Icon className="w-6 h-6 mb-3" style={{ color: '#FF6B87' }} />
                  <p
                    className="font-display font-bold mb-1"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 800, fontSize: '15px', color: '#0A0A0A' }}
                  >
                    {perk.label}
                  </p>
                  <p className="font-mono text-xs" style={{ color: '#999999', lineHeight: '1.5' }}>
                    {perk.desc}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* After beta section */}
      <section className="py-24 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-3xl mx-auto text-center">
          <FadeSection>
            <p className="font-mono text-xs mb-4" style={{ color: '#FF6B87', letterSpacing: '0.15em' }}>
              AFTER BETA
            </p>
            <h2
              className="font-display font-black mb-8"
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                letterSpacing: '-0.04em',
                color: '#FFFFFF',
                lineHeight: 1.05,
              }}
            >
              WE WILL ALWAYS
              <br />
              <span style={{ color: '#FF6B87' }}>HAVE A FREE TIER.</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              {[
                { label: 'Ads', status: 'Never', color: '#FF6B87', icon: '✕' },
                { label: 'Premium paywalls', status: 'Generous free tier', color: '#FF6B87', icon: '✓' },
                { label: 'Data selling', status: 'Never', color: '#FF6B87', icon: '✕' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl"
                  style={{ background: '#161616', border: '1px solid #262626' }}
                >
                  <p className="font-mono text-xs mb-2" style={{ color: '#555555', letterSpacing: '0.1em' }}>
                    {item.label.toUpperCase()}
                  </p>
                  <p
                    className="font-mono font-bold text-lg"
                    style={{ color: item.color }}
                  >
                    {item.icon} {item.status}
                  </p>
                </div>
              ))}
            </div>
            <p style={{ color: '#A1A1A1', fontSize: '1rem', lineHeight: '1.75', marginBottom: '2rem' }}>
              We're in beta right now. During beta, 100% of Savira is free to use with no restrictions. After beta, there will be a clearly defined, extremely generous free tier. We will never put core scanning features behind a paywall. We will never run ads.
            </p>
          </FadeSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto">
          <FadeSection>
            <p className="font-mono text-xs mb-4" style={{ color: '#FF6B87', letterSpacing: '0.15em' }}>FAQ</p>
            <h2
              className="font-display font-black mb-12"
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                letterSpacing: '-0.03em',
                color: '#0A0A0A',
              }}
            >
              HONEST ANSWERS.
            </h2>
          </FadeSection>
          {[
            {
              q: 'Do I need to create an account?',
              a: 'Yes, accounts are completely free to make and they help us seperate bots from humans.',
            },
            {
              q: 'Is it really free?',
              a: 'Yes. During beta, everything in Savira is completely free. After beta, there will be an exteremely generous free tier and no features that feel essential will be paywalled.',
            },
            {
              q: 'Will you ever add ads?',
              a: 'No. Ads create a conflict of interest with brands we\'re reporting on. We won\'t accept advertising from any company whose products appear in the app. Ever.',
            },
        
            {
              q: 'How do you get product data?',
              a: 'Through barcode databases, specialized AI models, and community scanning.',
            },
          ].map((faq, i) => (
            <FadeSection key={i} delay={i * 60}>
              <div
                className="py-6"
                style={{ borderBottom: '1px solid #E2E0DC' }}
              >
                <h3
                  className="font-display font-bold mb-2"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#0A0A0A' }}
                >
                  {faq.q}
                </h3>
                <p style={{ color: '#555555', fontSize: '15px', lineHeight: '1.7' }}>
                  {faq.a}
                </p>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>
    </div>
  );
}