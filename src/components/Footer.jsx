import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(5, 5, 15, 0.95)',
      padding: '2rem 2rem',
      position: 'relative',
      zIndex: 2,
      borderTop: '1px solid rgba(88, 101, 242, 0.2)'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          marginBottom: '1.5rem'
        }}>
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              background: 'linear-gradient(135deg, #5865f2, #4b6cb7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '0.3rem'
            }}>
              GULBEE
            </h3>
            <p style={{ color: '#999999', fontSize: '0.85rem' }}>
            One Vision. Multiple Ventures.

            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{ 
                  color: '#cccccc', 
                  textDecoration: 'none', 
                  fontSize: '0.85rem',
                  transition: 'color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.color = '#5865f2'}
                onMouseLeave={(e) => e.target.style.color = '#cccccc'}
              >
                {item}
              </a>
            ))}
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <motion.a whileHover={{ y: -2 }} href="#" style={{ color: '#5865f2', fontSize: '1.2rem' }}>
              <FaLinkedin />
            </motion.a>
            <motion.a whileHover={{ y: -2 }} href="#" style={{ color: '#5865f2', fontSize: '1.2rem' }}>
              <FaTwitter />
            </motion.a>
            <motion.a whileHover={{ y: -2 }} href="#" style={{ color: '#5865f2', fontSize: '1.2rem' }}>
              <FaEnvelope />
            </motion.a>
          </div>
        </div>
        
        <div style={{
          textAlign: 'center',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          color: '#666666',
          fontSize: '0.75rem'
        }}>
          <p>&copy; 2026 GULBEE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}