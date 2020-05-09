import React from 'react';
import PropTypes from 'prop-types';
import logo from '../assets/eden-logo.svg';

export default function EmailForm({ className }) {
  return (
    <div className={className}>
      <img className="logo mt-4" src={logo} alt="eden logo" />
      <h3 className="hero-section-text mt-4 mb-4">
        Learning tailored for your child&apos;s needs
      </h3>
      <h4 className="hero-section-title mb-4">Launching Summer 2020.</h4>
      <div className="form-container">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter Email"
          aria-label="Recipient's email"
        />
        <button className="btn get-notified-btn btn-secondary" type="button">
          Get Notified
        </button>
      </div>
    </div>
  );
}

EmailForm.propTypes = {
  className: PropTypes.string,
};

EmailForm.defaultProps = {
  className: '',
};
