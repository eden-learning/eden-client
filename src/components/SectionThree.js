import React from 'react';

function SectionThree() {
  return (
    <section className="SectionThree container">
      <div className="wrapper">
        <div className="box-violet">
          <p className="section3-rotate alignment">ABOUT US</p>
        </div>
        <div className="box box-red">
          We are a brilliant team of volunteers from all over the world in
          various careers with one vision in mind.
        </div>
        <div className="box box-yellow">
          We are passionate creators, problem solvers, parents, teachers and
          technologists!
        </div>
        <div className="box-violet">
          <p className="section3-rotate alignment">HOW TO HELP</p>
        </div>
        <div className="box box-blue">
          <p>
            We’re looking for lead development of platform across mobile and
            web, frontend and backend engineers.
          </p>
        </div>
        <div className="box box-green">
          <p>
            We need more teachers, educators, ESL teachers and social workers in
            schools.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;

// WORKS sort of:
// function SectionThree() {
//   return (
//     <section className="SectionThree container">
//       <div className="row justify-content-between">
//         <div className="box box-violet border col-lg-1">
//           <p className="section3-rotate">ABOUT US</p>
//         </div>
//         <div className="box box-red col-lg-5">
//           <p>
//             We are a brilliant team of volunteers from all over the world in
//             various careers with one vision in mind.
//           </p>
//         </div>
//         <div className="box box-yellow col-lg-5">
//           <p>
//             We are passionate creators, problem solvers, parents, teachers and
//             technologists!
//           </p>
//         </div>
//       </div>
//       <div className="row justify-content-between">
//         <div className="box box-violet border col-lg-1">
//           <p className="section3-rotate">HOW TO HELP</p>
//         </div>
//         <div className="box box-blue col-lg-5">
//           <p>
//             We’re looking for lead development of platform across mobile and
//             web, frontend and backend engineers.
//           </p>
//         </div>
//         <div className="box box-green col-lg-5">
//           <p>
//             We need more teachers, educators, ESL teachers and social workers in
//             schools.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SectionThree;
