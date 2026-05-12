// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { FiMenu, FiX } from 'react-icons/fi';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
  
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
  
//   const navItems = ['Home', 'About', 'Services', 'Journey', 'Team', 'Contact'];
  
//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 1000,
//         padding: '1rem 2rem',
//         background: scrolled ? 'rgba(10, 10, 26, 0.95)' : 'rgba(10, 10, 26, 0.7)',
//         backdropFilter: 'blur(10px)',
//         borderBottom: scrolled ? '1px solid rgba(88, 101, 242, 0.2)' : 'none',
//         transition: 'all 0.3s ease'
//       }}
//     >
//       <div style={{
//         maxWidth: '1400px',
//         margin: '0 auto',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center'
//       }}>
//         {/* Logo with Branda Font */}
//         <motion.div
//   whileHover={{ scale: 1.05 }}
//   style={{
//     fontSize: '2rem',
//     fontWeight: 'normal',
//     fontFamily: "'Branda', 'Orbitron', monospace",
//     background: 'linear-gradient(135deg, #ffffff, #5865f2)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//     cursor: 'pointer',
//     letterSpacing: '1px'
//   }}
// >
//   GULBEE
// </motion.div>
        
//         {/* Desktop Menu */}
//         <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
//           <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
//             {navItems.map((item, index) => (
//               <motion.a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 whileHover={{ color: '#00ffff', scale: 1.05 }}
//                 style={{
//                   color: 'white',
//                   textDecoration: 'none',
//                   fontSize: '0.95rem',
//                   fontWeight: '500',
//                   transition: 'all 0.3s',
//                   cursor: 'pointer'
//                 }}
//               >
//                 {item}
//               </motion.a>
//             ))}
//           </div>
//         </div>
        
//         {/* Mobile Menu Button */}
//         <div style={{ display: 'none', '@media (max-width: 768px)': { display: 'block' } }}>
//           <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}>
//             {isOpen ? <FiX /> : <FiMenu />}
//           </button>
//         </div>
//       </div>
      
//       {/* Mobile Menu */}
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0, height: 0 }}
//           animate={{ opacity: 1, height: 'auto' }}
//           exit={{ opacity: 0, height: 0 }}
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '1rem',
//             padding: '1rem',
//             background: 'rgba(10, 10, 26, 0.95)',
//             marginTop: '1rem'
//           }}
//         >
//           {navItems.map((item) => (
//             <a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               onClick={() => setIsOpen(false)}
//               style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}
//               onMouseEnter={(e) => e.target.style.color = '#00ffff'}
//               onMouseLeave={(e) => e.target.style.color = 'white'}
//             >
//               {item}
//             </a>
//           ))}
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// }






import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = ['Home', 'About', 'Services', 'Journey', 'Team', 'Contact'];
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0.8rem 1rem',
        background: scrolled ? 'rgba(10, 10, 26, 0.95)' : 'rgba(10, 10, 26, 0.7)',
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled ? '1px solid rgba(88, 101, 242, 0.2)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo with Branda Font - Responsive */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            fontSize: 'clamp(1.5rem, 5vw, 2rem)',
            fontWeight: 'normal',
            fontFamily: "'Branda', 'Orbitron', monospace",
            background: 'linear-gradient(135deg, #ffffff, #5865f2)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            cursor: 'pointer',
            letterSpacing: '1px'
          }}
        >
          GULBEE
        </motion.div>
        
        {/* Desktop Menu - Hidden on mobile */}
        <div style={{
          display: 'flex',
          gap: 'clamp(1rem, 3vw, 2rem)',
          alignItems: 'center'
        }}>
          <div style={{
            display: 'flex',
            gap: 'clamp(1rem, 2vw, 2rem)',
            flexWrap: 'wrap'
          }}>
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ color: '#00ffff', scale: 1.05 }}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontSize: 'clamp(0.8rem, 2vw, 0.95rem)',
                  fontWeight: '500',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
        
        {/* Mobile Menu Button - Visible only on mobile */}
        <div style={{
          display: 'block',
          '@media (min-width: 769px)': { display: 'none' }
        }}>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '1.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '0.5rem'
            }}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu - Responsive */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1.5rem',
            background: 'rgba(10, 10, 26, 0.98)',
            backdropFilter: 'blur(10px)',
            marginTop: '1rem',
            borderRadius: '12px',
            border: '1px solid rgba(88, 101, 242, 0.2)'
          }}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontSize: '1.2rem',
                padding: '0.8rem',
                textAlign: 'center',
                borderRadius: '8px',
                transition: 'all 0.3s',
                backgroundColor: 'rgba(255, 255, 255, 0.05)'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#00ffff';
                e.target.style.backgroundColor = 'rgba(0, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'white';
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}

      {/* Add responsive styles with media query */}
      <style>{`
        @media (max-width: 768px) {
          nav {
            padding: 0.8rem 1rem !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </motion.nav>
  );
}