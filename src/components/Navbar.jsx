import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Services', 'Journey', 'Team', 'Contact'];

  return (
    <>
      {/* ── Responsive styles ── */}
      <style>{`
        .nav-desktop-links {
          display: flex;
          gap: clamp(1rem, 2vw, 2rem);
          align-items: center;
          flex-wrap: wrap;
        }

        .nav-hamburger {
          display: none;
        }

        .nav-mobile-menu {
          display: none;
        }

        @media (max-width: 768px) {
          .nav-desktop-links {
            display: none !important;
          }

          .nav-hamburger {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }

          .nav-mobile-menu {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding: 1rem;
            background: rgba(10, 10, 26, 0.98);
            backdrop-filter: blur(10px);
            margin-top: 0.8rem;
            border-radius: 12px;
            border: 1px solid rgba(88, 101, 242, 0.2);
            overflow: hidden;
          }
        }
      `}</style>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0.8rem 1rem',
          background: scrolled ? 'rgba(10, 10, 26, 0.95)' : 'rgba(10, 10, 26, 0.7)',
          backdropFilter: 'blur(10px)',
          borderBottom: scrolled ? '1px solid rgba(88, 101, 242, 0.2)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 2rem)',
              fontWeight: 'normal',
              fontFamily: "'Branda', 'Orbitron', monospace",
              background: 'linear-gradient(135deg, #ffffff, #5865f2)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: 'pointer',
              letterSpacing: '1px',
            }}
          >
            GULBEE
          </motion.div>

          {/* Desktop nav links — hidden via CSS on mobile */}
          <div className="nav-desktop-links">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ color: '#00ffff', scale: 1.05 }}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
                  fontWeight: '500',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Hamburger button — hidden via CSS on desktop */}
          <button
            className="nav-hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '1.8rem',
              cursor: 'pointer',
              padding: '0.5rem',
              width: '44px',
              height: '44px',
              borderRadius: '8px',
              transition: 'all 0.3s',
            }}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <motion.div
            className="nav-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setIsOpen(false)}
                whileHover={{
                  color: '#00ffff',
                  backgroundColor: 'rgba(0, 255, 255, 0.1)',
                  x: 5,
                }}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  padding: '0.8rem 1rem',
                  textAlign: 'center',
                  borderRadius: '8px',
                  transition: 'all 0.3s',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  fontWeight: '500',
                }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </motion.nav>
    </>
  );
}