import React from 'react';
import logo from '../assets/eden-logo.svg';
import hero from '../assets/hero-page.svg';

export default function HeroSection() {
  return (
    <div>
      <div>
        <div>
          <div>
            <img src={logo} alt="eden logo" />
            <p>Learning tailored for your child&apos;s needs</p>
            <h2>Launching Summer 2020</h2>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
                aria-label="Recipient's email"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  Get Notified
                </button>
              </div>
            </div>
          </div>
        </div>
        <img src={hero} alt="eden logo" />
      </div>
      <h3>
        We&apos;re building a platform with the individual attention of a
        personal tutor and engagement of the most creative teacher.
      </h3>
    </div>
  );
}
