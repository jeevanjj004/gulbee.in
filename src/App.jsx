import React from 'react';
import Background3D from './components/Background3D';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import JourneySection from './components/JourneySection';
import TeamSection from './components/TeamSection';

import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Background3D />
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <JourneySection />
      <TeamSection />

      <ContactSection />
      <Footer />
    </>
  );
}

export default App;