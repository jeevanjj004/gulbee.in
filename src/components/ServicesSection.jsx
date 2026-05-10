import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiShoppingCart, 
  FiCpu, 
  FiBriefcase,
  FiTrendingUp,
  FiShield,
  FiGlobe
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
      padding: '100px 2rem',
      position: 'relative',
      zIndex: 2,
      background: 'rgba(10, 10, 26, 0.8)'
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
            Our Core <span style={{ color: '#5865f2' }}>Services</span>
          </h2>
          <p style={{ color: '#b8c6db', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Empowering businesses with innovative solutions
          </p>
        </motion.div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
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
                borderRadius: '20px',
                padding: '2rem',
                border: '1px solid rgba(88, 101, 242, 0.2)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                style={{
                  color: '#5865f2',
                  marginBottom: '1.5rem',
                  display: 'inline-block'
                }}
              >
                {service.icon}
              </motion.div>
              <h3 style={{
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: '#5865f2',
                fontFamily: 'Playfair Display, serif'
              }}>
                {service.title}
              </h3>
              <p style={{ color: '#b8c6db', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                {service.description}
              </p>
              
             
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}