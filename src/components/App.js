import React from 'react';
import HeroSection from './HeroSection';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import '../styles/App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default App;
