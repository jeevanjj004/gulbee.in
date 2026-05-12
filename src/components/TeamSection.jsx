import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiMail, FiX, FiUser } from 'react-icons/fi';

const teamMembers = [
  {
    id: 1,
    name: 'Jacob AJ',
    role: 'Director',
    category: 'Director',
    bio: 'Visionary leader with over 25 years of experience in business expansion and strategic planning. Passionate about innovation and family values.',
    expertise: ['Strategic Planning', 'Business Development', 'Leadership'],
    email: 'jacob.aj@gulbee.com',
    linkedin: '#'
  },
  {
    id: 2,
    name: 'Annamma Jacob',
    role: 'Director',
    category: 'Director',
    bio: 'Co-founder driving operational excellence and sustainable growth. Committed to nurturing talent and fostering innovation.',
    expertise: ['Operations Management', 'Finance', 'HR Strategy'],
    email: 'annamma.jacob@gulbee.com',
    linkedin: '#'
  },
  {
    id: 3,
    name: 'Jins Jacob',
    role: 'Co-founder & CEO',
    category: 'CEO',
    bio: 'Dynamic CEO leading digital transformation and global expansion initiatives. Tech enthusiast and future-forward thinker.',
    expertise: ['Digital Strategy', 'Innovation', 'Global Markets'],
    email: 'jins.jacob@gulbee.com',
    linkedin: '#'
  },
  {
    id: 4,
    name: 'Thomas Jacob',
    role: 'Co-founder & CEO',
    category: 'CEO',
    bio: 'Technology pioneer driving AI and automation initiatives across all business ventures.',
    expertise: ['Artificial Intelligence', 'Automation', 'Tech Innovation'],
    email: 'thomas.jacob@gulbee.com',
    linkedin: '#'
  },
  {
    id: 5,
    name: 'Jeo Jacob',
    role: 'Co-founder & CEO',
    category: 'Co-founder',
    bio: 'Co-founder and strategic leader driving the company vision and long-term sustainable growth.',
    expertise: ['Strategic Alliances', 'Business Operations', 'Leadership'],
    email: 'jeo.jacob@gulbee.com',
    linkedin: '#'
  },
  {
    id: 6,
    name: 'Aleena Joseph',
    role: 'Executive Head',
    category: 'Executive Head',
    bio: 'Visionary leader specializing in customer-centric solutions and business growth strategies.',
    expertise: ['Customer Experience', 'Marketing', 'Growth Strategy'],
    email: 'aleena.joseph@gulbee.com',
    linkedin: '#'
  }
];

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState(null);
  
  const directors = teamMembers.filter(member => member.category === 'Director');
  const otherMembers = teamMembers.filter(member => member.category !== 'Director');

  return (
    <section id="team" style={{
      padding: 'clamp(60px, 10vh, 80px) clamp(1rem, 5vw, 2rem)',
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
          style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 6vh, 3rem)' }}
        >
          <h2 style={{
            fontSize: 'clamp(1.8rem, 6vw, 3rem)',
            marginBottom: 'clamp(0.8rem, 2vw, 1rem)',
            fontFamily: 'Playfair Display, serif'
          }}>
            Our Leadership <span style={{ color: '#5865f2' }}>Team</span>
          </h2>
          <p style={{ 
            color: '#b8c6db', 
            fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', 
            maxWidth: 'min(600px, 90%)', 
            margin: '0 auto' 
          }}>
            Visionary leaders driving innovation and excellence
          </p>
        </motion.div>

        {/* Directors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ marginBottom: 'clamp(2rem, 6vh, 4rem)' }}
        >
          <h3 style={{
            fontSize: 'clamp(1.3rem, 5vw, 1.8rem)',
            textAlign: 'center',
            marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
            color: '#5865f2',
            fontFamily: 'Playfair Display, serif'
          }}>
            Board of Directors
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
            gap: 'clamp(1.5rem, 4vw, 2rem)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {directors.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedMember(member)}
                style={{
                  cursor: 'pointer',
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(88, 101, 242, 0.3)',
                  transition: 'all 0.3s ease',
                  padding: 'clamp(1.5rem, 4vw, 2rem)',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  width: 'clamp(80px, 15vw, 100px)',
                  height: 'clamp(80px, 15vw, 100px)',
                  background: 'linear-gradient(135deg, #5865f2, #4b6cb7)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto'
                }}>
                  <FiUser size={40} color="#ffffff" />
                </div>
                <h3 style={{
                  fontSize: 'clamp(1.2rem, 4vw, 1.4rem)',
                  fontWeight: 'bold',
                  marginBottom: '0.3rem',
                  color: '#ffffff'
                }}>
                  {member.name}
                </h3>
                <p style={{
                  color: '#00ffff',
                  fontWeight: '600',
                  fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)'
                }}>
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Members Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 style={{
            fontSize: 'clamp(1.3rem, 5vw, 1.8rem)',
            textAlign: 'center',
            marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
            color: '#5865f2',
            fontFamily: 'Playfair Display, serif'
          }}>
            Leadership Team
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
            gap: 'clamp(1.2rem, 3vw, 1.8rem)'
          }}>
            {otherMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedMember(member)}
                style={{
                  cursor: 'pointer',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(88, 101, 242, 0.2)',
                  transition: 'all 0.3s ease',
                  padding: 'clamp(1.2rem, 3vw, 1.5rem)',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  width: 'clamp(65px, 12vw, 80px)',
                  height: 'clamp(65px, 12vw, 80px)',
                  background: 'linear-gradient(135deg, #5865f2, #4b6cb7)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.8rem auto'
                }}>
                  <FiUser size={32} color="#ffffff" />
                </div>
                <h3 style={{
                  fontSize: 'clamp(1rem, 3.5vw, 1.2rem)',
                  fontWeight: 'bold',
                  marginBottom: '0.2rem',
                  color: '#ffffff'
                }}>
                  {member.name}
                </h3>
                <p style={{
                  color: '#00ffff',
                  fontWeight: '600',
                  fontSize: 'clamp(0.75rem, 2vw, 0.85rem)'
                }}>
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal for Member Details */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(20px)',
              zIndex: 2000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
              cursor: 'pointer'
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '600px',
                width: '100%',
                background: 'linear-gradient(135deg, rgba(20, 20, 40, 0.98), rgba(10, 10, 26, 0.98))',
                borderRadius: '20px',
                border: '1px solid rgba(88, 101, 242, 0.3)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                position: 'relative'
              }}
            >
              <button
                onClick={() => setSelectedMember(null)}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '35px',
                  height: '35px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 10,
                  color: '#ffffff'
                }}
              >
                <FiX size={18} />
              </button>
              
              <div style={{
                padding: 'clamp(1.5rem, 5vw, 2rem)'
              }}>
                <div style={{
                  width: 'clamp(80px, 20vw, 100px)',
                  height: 'clamp(80px, 20vw, 100px)',
                  background: 'linear-gradient(135deg, #5865f2, #4b6cb7)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem auto'
                }}>
                  <FiUser size={45} color="#ffffff" />
                </div>
                
                <h2 style={{
                  fontSize: 'clamp(1.5rem, 5vw, 1.8rem)',
                  marginBottom: '0.3rem',
                  fontFamily: 'Playfair Display, serif',
                  color: '#ffffff',
                  textAlign: 'center'
                }}>
                  {selectedMember.name}
                </h2>
                <p style={{
                  color: '#00ffff',
                  fontSize: 'clamp(0.9rem, 3vw, 1rem)',
                  fontWeight: '700',
                  marginBottom: '0.8rem',
                  textAlign: 'center'
                }}>
                  {selectedMember.role}
                </p>
                
                <p style={{
                  color: '#b8c6db',
                  fontSize: '0.8rem',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  wordBreak: 'break-all',
                  textAlign: 'center'
                }}>
                  <FiMail size={12} /> {selectedMember.email}
                </p>
                
                <p style={{
                  color: '#e0e0e0',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem',
                  fontSize: 'clamp(0.85rem, 2.5vw, 0.9rem)',
                  textAlign: 'center'
                }}>
                  {selectedMember.bio}
                </p>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{
                    color: '#00ffff',
                    marginBottom: '0.5rem',
                    fontSize: '0.9rem',
                    textAlign: 'center'
                  }}>
                    Core Expertise
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    justifyContent: 'center'
                  }}>
                    {selectedMember.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: 'rgba(0, 255, 255, 0.15)',
                          padding: '0.3rem 0.8rem',
                          borderRadius: '50px',
                          fontSize: '0.8rem',
                          color: '#00ffff',
                          border: '1px solid rgba(0, 255, 255, 0.3)'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  gap: '0.8rem',
                  marginTop: '1rem',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={`mailto:${selectedMember.email}`}
                    style={{
                      background: 'linear-gradient(135deg, #5865f2, #4b6cb7)',
                      padding: '0.5rem 1.2rem',
                      borderRadius: '50px',
                      color: 'white',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.8rem'
                    }}
                  >
                    <FiMail size={14} /> Email
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      padding: '0.5rem 1.2rem',
                      borderRadius: '50px',
                      color: '#00ffff',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      border: '1px solid #00ffff',
                      fontSize: '0.8rem'
                    }}
                  >
                    <FiLinkedin size={14} /> LinkedIn
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}