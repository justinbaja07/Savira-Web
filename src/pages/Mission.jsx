import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

function FadeSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(28px)', transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const principles = [
  {
    number: '01',
    title: 'AI Overviewed data',
    body: 'Our AI specializes in finding price and size changes without sugar-coating it',
  },
  {
    number: '02',
    title: 'Zero Commercial Compromise',
    body: 'We take no advertising money from brands, retailers, or advertisers. Our only interest is yours. The moment that changes, Savira ceases to mean anything.',
  },
  {
    number: '03',
    title: 'Privacy by Default',
    body: 'We don\'t track your location, purchasing history, or identity. What you scan stays on your device. Period.',
  },
  {
    number: '04',
    title: 'Free Without Asterisks',
    body: 'The data that exposes corporate price manipulation should not itself cost money. Savira is free during beta and will have an extremely generous free tier thereafter.',
  },
];

export default function Mission() {
  return (
    <div style={{ background: '#F7F5F2' }}>
      {/* Hero */}
      <section
        className="pt-40 pb-24 px-6"
        style={{ background: '#0A0A0A' }}
      >
        <div className="max-w-5xl mx-auto">
          <p
            className="font-mono text-xs mb-6"
            style={{ color: '#FF6B87', letterSpacing: '0.18em' }}
          >
            THE MISSION
          </p>
          <h1
            className="font-display font-black mb-8 leading-none"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.8rem, 7vw, 6rem)',
              letterSpacing: '-0.04em',
              color: '#FFFFFF',
            }}
          >
            THE STORES
            <br />
            <span style={{ color: '#FF6B87' }}>DON'T WANT</span>
            <br />
            YOU TO READ THIS.
          </h1>
          <p
            className="max-w-2xl"
            style={{ color: '#A1A1A1', fontSize: '1.15rem', lineHeight: '1.75' }}
          >
            Shrinkflation — the practice of quietly reducing a product's size while maintaining or increasing its price is one of the most pervasive and least understood forms of consumer deception. Savira exists to end the information asymmetry.
          </p>
        </div>
      </section>

      {/* Manifesto body */}
      <section className="py-24 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto">
          <FadeSection>
            <p className="font-mono text-xs mb-8" style={{ color: '#FF6B87', letterSpacing: '0.15em' }}>
              THE PROBLEM
            </p>
            <h2
              className="font-display font-black mb-8"
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                letterSpacing: '-0.03em',
                color: '#0A0A0A',
              }}
            >
              You're paying more for less.
              <br />
              <span style={{ color: '#FF6B87' }}>And most people don't notice.</span>
            </h2>
            <div style={{ color: '#555555', fontSize: '1.05rem', lineHeight: '1.8' }}>
              <p className="mb-5">
                In the US alone, 1 in 3 common grocery products has quietly shrunk since the pandemic. The toilet paper roll that once had 429 sheets now has 320. The family cereal box that once held 24oz now holds 21.7oz. The paper towel roll that once gave you 165 sheets now gives you 135 — same price, less product.
              </p>
              <p className="mb-5">
                The price, meanwhile, went up.
              </p>
              <p className="mb-5">
                This isn't a coincidence. It's a strategy. The our brains are poor at detecting small size reductions, especially when the packaging looks the same. Companies exploit this. They know you won't notice a 15% reduction in the volume of a cereal box. They count on it.
              </p>
              <p>
                Savira doesn't let them count on it anymore.
              </p>
            </div>
          </FadeSection>

          {/* Divider */}
          <div className="my-16 h-px" style={{ background: '#E2E0DC' }} />

          <FadeSection delay={100}>
            <p className="font-mono text-xs mb-8" style={{ color: '#D97706', letterSpacing: '0.15em' }}>
              THE NUMBERS
            </p>
            <div className="grid grid-cols-2 gap-6 mb-12">
              {[
                { n: '1 in 3', label: 'Common grocery products have shrunk since 2019', color: '#FF6B87' },
                { n: '40%', label: 'Hidden per-unit price rise on downsized products', color: '#D97706' },
                { n: '$1,680', label: 'Extra the average household spends on food per year vs. 2021', color: '#FF6B87' },
                { n: '91%', label: 'Of consumers who say they were unaware of the specific products that shrank', color: '#D97706' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl"
                  style={{ background: '#F7F5F2', border: '1px solid #E2E0DC' }}
                >
                  <p
                    className="font-display font-black mb-2"
                    style={{
                      fontFamily: "'Inter Tight', sans-serif",
                      fontWeight: 900,
                      fontSize: 'clamp(2rem, 5vw, 3rem)',
                      color: s.color,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {s.n}
                  </p>
                  <p className="font-mono text-xs" style={{ color: '#999999', lineHeight: '1.5' }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeSection>

          <div className="my-16 h-px" style={{ background: '#E2E0DC' }} />

          <FadeSection delay={150}>
            <p className="font-mono text-xs mb-8" style={{ color: '#FF6B87', letterSpacing: '0.15em' }}>
              THE SOLUTION
            </p>
            <h2
              className="font-display font-black mb-6"
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                letterSpacing: '-0.03em',
                color: '#0A0A0A',
              }}
            >
              Information.
              <span style={{ color: '#FF6B87' }}> Freely available.</span>
            </h2>
            <p style={{ color: '#555555', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2rem' }}>
              The fix isn't legislation. It isn't hope. It's information, at the moment of purchase, free of charge. That's Savira. A forensic tool in your pocket that makes the invisible visible — every time you reach for a product.
            </p>
            <p style={{ color: '#555555', fontSize: '1.05rem', lineHeight: '1.8' }}>
              We're not anti-business. We're pro-consumer. Brands that don't shrink their products have nothing to fear from us. Brands that do should prepare to be seen.
            </p>
          </FadeSection>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 px-6" style={{ background: '#F7F5F2' }}>
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="font-mono text-xs mb-4" style={{ color: '#FF6B87', letterSpacing: '0.15em' }}>
              OUR PRINCIPLES
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
              WHAT WE STAND FOR.
            </h2>
          </FadeSection>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <FadeSection key={i} delay={i * 100}>
                <div
                  className="p-8 rounded-2xl h-full"
                  style={{ background: '#FFFFFF', border: '1px solid #E2E0DC' }}
                >
                  <p
                    className="font-mono font-bold mb-4"
                    style={{ color: '#FF6B87', fontSize: '2rem', letterSpacing: '-0.02em' }}
                  >
                    {p.number}
                  </p>
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
                    {p.title}
                  </h3>
                  <p style={{ color: '#555555', fontSize: '15px', lineHeight: '1.7' }}>
                    {p.body}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 text-center"
        style={{ background: '#0A0A0A' }}
      >
        <FadeSection>
          <h2
            className="font-display font-black mb-6"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              letterSpacing: '-0.04em',
              color: '#FFFFFF',
              lineHeight: 1.05,
            }}
          >
            JOIN THE{' '}
            <span style={{ color: '#FF6B87' }}>TRANSPARENT</span>
            {' '}SIDE.
          </h2>
          <p className="mb-10 mx-auto" style={{ color: '#A1A1A1', fontSize: '1.05rem', maxWidth: '460px', lineHeight: '1.7' }}>
            Download Savira for free. Arm yourself with the information you deserve. Fight back against shrinkflation and price manipulation. Greedy corporations don't want you to read this, but they can't stop you.
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
              fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            Download Free →
          </Link>
        </FadeSection>
      </section>
    </div>
  );
}