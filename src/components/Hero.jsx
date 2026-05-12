// import React from 'react';
// import { motion } from 'framer-motion';
// import { FiArrowRight } from 'react-icons/fi';

// export default function Hero() {
//   return (
//     <section id="home" style={{
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       position: 'relative',
//       zIndex: 2,
//       padding: '0 2rem'
//     }}>
//       <div style={{
//         maxWidth: '1200px',
//         margin: '0 auto',
//         textAlign: 'center'
//       }}>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.h1
//             animate={{
//               textShadow: [
//                 '0 0 20px rgba(88, 101, 242, 0.5)',
//                 '0 0 40px rgba(88, 101, 242, 0.8)',
//                 '0 0 20px rgba(88, 101, 242, 0.5)'
//               ]
//             }}
//             transition={{ duration: 2, repeat: Infinity }}
//             style={{
//               fontSize: 'clamp(3rem, 8vw, 6rem)',
//               fontWeight: '800',
//               fontFamily: "'Playfair Display', 'Montserrat', 'Cinema', 'Orbitron', serif",
//               color: '#ffffff',
//               marginBottom: '1rem',
//               letterSpacing: '-0.02em'
//             }}
//           >
//             Welcome to GULBEE
//           </motion.h1>
          
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             style={{
//               fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
//               color: '#b8c6db',
//               marginBottom: '2rem',
//               maxWidth: '800px',
//               margin: '0 auto 2rem auto',
//               fontFamily: "'Cormorant Garamond', 'Lato', 'Roboto', serif",
//               fontWeight: '400',
//               letterSpacing: '0.02em',
//               lineHeight: '1.4'
//             }}
//           >
//             Where Ambition Meets Excellence — Engineering Tomorrow's Legacy Today
//           </motion.p>
          
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.6, duration: 0.5 }}
//             style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
//           >
            
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }





import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 2,
      padding: 'clamp(1rem, 5vw, 2rem)',
      marginTop: 'clamp(3rem, 10vh, 5rem)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '0 clamp(1rem, 4vw, 2rem)'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            animate={{
              textShadow: [
                '0 0 20px rgba(88, 101, 242, 0.5)',
                '0 0 40px rgba(88, 101, 242, 0.8)',
                '0 0 20px rgba(88, 101, 242, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              fontSize: 'clamp(2rem, 8vw, 6rem)',
              fontWeight: '800',
              fontFamily: "'Playfair Display', 'Montserrat', 'Cinema', 'Orbitron', serif",
              color: '#ffffff',
              marginBottom: 'clamp(0.8rem, 3vw, 1rem)',
              letterSpacing: '-0.02em',
              lineHeight: '1.2',
              padding: '0 clamp(0.5rem, 2vw, 1rem)'
            }}
          >
            Welcome to GULBEE
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              fontSize: 'clamp(1rem, 4vw, 1.8rem)',
              color: '#b8c6db',
              marginBottom: 'clamp(1.5rem, 5vw, 2rem)',
              maxWidth: 'min(800px, 90%)',
              margin: '0 auto clamp(1.5rem, 5vw, 2rem) auto',
              fontFamily: "'Cormorant Garamond', 'Lato', 'Roboto', serif",
              fontWeight: '400',
              letterSpacing: '0.02em',
              lineHeight: '1.4',
              padding: '0 clamp(0.5rem, 2vw, 1rem)'
            }}
          >
            Where Ambition Meets Excellence — Engineering Tomorrow's Legacy Today
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{ 
              display: 'flex', 
              gap: 'clamp(0.8rem, 3vw, 1rem)', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              padding: '0 clamp(0.5rem, 2vw, 1rem)'
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(88, 101, 242, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'linear-gradient(135deg, #5865f2, #4b6cb7)',
                border: 'none',
                padding: 'clamp(0.8rem, 2.5vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
                borderRadius: '50px',
                color: '#ffffff',
                fontWeight: '600',
                fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: "'Montserrat', 'Inter', sans-serif",
                letterSpacing: '0.03em',
                width: 'auto',
                minWidth: 'clamp(160px, 30vw, 200px)',
                justifyContent: 'center'
              }}
            >
              Explore Ventures <FiArrowRight size={16} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#journey')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px)',
                border: '1.5px solid #5865f2',
                padding: 'clamp(0.8rem, 2.5vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
                borderRadius: '50px',
                color: '#5865f2',
                fontWeight: '600',
                fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
                cursor: 'pointer',
                fontFamily: "'Montserrat', 'Inter', sans-serif",
                letterSpacing: '0.03em',
                width: 'auto',
                minWidth: 'clamp(160px, 30vw, 200px)',
                justifyContent: 'center'
              }}
            >
              Our Journey
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}