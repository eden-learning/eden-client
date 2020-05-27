import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeroSection from './HeroSection';
import Platform from './Platform';
import About from './About';
import Navbar from './Navbar';
import Footer from './Footer';
import TermsPrivacy from './TermsPrivacy';
import '../styles/App.css';

export default function App() {
  return (
    <Switch>
      <Route
        path="/"
        render={() => (
          <div className="App">
            <Navbar />
            <HeroSection />
            <Platform />
            <About />
            <Footer />
          </div>
        )}
        exact
      />
      <Route path="/privacy-policy" component={TermsPrivacy} />
    </Switch>
  );
}
