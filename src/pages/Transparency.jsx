import React, { useEffect, useRef, useState } from 'react';

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

const reports = [
  {
    date: '2025-01-15',
    category: 'DAIRY',
    title: 'Major butter brands cut pack sizes by up to 20%',
    summary: 'We tracked 14 butter SKUs across Tesco, Sainsbury\'s, Asda, and Morrisons. 9 of 14 have reduced weight since 2022 while maintaining or raising price.',
    change: '-17% avg',
    type: 'shrink',
    products: 14,
  },
  {
    date: '2025-01-08',
    category: 'SNACKS',
    title: 'Crisp multipack counts quietly reduced',
    summary: '6-pack and 12-pack formats across major crisp brands have reduced individual bag sizes by 8–25% with no change to outer packaging dimensions.',
    change: '-22% avg',
    type: 'shrink',
    products: 31,
  },
  {
    date: '2024-12-20',
    category: 'CLEANING',
    title: 'Fabric conditioner concentrated — or shrunken?',
    summary: 'Three leading fabric conditioner brands relaunched as "concentrated" formulas. We compared wash counts: actual value fell in all three cases.',
    change: '-14% value',
    type: 'price',
    products: 8,
  },
  {
    date: '2024-12-10',
    category: 'BEVERAGES',
    title: 'Orange juice cartons: the 1L isn\'t 1L anymore',
    summary: 'Six out of eight mainstream OJ brands now sell 900ml cartons in packaging identical in height to the previous 1L format.',
    change: '-10% volume',
    type: 'shrink',
    products: 8,
  },
  {
    date: '2024-11-28',
    category: 'CEREALS',
    title: 'Breakfast cereals: the box is the same. The contents aren\'t.',
    summary: 'We weighed 22 breakfast cereal products across five brands. 15 have reduced their fill weight while maintaining box dimensions.',
    change: '-11% avg',
    type: 'shrink',
    products: 22,
  },
  {
    date: '2024-11-14',
    category: 'HOUSEHOLD',
    title: 'Dishwasher tablet count drops — same box size',
    summary: 'Four major dishwasher tablet brands have quietly reduced tablet counts per box by 5–15% since 2023. Packaging unchanged.',
    change: '-12% count',
    type: 'shrink',
    products: 11,
  },
];

const methodology = [
  {
    step: '01',
    title: 'Data Collection',
    body: 'We collect product weights, volumes, and pricing from barcode scans, retailer APIs, and crowdsourced user submissions. Every data point is timestamped.',
  },
  {
    step: '02',
    title: 'Historical Comparison',
    body: 'Each product is compared against its own historical record. We track net weight, declared volume, pack unit count, and price per gram/ml.',
  },
  {
    step: '03',
    title: 'Validation',
    body: 'Changes above a 3% threshold trigger manual review. We cross-reference against ONS inflation data, WRAP food waste statistics, and manufacturer announcements.',
  },
  {
    step: '04',
    title: 'Publishing',
    body: 'Verified changes are published to the Savira database within 48 hours. All reports are public, permanent, and never edited without a visible change log.',
  },
];

