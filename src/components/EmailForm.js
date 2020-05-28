import React, { useState } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import iconEmail from '../assets/icon-email.svg';
import '../styles/EmailForm.css';
import airtableFns from '../services/airtable';
import logo from '../assets/eden-logo.svg';

export default function EmailForm({ className }) {
  const [email, setEmail] = useState('');

  const handleShow = () => {
    $('#notification-dialogue').modal('show');
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, before setting the email state, post email to the API
    airtableFns.writeEmailToDb(email);
    setEmail('');
    handleShow();
  };

  return (
    <div className={className}>
      <img className="logo mt-4" src={logo} alt="eden logo" />
      <h3 className="header-text header-text-top mb-5">
        Create amazing projects
        <br />
        for learners of all ages.
      </h3>
      <h4 className="header-title">Launching Fall 2020.</h4>
      <form className="input-group mb-3" onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control p-4"
          placeholder="Enter Email"
          aria-label="Recipient's email"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
          required
        />
        <div className="valid-feedback feedback-pos">Looks good!</div>
        <div className="invalid-feedback feedback-pos">
          Please input valid email ID
        </div>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            Get Notified
          </button>

          <div
            className="modal"
            id="notification-dialogue"
            tabIndex="-1"
            role="dialog"
          >
            <div
              className="modal-dialog emailform-notification-dialog"
              role="document"
            >
              <div className="modal-content emailform-notification-content">
                <div className="modal-header emailform-notification-header">
                  <h5 className="modal-title justify-content-center emailform-notification-title">
                    Thank you for your interest in Eden!
                  </h5>
                  <button
                    type="button"
                    className="close emailform-notification-close-button"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body emailform-notification-body">
                  <p>
                    We&apos;re excited to have you on board and we&apos;ll keep
                    you updated via the email you provided.
                  </p>
                  <div className="platform-img-wrapper justify-content-center">
                    <img
                      src={iconEmail}
                      alt="email icon"
                      className="emailform-notification-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

EmailForm.propTypes = {
  className: PropTypes.string,
};

EmailForm.defaultProps = {
  className: '',
};
