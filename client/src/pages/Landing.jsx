import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div className="Landing">
      <Navbar />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
};

export default Landing;
