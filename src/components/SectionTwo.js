import React from 'react';
import IconInfoBox from './IconInfoBox';
import studentImg from '../assets/student-at-computer.svg';
import iconVideo from '../assets/icon-video.png';
import iconJigsaw from '../assets/icon-jigsaw.png';
import iconJuicebox from '../assets/icon-juicebox.png';
import iconRibbon from '../assets/icon-ribbon.png';

function SectionTwo() {
  return (
    <section className="SectionTwo container">
      <div className="row justify-content-between">
        <div className="section2-img-wrapper align-self-center p-0 col-sm col-lg-6">
          <img
            src={studentImg}
            alt="student sitting at computer with hand raised"
          />
        </div>
        <div className="col-sm col-lg-6">
          <div className="row justify-content-between">
            <div className="p-0 col-sm col-lg-6">
              <IconInfoBox
                icon={iconVideo}
                text="By curating free resources, we are low-cost and accessible for all."
              />
            </div>
            <div className="p-0 col-sm col-lg-6">
              <IconInfoBox
                icon={iconJigsaw}
                text="We are adaptive to growing needs and different learning styles."
              />
            </div>
            <div className="p-0 col-sm col-lg-6">
              <IconInfoBox
                icon={iconJuicebox}
                text="We aim to provide engaging content to make at-home learning fun."
              />
            </div>
            <div className="p-0 col-sm col-lg-6">
              <IconInfoBox
                icon={iconRibbon}
                text="We work closely with social workers and ESL teachers to address unique challenges."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center text-align-center">
        <h3 className="section-2-text-block col-sm col-lg-9">
          Low-resource families are disproportionately affected by school
          closures and face unique challenges.
        </h3>
      </div>
    </section>
  );
}

export default SectionTwo;
