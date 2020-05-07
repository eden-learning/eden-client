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

// function IconInfoBox() {
//   return (
//     <div className="IconInfoBox p-3 mb-5">
//       <img className="icon" src={icon} alt="ribbon" />
//       <p className="mt-5">
//         By curating free resources, we are low-cost and accessible for all.
//       </p>
//     </div>
//   );
// }

// function IconInfoBox(props) {
//   return (
//     <div className="IconInfoBox">
//       <img src={icon} alt="ribbon" />
//       <p>{`${props.infoText}`}</p>
//     </div>
//   );
// }

export default IconInfoBox;
