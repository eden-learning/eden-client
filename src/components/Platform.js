import React from 'react';
import IconInfoBox from './IconInfoBox';
import studentImg from '../assets/student-at-computer.svg';
import iconVideo from '../assets/icon-video.svg';
import iconJigsaw from '../assets/icon-jigsaw.svg';
import iconJuicebox from '../assets/icon-juicebox.svg';
import iconRibbon from '../assets/icon-ribbon.svg';
import '../styles/Platform.css';

export default function Platform() {
  return (
    <section id="platform" className="container">
      <div className="text-center">
        <h4 className="platform-text-block py-4 my-1 my-sm-5">
          We&apos;re building a platform with the individual attention of a
          personal tutor and engagement of the most creative teacher.
        </h4>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-6 order-lg-2">
          <div className="row row-cols-2 no-gutters">
            <div className="col-sm-6">
              <IconInfoBox
                icon={iconVideo}
                text="By curating free resources, we are low-cost and accessible for all."
              />
            </div>
            <div className="col-sm-6">
              <IconInfoBox
                icon={iconJigsaw}
                text="We are adaptive to growing needs and different learning styles."
              />
            </div>
            <div className="col-sm-6">
              <IconInfoBox
                icon={iconJuicebox}
                text="We aim to provide engaging content to make at-home learning fun."
              />
            </div>
            <div className="col-sm-6">
              <IconInfoBox
                icon={iconRibbon}
                text="We work closely with social workers and ESL teachers to address unique challenges."
              />
            </div>
          </div>
        </div>
        <div className="platform-img-wrapper align-self-center p-3 col-lg-6 order-lg-1">
          <img
            src={studentImg}
            alt="student sitting at computer with hand raised"
          />
        </div>
      </div>
      <div className="text-align-center">
        <h4 className="platform-text-block py-4 my-1 my-sm-4">
          Low-resource families are disproportionately affected by school
          closures and face unique challenges.
        </h4>
      </div>
    </section>
  );
}
