import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Layout({ children, currentPageName }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location]);

  const navLinks = [
    { label: 'Home', page: 'Home' },
    { label: 'Mission', page: 'Mission' },
    { label: 'Download', page: 'Download' },
  ];

  const onMission = currentPageName === 'Mission';
  // On Mission page (dark hero), use white for inactive nav items when not scrolled
  const inactiveColor = (onMission && !scrolled) ? '#FFFFFF' : '#0A0A0A';
  const logoColor = (onMission && !scrolled) ? '#FFFFFF' : '#0A0A0A';
  const hamburgerColor = (onMission && !scrolled) ? '#FFFFFF' : '#0A0A0A';

  return (
    <div className="min-h-screen" style={{ background: '#F7F5F2' }}>
      {/* Top Nav */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(247,245,242,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #E2E0DC' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center gap-3 group">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69af087d3aa01b6a545e1feb/7b968987e_icon.png"
              alt="Savira"
              className="w-9 h-9 rounded-xl object-cover"
            />
            <span
              className="font-display font-800 text-xl tracking-tight"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 800, color: logoColor, transition: 'color 0.3s' }}
            >
              SAVIRA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, page }) => {
              const active = currentPageName === page;
              return (
                <Link
                  key={page}
                  to={createPageUrl(page)}
                  className="text-sm font-medium transition-colors duration-200"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    color: active ? '#FF6B87' : inactiveColor,
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    fontSize: '13px',
                    transition: 'color 0.3s',
                  }}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              to={createPageUrl('Download')}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
              style={{
                background: (onMission && !scrolled) ? 'transparent' : '#0A0A0A',
                color: '#FFFFFF',
                border: (onMission && !scrolled) ? '1px solid rgba(255,255,255,0.4)' : '1px solid transparent',
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 700,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                fontSize: '12px',
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
            >
              Get the App
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-0.5 transition-all duration-200"
              style={{
                background: hamburgerColor,
                transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
              }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-200"
              style={{ background: hamburgerColor, opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-200"
              style={{
                background: hamburgerColor,
                transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
              }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
            style={{ background: 'rgba(247,245,242,0.98)', borderBottom: '1px solid #E2E0DC' }}
          >
            {navLinks.map(({ label, page }) => (
              <Link
                key={page}
                to={createPageUrl(page)}
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  color: currentPageName === page ? '#FF6B87' : '#0A0A0A',
                  textDecoration: 'none',
                }}
              >
                {label}
              </Link>
            ))}
            <Link
              to={createPageUrl('Download')}
              className="inline-block text-center px-5 py-3 rounded-full"
              style={{
                background: '#0A0A0A',
                color: '#FFFFFF',
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 700,
                textTransform: 'uppercase',
                fontSize: '13px',
                textDecoration: 'none',
              }}
            >
              Get the App
            </Link>
          </div>
        )}
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer style={{ background: '#0A0A0A', color: '#FFFFFF' }}>
        {/* Manifesto block */}
        <div
          className="px-6 py-20 text-center"
          style={{ borderBottom: '1px solid #262626' }}
        >
          <p
            className="font-display leading-none mb-4"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 8vw, 7rem)',
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
            }}
          >
            NO ADS.
          </p>
          <p
            className="font-display leading-none mb-4"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 8vw, 7rem)',
              letterSpacing: '-0.03em',
              color: '#FF6B87',
            }}
          >
            NO PREMIUM.
          </p>
          <p
            className="font-display leading-none"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 8vw, 7rem)',
              letterSpacing: '-0.03em',
              color: '#FFFFFF',
            }}
          >
            NO BS.
          </p>
        </div>

        {/* Tracking columns */}
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-10" style={{ borderBottom: '1px solid #262626' }}>
          <div>
            <p className="font-mono text-xs mb-4" style={{ color: '#FF6B87', letterSpacing: '0.15em' }}>
              WE TRACK
            </p>
            {['Price per unit', 'Pack size changes', 'Retailer pricing', 'Inflation over time'].map(item => (
              <p key={item} className="font-mono text-sm mb-2" style={{ color: '#A1A1A1' }}>
                <span style={{ color: '#FF6B87', marginRight: '8px' }}>+</span>{item}
              </p>
            ))}
          </div>
          <div>
            <p className="font-mono text-xs mb-4" style={{ color: '#D97706', letterSpacing: '0.15em' }}>
              WE FLAG
            </p>
            {['Shrinkflation incidents', 'Price hikes vs. size cuts', 'Hidden cost-per-gram rises'].map(item => (
              <p key={item} className="font-mono text-sm mb-2" style={{ color: '#A1A1A1' }}>
                <span style={{ color: '#D97706', marginRight: '8px' }}>!</span>{item}
              </p>
            ))}
          </div>
          <div>
            <p className="font-mono text-xs mb-4" style={{ color: '#555555', letterSpacing: '0.15em' }}>
              WE NEVER TRACK
            </p>
            {['Your personal data', 'Your shopping habits', 'Your location', 'Your identity'].map(item => (
              <p key={item} className="font-mono text-sm mb-2" style={{ color: '#555555' }}>
                <span style={{ marginRight: '8px' }}>×</span>{item}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69af087d3aa01b6a545e1feb/7b968987e_icon.png"
              alt="Savira"
              className="w-7 h-7 rounded-lg object-cover"
            />
            <span
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 800, fontSize: '14px', color: '#FFFFFF', letterSpacing: '0.05em' }}
            >
              SAVIRA
            </span>
          </div>
          <p className="font-mono text-xs" style={{ color: '#555555' }}>
            © {new Date().getFullYear()} Savira · Free during beta · Always free · For help contact{' '}
            <a
              href="https://mail.google.com/mail/?view=cm&to=savira.help@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              style={{ color: '#A1A1A1', textDecoration: 'none' }}
            >
              savira.help@gmail.com
            </a>
          </p>
          <div className="flex items-center gap-3">
  <a href="https://www.instagram.com/savira_ai" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
    className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200"
    style={{ background: '#1A1A1A', border: '1px solid #333333' }}
    onMouseEnter={e => e.currentTarget.style.borderColor='#FF6B87'}
    onMouseLeave={e => e.currentTarget.style.borderColor='#333333'}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A1A1A1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="#A1A1A1"/>
    </svg>
  </a>
  <a href="https://www.youtube.com/@SaviraAI" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
    className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200"
    style={{ background: '#1A1A1A', border: '1px solid #333333' }}
    onMouseEnter={e => e.currentTarget.style.borderColor='#FF6B87'}
    onMouseLeave={e => e.currentTarget.style.borderColor='#333333'}>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A1A1A1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#A1A1A1" stroke="none"/>
    </svg>
  </a>
  <a href="https://www.tiktok.com/@savira.ai" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
    className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200"
    style={{ background: '#1A1A1A', border: '1px solid #333333' }}
    onMouseEnter={e => e.currentTarget.style.borderColor='#FF6B87'}
    onMouseLeave={e => e.currentTarget.style.borderColor='#333333'}>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#A1A1A1">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  </a>
</div>
          <div className="flex items-center gap-6">
            {navLinks.map(({ label, page }) => (
              <Link
                key={page}
                to={createPageUrl(page)}
                className="font-mono text-xs hover:text-white transition-colors"
                style={{ color: '#555555', textDecoration: 'none' }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}