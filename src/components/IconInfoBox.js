import React from 'react';
import icon from '../assets/icon1.png';

function IconInfoBox() {
  return (
    <div className="IconInfoBox">
      <img className="icon" src={icon} alt="ribbon" />
      <p>By curating free resources, we are low-cost and accessible for all.</p>
    </div>
  );
}

export default IconInfoBox;
