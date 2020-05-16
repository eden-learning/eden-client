import React from 'react';
import hero from '../assets/hero-page.svg';
import '../styles/HeroSection.css';
import EmailForm from './EmailForm';

export default function HeroSection() {
  return (
    <section className="container text-center">
      <div className="mb-auto" />
      <div className="row ">
        <div className="hero-img col-lg-6 order-lg-2 mx-auto">
          <img src={hero} alt="" />
        </div>
        <EmailForm className="col-lg-6 order-lg-1 mx-auto" />
      </div>
    </section>
  );
}
