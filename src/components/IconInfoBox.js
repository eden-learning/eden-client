import React from 'react';
import PropTypes from 'prop-types';
import '../styles/IconInfoBox.css';

function IconInfoBox(props) {
  const { icon, text } = props;
  return (
    <div className="IconInfoBox p-3 m-3">
      <img className="icon" src={icon} alt="ribbon" />
      <p className="mt-5">{text}</p>
    </div>
  );
}

IconInfoBox.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default IconInfoBox;
