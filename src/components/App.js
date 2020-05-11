import React from 'react';
import HeroSection from './HeroSection';
import Platform from './Platform';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/App.css';

function App() {
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

export default App;
