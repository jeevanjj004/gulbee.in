import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiMessageCircle } from 'react-icons/fi';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  return (
    <section id="contact" style={{
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
            Contact <span style={{ color: '#5865f2' }}>Us</span>
          </h2>
          <p style={{ color: '#b8c6db', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Get in touch with our team. We'd love to hear from you.
          </p>
        </motion.div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '3rem'
        }}>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#5865f2' }}>Get in Touch</h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <FiMapPin color="#5865f2" size={24} />
                <div>
                  <h4 style={{ marginBottom: '0.3rem' }}>Location</h4>
                  <p style={{ color: '#b8c6db' }}>Kochara, Idukki, Kerala, India</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <FiPhone color="#5865f2" size={24} />
                <div>
                  <h4 style={{ marginBottom: '0.3rem' }}>Phone</h4>
                  <p style={{ color: '#b8c6db' }}>+91 90618 99022</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <FiMessageCircle color="#5865f2" size={24} />
                <div>
                  <h4 style={{ marginBottom: '0.3rem' }}>WhatsApp</h4>
                  <p style={{ color: '#b8c6db' }}>+91 90618 99022</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <FiMail color="#5865f2" size={24} />
                <div>
                  <h4 style={{ marginBottom: '0.3rem' }}>Email</h4>
                  <p style={{ color: '#b8c6db' }}>teamgulbee@gmail.com</p>
                </div>
              </div>
              
             
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(88, 101, 242, 0.3)',
                    borderRadius: '10px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#5865f2'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(88, 101, 242, 0.3)'}
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your Email"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(88, 101, 242, 0.3)',
                    borderRadius: '10px',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#5865f2'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(88, 101, 242, 0.3)'}
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(88, 101, 242, 0.3)',
                    borderRadius: '10px',
                    color: 'white',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    outline: 'none',
                    transition: 'all 0.3s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#5865f2'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(88, 101, 242, 0.3)'}
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #5865f2, #4b6cb7)',
                  border: 'none',
                  padding: '1rem',
                  borderRadius: '50px',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem'
                }}
              >
                Send Message <FiSend />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}