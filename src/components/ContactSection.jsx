import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiSend, FiMessageCircle } from 'react-icons/fi';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will contact you soon.');
    setFormData({ name: '', email: '', message: '' });
  };
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  return (
    <section id="contact" style={{
      padding: '80px 20px',
      position: 'relative',
      zIndex: 2,
      background: 'rgba(10, 10, 26, 0.9)'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '15px',
            fontFamily: 'Playfair Display, serif'
          }}>
            Contact <span style={{ color: '#5865f2' }}>Us</span>
          </h2>
          <p style={{ color: '#b8c6db', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Get in touch with our team. We'd love to hear from you.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {/* Contact Information */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            padding: '30px',
            border: '1px solid rgba(88, 101, 242, 0.2)'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#5865f2' }}>Get in Touch</h3>
            
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <FiMapPin color="#5865f2" size={24} />
                <div>
                  <h4 style={{ marginBottom: '5px' }}>Location</h4>
                  <p style={{ color: '#b8c6db' }}>Kochara, Idukki, Kerala, India</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <FiPhone color="#5865f2" size={24} />
                <div>
                  <h4 style={{ marginBottom: '5px' }}>Phone</h4>
                  <p style={{ color: '#b8c6db' }}>+91 90618 99022</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <FiMessageCircle color="#5865f2" size={24} />
                <div>
                  <h4 style={{ marginBottom: '5px' }}>WhatsApp</h4>
                  <p style={{ color: '#b8c6db' }}>+91 90618 99022</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <FiMail color="#5865f2" size={24} />
                <div>
                  <h4 style={{ marginBottom: '5px' }}>Email</h4>
                  <p style={{ color: '#b8c6db' }}>teamgulbee@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            padding: '30px',
            border: '1px solid rgba(88, 101, 242, 0.2)'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#5865f2' }}>Send us a Message</h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(88, 101, 242, 0.3)',
                  borderRadius: '10px',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#5865f2'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(88, 101, 242, 0.3)'}
              />
              
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(88, 101, 242, 0.3)',
                  borderRadius: '10px',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#5865f2'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(88, 101, 242, 0.3)'}
              />
              
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
                rows="5"
                style={{
                  width: '100%',
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(88, 101, 242, 0.3)',
                  borderRadius: '10px',
                  color: 'white',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  outline: 'none'
                }}
                onFocus={(e) => e.target.style.borderColor = '#5865f2'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(88, 101, 242, 0.3)'}
              />
              
              <button
                type="submit"
                style={{
                  background: 'linear-gradient(135deg, #5865f2, #4b6cb7)',
                  border: 'none',
                  padding: '12px',
                  borderRadius: '50px',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}
              >
                Send Message <FiSend />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}