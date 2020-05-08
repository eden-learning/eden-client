import React from 'react';
import logo from '../assets/eden-logo.svg';
import hero from '../assets/hero-page.svg';
import '../styles/HeroSection.css';

export default function HeroSection() {
  return (
    <section className="container mt-5 mb-5">
      <div className="h-100-vh mx-auto">
        <div className="mb-auto" />
        <div className="row ">
          <img src={hero} alt="eden logo" className="col-sm-6 order-md-2" />
          <EmailForm className="col-sm-6 order-md-1" />
        </div>
        <div className="mt-auto" />
      </div>
    </section>
  );
}

function EmailForm() {
  return (
    <div>
      <img className="logo mt-4" src={logo} alt="eden logo" />
      <h2 className="hero-section-text mt-4 mb-5">
        Learning tailored for your child&apos;s needs
      </h2>
      <h1 className="hero-section-title">Launching Summer 2020.</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Email"
          aria-label="Recipient's email"
        />
        <div className="input-group-append">
          <button className="btn btn-secondary" type="button">
            Get Notified
          </button>
        </div>
      </div>
    </div>
  );
}
