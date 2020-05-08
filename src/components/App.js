import React from 'react';
import HeroSection from './HeroSection';
import SectionTwo from './SectionTwo';
import '../styles/App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <SectionTwo />
    </div>
  );
}

export default App;
