import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiShoppingCart, 
  FiCpu, 
  FiBriefcase
} from 'react-icons/fi';

const services = [
  { 
    icon: <FiShoppingCart size={40} />, 
    title: 'E-Commerce Solutions', 
    description: 'A comprehensive platform for buying and selling products with secure payments, inventory management, and seamless user experience. Features include multi-vendor support, real-time tracking, and AI-powered recommendations.',
  },
  { 
    icon: <FiCpu size={40} />, 
    title: 'IT & EEE Solutions', 
    description: 'Cutting-edge Information Technology and Electrical & Electronics Engineering solutions. Custom software development, hardware integration, IoT systems, and smart device solutions for modern enterprises.',
  },
  { 
    icon: <FiBriefcase size={40} />, 
    title: 'Business Solutions', 
    description: 'Strategic business consulting and enterprise solutions to optimize operations, drive growth, and enhance profitability. Complete business transformation services.',
  }
];

export default function ServicesSection() {
  return (
    <section id="services" style={{
      padding: 'clamp(60px, 10vh, 100px) clamp(1rem, 5vw, 2rem)',
      position: 'relative',
      zIndex: 2,
      background: 'rgba(10, 10, 26, 0.8)'
    }}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        width: '100%'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 6vh, 4rem)' }}
        >
          <h2 style={{
            fontSize: 'clamp(1.8rem, 6vw, 3rem)',
            marginBottom: 'clamp(0.8rem, 2vw, 1rem)',
            fontFamily: 'Playfair Display, serif'
          }}>
            Our Core <span style={{ color: '#5865f2' }}>Services</span>
          </h2>
          <p style={{ 
            color: '#b8c6db', 
            fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', 
            maxWidth: 'min(600px, 90%)', 
            margin: '0 auto',
            padding: '0 1rem'
          }}>
            Empowering businesses with innovative solutions
          </p>
        </motion.div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: 'clamp(1.5rem, 4vw, 2rem)',
          maxWidth: 'min(1200px, 95%)',
          margin: '0 auto'
        }}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                borderRadius: 'clamp(15px, 3vw, 20px)',
                padding: 'clamp(1.5rem, 4vw, 2rem)',
                border: '1px solid rgba(88, 101, 242, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Icon without motion - removed whileHover and transition */}
              <div style={{
                color: '#5865f2',
                marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                display: 'inline-block'
              }}>
                {service.icon}
              </div>
              <h3 style={{
                fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
                marginBottom: 'clamp(0.8rem, 2vw, 1rem)',
                color: '#5865f2',
                fontFamily: 'Playfair Display, serif'
              }}>
                {service.title}
              </h3>
              <p style={{ 
                color: '#b8c6db', 
                lineHeight: '1.6', 
                marginBottom: '1.5rem',
                fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
                flex: 1
              }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}