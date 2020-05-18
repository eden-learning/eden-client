import React from 'react';
import HeroSection from './HeroSection';
import Platform from './Platform';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/App.css';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Platform />
      <About />
      <Footer />
    </div>
  );
}
