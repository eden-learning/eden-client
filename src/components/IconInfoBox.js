import React from 'react';

function IconInfoBox(props) {
  const { icon, text } = props;
  return (
    <div className="IconInfoBox p-3 m-3">
      <img className="icon" src={icon} alt="ribbon" />
      <p className="mt-5">{text}</p>
    </div>
  );
}

export default IconInfoBox;
