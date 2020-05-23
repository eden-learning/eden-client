/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../styles/Navbar.css';
import $ from 'jquery';

export default class Navbar extends React.Component {
  componentDidMount() {
    document.addEventListener('click', this.collapseMobileNav);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.collapseMobileNav);
  }

  collapseMobileNav = () => {
    $('.navbar-collapse').collapse('hide');
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
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
              <a
                className="nav-link"
                href="#help"
                onClick={this.collapseMobileNav}
              >
                How to help
              </a>
            </li>
            <li className="nav-item p-2">
              <a
                className="nav-link"
                href="#about"
                onClick={this.collapseMobileNav}
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
