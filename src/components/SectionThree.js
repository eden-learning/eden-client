import React from 'react';

function SectionThree() {
  return (
    <section className="container SectionThree">
      <div className="row justify-content-between align-items-center">
        <div className="box box-violet border col-lg-1">
          <p className="section3-rotate d-inline-block">ABOUT US</p>
        </div>
        <div className="box box-red col-lg-5">
          <p>
            We are a brilliant team of volunteers from all over the world in
            various careers with one vision in mind.
          </p>
        </div>
        <div className="box box-yellow col-lg-5">
          <p>
            We are passionate creators, problem solvers, parents, teachers and
            technologists!
          </p>
        </div>
      </div>
      <div className="row justify-content-between align-items-center">
        <div className="box box-violet border col-lg-1">
          <p className="section3-rotate d-inline-block">HOW TO HELP</p>
        </div>
        <div className="box box-blue col-lg-5">
          <p>
            We’re looking for lead development of platform across mobile and
            web, frontend and backend engineers.
          </p>
        </div>
        <div className="box box-green col-lg-5">
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