export default function Transparency() {
  const [filter, setFilter] = useState('ALL');
  const categories = ['ALL', 'DAIRY', 'SNACKS', 'CEREALS', 'BEVERAGES', 'CLEANING', 'HOUSEHOLD'];
  const filtered = filter === 'ALL' ? reports : reports.filter(r => r.category === filter);

  return (
    <div style={{ background: '#F7F5F2' }}>
      {/* Hero */}
      <section className="pt-40 pb-24 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs mb-4" style={{ color: '#FF6B87', letterSpacing: '0.18em' }}>
            TRANSPARENCY REPORT
          </p>
          <h1
            className="font-display font-black mb-6 leading-none"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              letterSpacing: '-0.04em',
              color: '#0A0A0A',
            }}
          >
            THE DATA.
            <br />
            <span style={{ color: '#FF6B87' }}>REAL EXAMPLES.</span>
          </h1>
          <p style={{ color: '#555555', fontSize: '1.1rem', lineHeight: '1.75', maxWidth: '600px' }}>
            These are real examples of shrinkflation and price manipulation, surfaced by Savira's AI. We track thousands of products every day. If you want to know if your favourite brand has shrunk their pack size or raised their price, this is where you'll find out.
          </p>
        </div>
      </section>

      {/* Reports */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Filter bar */}
          <FadeSection>
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className="font-mono text-xs px-4 py-2 rounded-full transition-all duration-200"
                  style={{
                    letterSpacing: '0.1em',
                    background: filter === cat ? '#0A0A0A' : '#FFFFFF',
                    color: filter === cat ? '#FFFFFF' : '#555555',
                    border: `1px solid ${filter === cat ? '#0A0A0A' : '#E2E0DC'}`,
                    cursor: 'pointer',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeSection>

          <div className="flex flex-col gap-4">
            {filtered.map((r, i) => (
              <FadeSection key={i} delay={i * 60}>
                <div
                  className="p-6 md:p-8 rounded-2xl transition-all duration-200 hover:shadow-sm"
                  style={{ background: '#FFFFFF', border: '1px solid #E2E0DC' }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span
                          className="font-mono text-xs px-2 py-1 rounded"
                          style={{ background: '#F7F5F2', color: '#999999', letterSpacing: '0.1em' }}
                        >
                          {r.category}
                        </span>
                        <span className="font-mono text-xs" style={{ color: '#C8C5BF' }}>
                          {r.date}
                        </span>
                        <span className="font-mono text-xs" style={{ color: '#C8C5BF' }}>
                          {r.products} products tracked
                        </span>
                      </div>
                      <h3
                        className="font-display font-bold mb-2"
                        style={{
                          fontFamily: "'Inter Tight', sans-serif",
                          fontWeight: 800,
                          fontSize: '1.15rem',
                          letterSpacing: '-0.02em',
                          color: '#0A0A0A',
                        }}
                      >
                        {r.title}
                      </h3>
                      <p style={{ color: '#555555', fontSize: '15px', lineHeight: '1.65' }}>
                        {r.summary}
                      </p>
                    </div>
                    <div
                      className="shrink-0 px-5 py-4 rounded-xl text-center"
                      style={{
                        background: r.type === 'shrink' ? '#FFF0F3' : '#FFF8E7',
                        border: `1px solid ${r.type === 'shrink' ? '#FFCDD5' : '#FDE68A'}`,
                        minWidth: '100px',
                      }}
                    >
                      <p
                        className="font-mono font-bold"
                        style={{
                          color: r.type === 'shrink' ? '#FF6B87' : '#D97706',
                          fontSize: '1.5rem',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {r.change}
                      </p>
                      <p
                        className="font-mono text-xs mt-1"
                        style={{ color: r.type === 'shrink' ? '#FF6B87' : '#D97706', opacity: 0.7 }}
                      >
                        {r.type === 'shrink' ? 'SHRUNK' : 'PRICE RISE'}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 px-6" style={{ background: '#FFFFFF' }}>
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="font-mono text-xs mb-4" style={{ color: '#FF6B87', letterSpacing: '0.15em' }}>
              HOW WE WORK
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
              OUR METHODOLOGY.
              <br />
              <span style={{ color: '#FF6B87' }}>NO GUESSING.</span>
            </h2>
          </FadeSection>
          <div className="grid md:grid-cols-2 gap-6">
            {methodology.map((m, i) => (
              <FadeSection key={i} delay={i * 80}>
                <div className="p-8 rounded-2xl" style={{ background: '#F7F5F2', border: '1px solid #E2E0DC' }}>
                  <p className="font-mono font-bold mb-3" style={{ color: '#FF6B87', fontSize: '2rem' }}>
                    {m.step}
                  </p>
                  <h3
                    className="font-display font-bold mb-3"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 800, fontSize: '1.1rem', color: '#0A0A0A' }}
                  >
                    {m.title}
                  </h3>
                  <p style={{ color: '#555555', fontSize: '15px', lineHeight: '1.7' }}>
                    {m.body}
                  </p>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* What we track / don't */}
      <section className="py-24 px-6" style={{ background: '#0A0A0A' }}>
        <div className="max-w-5xl mx-auto">
          <FadeSection>
            <p className="font-mono text-xs mb-4" style={{ color: '#FF6B87', letterSpacing: '0.15em' }}>
              DATA CHARTER
            </p>
            <h2
              className="font-display font-black mb-16"
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                letterSpacing: '-0.03em',
                color: '#FFFFFF',
              }}
            >
              EXACTLY WHAT
              <br />
              <span style={{ color: '#FF6B87' }}>WE COLLECT.</span>
            </h2>
          </FadeSection>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeSection delay={100}>
              <div>
                <p className="font-mono text-xs mb-6" style={{ color: '#FF6B87', letterSpacing: '0.15em' }}>
                  PRODUCT DATA — WE TRACK THIS
                </p>
                {[
                  'Net weight in grams',
                  'Net volume in millilitres',
                  'Pack unit count',
                  'Retail price across stores',
                  'Price per gram / ml',
                  'Pack size over time',
                  'Product reformulations',
                  'Retailer availability',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 mb-3">
                    <span style={{ color: '#FF6B87' }}>+</span>
                    <span className="font-mono text-sm" style={{ color: '#A1A1A1' }}>{item}</span>
                  </div>
                ))}
              </div>
            </FadeSection>
            <FadeSection delay={150}>
              <div>
                <p className="font-mono text-xs mb-6" style={{ color: '#555555', letterSpacing: '0.15em' }}>
                  USER DATA — WE NEVER TOUCH THIS
                </p>
                {[
                  'Your identity',
                  'Your email or phone number (optional)',
                  'Your shopping history',
                  'Your location',
                  'Your device fingerprint',
                  'Your browsing behaviour',
                  'Any personally identifiable data',
                ].map(item => (
                  <div key={item} className="flex items-center gap-3 mb-3">
                    <span style={{ color: '#444444' }}>×</span>
                    <span className="font-mono text-sm" style={{ color: '#555555' }}>{item}</span>
                  </div>
                ))}
              </div>
            </FadeSection>
          </div>
        </div>
      </section>
    </div>
  );
}