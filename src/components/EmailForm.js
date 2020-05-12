import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import logo from '../assets/eden-logo.svg';

export default function EmailForm({ className }) {
  const handleShow = () => {
    $('#myModal').modal('show');
  };

  return (
    <div className={className}>
      <img className="logo mt-4" src={logo} alt="eden logo" />
      <h3 className="hero-section-text mt-4 mb-4">
        Learning tailored for your child&apos;s needs
      </h3>
      <h4 className="hero-section-title mb-4">Launching Summer 2020.</h4>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Email"
          aria-label="Recipient's email"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={handleShow}
          >
            Get Notified
          </button>

          <div className="modal" id="myModal" tabIndex="-1" role="dialog">
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
