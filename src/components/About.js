import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section className="about-section  container">
      <div className="row mb-1">
        <div className="col-2 col-md-1 box-violet">
          <h5 className="vertical-box-header about">ABOUT US</h5>
        </div>
        <div id="about" className="col-10 col-md-11 row">
          <div className="col-lg box box-red ">
            We are a brilliant team of volunteers from all over the world in
            various careers with one vision in mind.
          </div>
          <div className="col-lg box box-yellow">
            We are passionate creators, problem solvers, parents, teachers and
            technologists!
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-2 col-md-1 box-violet">
          <h5 className="vertical-box-header help">HOW TO HELP</h5>
        </div>
        <div id="help" className="col-10 col-md-11 row">
          <div className="box box-blue col-lg">
            <p>
              We’re looking for lead development of platform across mobile and
              web, frontend and backend engineers.
            </p>
          </div>
          <div className="box box-green col-lg">
            <p>
              We need more teachers, educators, ESL teachers and social workers
              in schools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
