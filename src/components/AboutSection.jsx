import React from 'react';
import { motion } from 'framer-motion';
import { FiTarget, FiEye, FiTrendingUp, FiShield } from 'react-icons/fi';

export default function AboutSection() {
  return (
    <section id="about" style={{
      padding: '100px 2rem',
      position: 'relative',
      zIndex: 2,
      background: 'rgba(10, 10, 26, 0.6)'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: '1rem',
            fontFamily: 'Playfair Display, serif'
          }}>
            About <span style={{ color: '#5865f2' }}>GULBEE</span>
          </h2>
          <p style={{ color: '#b8c6db', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
  A family-driven parent company transforming ideas into multiple ventures with passion, innovation, and long-term vision.
</p>
        </motion.div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            <div style={{
              background: 'rgba(88, 101, 242, 0.1)',
              borderRadius: '50%',
              width: '100px',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              border: '2px solid #5865f2'
            }}>
              <FiTarget size={45} color="#5865f2" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#5865f2' }}>Our Mission</h3>
            <p style={{ color: '#b8c6db', lineHeight: '1.6' }}>
  To build impactful businesses across different industries through hard work, creativity, dedication, and strong family values.
</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            <div style={{
              background: 'rgba(88, 101, 242, 0.1)',
              borderRadius: '50%',
              width: '100px',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              border: '2px solid #5865f2'
            }}>
              <FiEye size={45} color="#5865f2" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#5865f2' }}>Our Vision</h3>
            <p style={{ color: '#b8c6db', lineHeight: '1.6' }}>
  To establish GULBEE as a trusted global brand with multiple successful ventures shaping the future of business and innovation.
</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            <div style={{
              background: 'rgba(88, 101, 242, 0.1)',
              borderRadius: '50%',
              width: '100px',
              height: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              border: '2px solid #5865f2'
            }}>
              <FiShield size={45} color="#5865f2" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#5865f2' }}>Our Values</h3>
            <p style={{ color: '#b8c6db', lineHeight: '1.6' }}>
  Unity, Integrity, Innovation, Commitment, and Growth are the foundation of everything we create at GULBEE.
</p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, rgba(88, 101, 242, 0.1), rgba(75, 108, 183, 0.05))',
            borderRadius: '20px',
            padding: '3rem',
            textAlign: 'center',
            border: '1px solid rgba(88, 101, 242, 0.3)'
          }}
        >
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
  One Vision. Multiple Ventures.
</h3>

        </motion.div>
      </div>
    </section>
  );
}