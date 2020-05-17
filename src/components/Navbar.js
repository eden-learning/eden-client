/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../styles/Navbar.css';
import $ from 'jquery';
import logo from '../assets/eden-logo.svg';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
      <a className="navbar-brand py-4 pl-lg-5 logo-container" href="#home">
        <img className="navbar-logo" src={logo} alt="Eden Logo" />
      </a>
      <button
        className="navbar-toggler order-first"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon " />
      </button>
      <button
        className="navbar-toggler"
        type="button"
        aria-label="for alignment only"
      />
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mr-5 pr-3">
          <li className="nav-item p-2">
            <a className="nav-link" href="#platform">
              Our Platform
            </a>
          </li>
          <li className="nav-item p-2">
            <a className="nav-link" href="#about">
              About Us
            </a>
          </li>
          <li className="nav-item p-2">
            <a className="nav-link" href="#help">
              How to help
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function collapseMobileNav() {
  $('.navbar-collapse').collapse('hide');
}

document.addEventListener('click', collapseMobileNav);

export default Navbar;
