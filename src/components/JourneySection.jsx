import React from 'react';
import { motion } from 'framer-motion';

export default function JourneySection() {
  return (
    <section id="journey" style={{
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
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: '1rem',
            fontFamily: 'Playfair Display, serif'
          }}>
            Our <span style={{ color: '#5865f2' }}>Journey</span>
          </h2>

          <p style={{
            color: '#b8c6db',
            fontSize: '1.1rem',
            maxWidth: '750px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            Every successful company begins with a dream. GULBEE was born from the vision of a hardworking middle-class family that believed dedication, unity, and persistence could create something extraordinary.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            background: 'rgba(88, 101, 242, 0.08)',
            border: '1px solid rgba(88, 101, 242, 0.25)',
            borderRadius: '25px',
            padding: '4rem',
            backdropFilter: 'blur(10px)',
            maxWidth: '1000px',
            margin: '0 auto',
            boxShadow: '0 0 40px rgba(88, 101, 242, 0.08)'
          }}
        >

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              color: '#d6deeb',
              fontSize: '1.08rem',
              lineHeight: '2',
              marginBottom: '2rem'
            }}
          >
            GULBEE began with a hardworking father whose determination and entrepreneurial spirit laid the foundation for an inspiring journey. Despite running a small business and facing many challenges, he worked tirelessly to support his family while holding onto a vision far greater than his circumstances. His resilience, consistency, and unwavering belief in growth became the driving force behind what would later become GULBEE.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              color: '#d6deeb',
              fontSize: '1.08rem',
              lineHeight: '2',
              marginBottom: '2rem'
            }}
          >
           Inspired by their father, all three sons developed a strong passion for business and innovation from a young age. Each followed a different educational path while carrying the same entrepreneurial mindset. The eldest brother pursued commerce and finance, gaining valuable real-world experience in financial sectors. The second brother specialized in Computer Science Engineering, bringing technology and modern innovation into the family vision. The youngest brother, currently pursuing Electrical and Electronics Engineering, continues to contribute fresh ideas and future-oriented thinking.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              color: '#d6deeb',
              fontSize: '1.08rem',
              lineHeight: '2',
              marginBottom: '2rem'
            }}
          >
            Despite different backgrounds and experiences, the family shared one common dream — to build something meaningful together under a single identity. That identity became <span style={{ color: '#5865f2', fontWeight: 'bold' }}>GULBEE</span>. More than just a company name, GULBEE represents ambition, unity, sacrifice, and the courage to dream beyond limitations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            style={{
              color: '#d6deeb',
              fontSize: '1.08rem',
              lineHeight: '2',
              marginBottom: '2rem'
            }}
          >
            Today, GULBEE is evolving into a visionary parent company focused on building multiple ventures across industries including technology, e-commerce, business solutions, farming, and future innovations. Every step forward is driven by the values that shaped the family from the beginning — hard work, trust, learning, and relentless determination.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              textAlign: 'center',
              marginTop: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(88, 101, 242, 0.2)'
            }}
          >
            <h3 style={{
              fontSize: '2rem',
              marginBottom: '1rem',
              color: '#5865f2',
              fontFamily: 'Playfair Display, serif'
            }}>
              One Vision. Multiple Ventures.
            </h3>

            <p style={{
              color: '#b8c6db',
              fontSize: '1.1rem',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: '1.8'
            }}>
              GULBEE is not just building businesses — it is building a legacy for generations to come.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}