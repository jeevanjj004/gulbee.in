import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLinkedin, FiMail, FiX } from 'react-icons/fi';

const teamMembers = [
  {
    id: 1,
    name: 'Jacob AJ',
    role: 'Director',
    category: 'Director',
    image: '/assets/team/jacob-aj2.jpg',
    bio: 'Visionary leader with over 25 years of experience in business expansion and strategic planning. Passionate about innovation and family values.',
    expertise: ['Strategic Planning', 'Business Development', 'Leadership'],
    email: 'jacob.aj@gulbee.com',
    linkedin: 'https://linkedin.com/in/jacob-aj'
  },
  {
    id: 2,
    name: 'Annamma Jacob',
    role: 'Director',
    category: 'Director',
    image: '/assets/team/annamma-jacob3.jpg',
    bio: 'Co-founder driving operational excellence and sustainable growth. Committed to nurturing talent and fostering innovation.',
    expertise: ['Operations Management', 'Finance', 'HR Strategy'],
    email: 'annamma.jacob@gulbee.com',
    linkedin: 'https://linkedin.com/in/annamma-jacob'
  },
  {
    id: 3,
    name: 'Jins Jacob',
    role: 'Co-founder & CEO',
    category: 'CEO',
    image: '/assets/team/jins-jacob1.jpg',
    bio: 'Dynamic CEO leading digital transformation and global expansion initiatives. Tech enthusiast and future-forward thinker.',
    expertise: ['Digital Strategy', 'Innovation', 'Global Markets'],
    email: 'jins.jacob@gulbee.com',
    linkedin: 'https://linkedin.com/in/jins-jacob'
  },
  {
    id: 4,
    name: 'Thomas Jacob',
    role: 'Co-founder & CEO',
    category: 'CEO',
    image: '/assets/team/thomas-jacob5.jpg',
    bio: 'Technology pioneer driving AI and automation initiatives across all business ventures.',
    expertise: ['Artificial Intelligence', 'Automation', 'Tech Innovation'],
    email: 'thomas.jacob@gulbee.com',
    linkedin: 'https://linkedin.com/in/thomas-jacob'
  },
  {
    id: 5,
    name: 'Jeo Jacob',
    role: 'Co-founder & CEO',
    category: 'Co-founder',
    image: '/assets/team/jeo-jacob1.jpg',
    bio: 'Co-founder and strategic leader driving the company vision and long-term sustainable growth.',
    expertise: ['Strategic Alliances', 'Business Operations', 'Leadership'],
    email: 'jeo.jacob@gulbee.com',
    linkedin: 'https://linkedin.com/in/jeo-jacob'
  },
  {
    id: 6,
    name: 'Aleena Joseph',
    role: 'Executive Head',
    category: 'Executive Head',
    image: '/assets/team/aleena-joseph5.jpg',
    bio: 'Visionary leader specializing in customer-centric solutions and business growth strategies.',
    expertise: ['Customer Experience', 'Marketing', 'Growth Strategy'],
    email: 'aleena.joseph@gulbee.com',
    linkedin: 'https://linkedin.com/in/aleena-joseph'
  }
];

