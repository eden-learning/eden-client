/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/eden-logo-2.svg';

function Navbar() {
  return (
    <nav>
      <div className="navbar__logo-container">
        <img className="navbar__logo" src={logo} alt="Eden Logo" />
      </div>
      <ul className="navbar__container">
        <li className="navbar__item">
          <a className="navbar__link" href="#platform">
            Our Platform
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="#help">
            How to help
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="#about">
            About Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
