import React from 'react';
import IconInfoBox from './IconInfoBox';
import studentImg from '../assets/student-at-computer.svg';

function SectionTwo() {
    return (
      <section className="SectionTwo container">
        <div className="row justify-content-between">
          <div className="section2-img-wrapper col-sm col-lg-6">
            <img
              src={studentImg}
              alt="student sitting at computer with hand raised"
            />
          </div>
          <div className="col-sm col-lg-6">
            <div className="row justify-content-between">
              <div className="purple col-sm col-lg-6">
                <IconInfoBox /> />
              </div>
              <div className="red col-sm col-lg-6">
                <IconInfoBox />
              </div>
            </div>
          </div>
          <h3>
            Low-resource families are disproportionately affected by school
            closures and face unique challenges.
          </h3>
        </div>
      </section>
    );
  }
  
  export default SectionTwo;