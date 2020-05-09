import React from 'react';
import HeroSection from './HeroSection';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
}

export default App;
