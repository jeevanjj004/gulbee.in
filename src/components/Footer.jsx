import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(5, 5, 15, 0.95)',
      padding: 'clamp(1.5rem, 5vw, 2rem) clamp(1rem, 5vw, 2rem)',
      position: 'relative',
      zIndex: 2,
      borderTop: '1px solid rgba(88, 101, 242, 0.2)',
      marginTop: 'auto'
    }}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        width: '100%'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'clamp(1rem, 4vw, 1.5rem)',
          marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
          flexDirection: 'row',
          '@media (max-width: 768px)': {
            flexDirection: 'column',
            textAlign: 'center'
          }
        }}>
          {/* Logo Section */}
          <div style={{ 
            textAlign: 'left',
            '@media (max-width: 768px)': {
              textAlign: 'center'
            }
          }}>
            <h3 style={{
              fontSize: 'clamp(1.3rem, 5vw, 1.5rem)',
              background: 'linear-gradient(135deg, #5865f2, #4b6cb7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '0.3rem'
            }}>
              GULBEE
            </h3>
            <p style={{ 
              color: '#999999', 
              fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)' 
            }}>
              One Vision. Multiple Ventures.
            </p>
          </div>
          
          {/* Quick Links */}
          <div style={{ 
            display: 'flex', 
            gap: 'clamp(1rem, 3vw, 1.5rem)',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{ 
                  color: '#cccccc', 
                  textDecoration: 'none', 
                  fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)',
                  transition: 'color 0.3s',
                  padding: '0.3rem 0'
                }}
                onMouseEnter={(e) => e.target.style.color = '#5865f2'}
                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Social Icons */}
          <div style={{ 
            display: 'flex', 
            gap: 'clamp(0.8rem, 3vw, 1rem)',
            justifyContent: 'center'
          }}>
            <motion.a 
              whileHover={{ y: -2, scale: 1.1 }} 
              href="#" 
              style={{ 
                color: '#5865f2', 
                fontSize: 'clamp(1rem, 4vw, 1.2rem)',
                transition: 'all 0.3s',
                display: 'inline-block'
              }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              whileHover={{ y: -2, scale: 1.1 }} 
              href="#" 
              style={{ 
                color: '#5865f2', 
                fontSize: 'clamp(1rem, 4vw, 1.2rem)',
                transition: 'all 0.3s',
                display: 'inline-block'
              }}
            >
              <FaTwitter />
            </motion.a>
            <motion.a 
              whileHover={{ y: -2, scale: 1.1 }} 
              href="#" 
              style={{ 
                color: '#5865f2', 
                fontSize: 'clamp(1rem, 4vw, 1.2rem)',
                transition: 'all 0.3s',
                display: 'inline-block'
              }}
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div style={{
          textAlign: 'center',
          paddingTop: 'clamp(1rem, 3vw, 1.5rem)',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          color: '#666666',
          fontSize: 'clamp(0.65rem, 2vw, 0.75rem)'
        }}>
          <p>&copy; 2026 GULBEE. All rights reserved.</p>
        </div>
      </div>

      {/* Add responsive styles with media query */}
      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}