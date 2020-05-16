import React, { useState } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import airtableFns from '../services/airtableSvc';
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
      <h3 className="hero-section-text mt-4 mb-4">
        Learning tailored for your child&apos;s needs
      </h3>
      <h4 className="hero-section-title mb-4">Launching Summer 2020.</h4>
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
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title ">Thank You!</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body justify-content-left">
                  <p>You will be notified when the app is launched.</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
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
