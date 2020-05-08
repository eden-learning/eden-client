/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../styles/Navbar.css';
import logo from '../assets/eden-logo-2.svg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm nabvar-light">
      <a
        className="navbar_brand pt-4 pl-5 pb-4"
        id="logo-container"
        href="#home"
      >
        <img src={logo} alt="Eden Logo" />
      </a>
      <ul className="navbar-nav ml-auto mr-5 pr-3">
        <li className="nav-item p-2">
          <a className="nav-link" href="#platform">
            Our Platform
          </a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link" href="#help">
            How to help
          </a>
        </li>
        <li className="nav-item p-2">
          <a className="nav-link" href="#about">
            About Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
