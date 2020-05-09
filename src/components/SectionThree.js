import React from 'react';
import '../styles/SectionThree.css';

function SectionThree() {
  return (
    <section className="section-three  container">
      <div id="about" className="wrapper mb-5">
        <div className="box-violet">
          <p className="section3-rotate alignment font-weight-bold d-block about">
            ABOUT US
          </p>
        </div>
        <div className="box box-red">
          We are a brilliant team of volunteers from all over the world in
          various careers with one vision in mind.
        </div>
        <div className="box box-yellow">
          We are passionate creators, problem solvers, parents, teachers and
          technologists!
        </div>
      </div>
      <div id="help" className="wrapper">
        <div className="box-violet">
          <p className="section3-rotate alignment help">HOW TO HELP</p>
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
