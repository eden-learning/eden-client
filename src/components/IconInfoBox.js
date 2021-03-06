import React from 'react';
import PropTypes from 'prop-types';
import '../styles/IconInfoBox.css';

export default function IconInfoBox(props) {
  const { icon, title, text } = props;
  return (
    <div className="icon-info-box p-3 m-3">
      <img className="icon" src={icon} alt="ribbon" />
      <p className="icon-text mt-5">{title}</p>
      <p className="icon-text mt-5">{text}</p>
    </div>
  );
}

IconInfoBox.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
