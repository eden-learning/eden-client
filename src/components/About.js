import React from 'react';
import '../styles/About.css';

export default function About() {
  return (
    <section className="about-section  container">
      <div className="row mb-1">
        <div className="col-2 col-md-1 box-violet">
          <h5 className="vertical-box-header help">HOW TO HELP</h5>
        </div>
        <div id="help" className="col-10 col-md-11 row">
          <div className="box box-blue col-lg">
            <p>College Admissions Officer</p>
            <p>Sign up to see student portfolios of your future admits.</p>
          </div>
          <div className="box box-green col-lg">
            <p>Teachers & parents</p>
            <p>Sign up for beta testing.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-2 col-md-1 box-violet">
          <h5 className="vertical-box-header about">ABOUT US</h5>
        </div>
        <div id="about" className="col-10 col-md-11 row">
          <div className="col-lg box box-red ">
            We are a brilliant team from all over the world with one vision in
            mind.
          </div>
          <div className="col-lg box box-yellow">
            We are passionate creators, problem solvers, parents, teachers and
            technologists!
          </div>
        </div>
      </div>
    </section>
  );
}