// Consistent image style for all members
const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center 30%',
  transition: 'transform 0.5s'
};

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  
  // Separate directors from others
  const directors = teamMembers.filter(member => member.category === 'Director');
  const otherMembers = teamMembers.filter(member => member.category !== 'Director');

  const handleImageError = (memberId) => {
    setImageErrors(prev => ({ ...prev, [memberId]: true }));
  };

  return (
    <section id="team" style={{
      padding: '80px 2rem',
      position: 'relative',
      zIndex: 2,
      background: 'rgba(10, 10, 26, 0.7)'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            marginBottom: '1rem',
            fontFamily: 'Playfair Display, serif'
          }}>
            Our Leadership <span style={{ color: '#5865f2' }}>Team</span>
          </h2>
          <p style={{ color: '#b8c6db', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Visionary leaders driving innovation and excellence
          </p>
        </motion.div>

        {/* Directors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ marginBottom: '4rem' }}
        >
          <h3 style={{
            fontSize: '1.8rem',
            textAlign: 'center',
            marginBottom: '2rem',
            color: '#5865f2',
            fontFamily: 'Playfair Display, serif'
          }}>
            Board of Directors
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
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
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(88, 101, 242, 0.2)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: '280px',
                  backgroundColor: '#1a1a2e'
                }}>
                  {!imageErrors[member.id] ? (
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                      src={member.image}
                      alt={member.name}
                      style={imageStyle}
                      onError={() => handleImageError(member.id)}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #5865f2, #4b6cb7)',
                      color: 'white',
                      fontSize: '3rem',
                      fontWeight: 'bold'
                    }}>
                      {member.name.charAt(0)}
                    </div>
                  )}
                  {/* Darker gradient overlay for better text visibility */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3), transparent)',
                    padding: '1.2rem 1rem 0.8rem'
                  }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: 'bold',
                      marginBottom: '0.2rem',
                      color: '#ffffff',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                    }}>
                      {member.name}
                    </h3>
                    <p style={{
                      color: '#00ffff',
                      fontWeight: '700',
                      fontSize: '0.85rem',
                      textShadow: '1px 1px 1px rgba(0,0,0,0.3)'
                    }}>
                      {member.role}
                    </p>
                  </div>
                </div>
                <div style={{
                  padding: '0.6rem 0.8rem',
                  borderTop: '1px solid rgba(88, 101, 242, 0.2)',
                  background: 'rgba(0, 0, 0, 0.6)'
                }}>
                  <p style={{
                    color: '#b8c6db',
                    fontSize: '0.7rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    <FiMail size={11} /> {member.email}
                  </p>
                </div>
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
            fontSize: '1.8rem',
            textAlign: 'center',
            marginBottom: '2rem',
            color: '#5865f2',
            fontFamily: 'Playfair Display, serif'
          }}>
            Leadership Team
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem'
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
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(88, 101, 242, 0.2)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: '260px',
                  backgroundColor: '#1a1a2e'
                }}>
                  {!imageErrors[member.id] ? (
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.4 }}
                      src={member.image}
                      alt={member.name}
                      style={imageStyle}
                      onError={() => handleImageError(member.id)}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #5865f2, #4b6cb7)',
                      color: 'white',
                      fontSize: '3rem',
                      fontWeight: 'bold'
                    }}>
                      {member.name.charAt(0)}
                    </div>
                  )}
                  {/* Darker gradient overlay for better text visibility */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3), transparent)',
                    padding: '1rem 1rem 0.6rem'
                  }}>
                    <h3 style={{
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      marginBottom: '0.2rem',
                      color: '#ffffff',
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                    }}>
                      {member.name}
                    </h3>
                    <p style={{
                      color: '#00ffff',
                      fontWeight: '700',
                      fontSize: '0.8rem',
                      textShadow: '1px 1px 1px rgba(0,0,0,0.3)'
                    }}>
                      {member.role}
                    </p>
                  </div>
                </div>
                <div style={{
                  padding: '0.5rem 0.8rem',
                  borderTop: '1px solid rgba(88, 101, 242, 0.2)',
                  background: 'rgba(0, 0, 0, 0.6)'
                }}>
                  <p style={{
                    color: '#b8c6db',
                    fontSize: '0.65rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    <FiMail size={10} /> {member.email}
                  </p>
                </div>
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
              background: 'rgba(0, 0, 0, 0.85)',
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
                maxWidth: '850px',
                width: '100%',
                maxHeight: '80vh',
                overflow: 'auto',
                background: 'linear-gradient(135deg, rgba(20, 20, 40, 0.98), rgba(10, 10, 26, 0.98))',
                borderRadius: '16px',
                border: '1px solid rgba(88, 101, 242, 0.3)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                position: 'relative'
              }}
            >
              <button
                onClick={() => setSelectedMember(null)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
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
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1rem'
              }}>
                {/* Image Section */}
                <div style={{
                  position: 'relative',
                  height: '100%',
                  minHeight: '300px',
                  backgroundColor: '#1a1a2e'
                }}>
                  {!imageErrors[selectedMember.id] ? (
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center 30%',
                        borderTopLeftRadius: '16px',
                        borderBottomLeftRadius: '16px'
                      }}
                      onError={() => handleImageError(selectedMember.id)}
                    />
                  ) : (
                    <div style={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #5865f2, #4b6cb7)',
                      color: 'white',
                      fontSize: '4rem',
                      fontWeight: 'bold',
                      borderRadius: '16px'
                    }}>
                      {selectedMember.name.charAt(0)}
                    </div>
                  )}
                </div>
                
                {/* Details Section */}
                <div style={{
                  padding: '1.5rem'
                }}>
                  <h2 style={{
                    fontSize: '1.8rem',
                    marginBottom: '0.2rem',
                    fontFamily: 'Playfair Display, serif',
                    color: '#ffffff'
                  }}>
                    {selectedMember.name}
                  </h2>
                  <p style={{
                    color: '#00ffff',
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    marginBottom: '0.5rem'
                  }}>
                    {selectedMember.role}
                  </p>
                  
                  <p style={{
                    color: '#b8c6db',
                    fontSize: '0.8rem',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    wordBreak: 'break-all'
                  }}>
                    <FiMail size={12} /> {selectedMember.email}
                  </p>
                  
                  <p style={{
                    color: '#e0e0e0',
                    lineHeight: '1.5',
                    marginBottom: '1rem',
                    fontSize: '0.85rem'
                  }}>
                    {selectedMember.bio}
                  </p>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <h4 style={{
                      color: '#00ffff',
                      marginBottom: '0.2rem',
                      fontSize: '0.85rem'
                    }}>
                      Education
                    </h4>
                    <p style={{ color: '#cccccc', fontSize: '0.85rem' }}>{selectedMember.education}</p>
                  </div>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <h4 style={{
                      color: '#00ffff',
                      marginBottom: '0.2rem',
                      fontSize: '0.85rem'
                    }}>
                      Core Expertise
                    </h4>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.3rem'
                    }}>
                      {selectedMember.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          style={{
                            background: 'rgba(0, 255, 255, 0.15)',
                            padding: '0.15rem 0.5rem',
                            borderRadius: '50px',
                            fontSize: '0.7rem',
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
                    gap: '0.6rem',
                    marginTop: '0.8rem',
                    flexWrap: 'wrap'
                  }}>
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      href={`mailto:${selectedMember.email}`}
                      style={{
                        background: 'linear-gradient(135deg, #5865f2, #4b6cb7)',
                        padding: '0.4rem 1rem',
                        borderRadius: '50px',
                        color: 'white',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.75rem'
                      }}
                    >
                      <FiMail size={12} /> Email
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: 'rgba(255,255,255,0.1)',
                        padding: '0.4rem 1rem',
                        borderRadius: '50px',
                        color: '#00ffff',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        border: '1px solid #00ffff',
                        fontSize: '0.75rem'
                      }}
                    >
                      <FiLinkedin size={12} /> LinkedIn
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}