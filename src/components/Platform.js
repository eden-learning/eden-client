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
          Imagine a future with no standardized tests. A future where you are
          evaluated on the quality of your portfolio. We are building that
          future today.
        </h4>
      </div>
      <div className="row no-gutters">
        <div className="col-lg-6 order-lg-2">
          <div className="row row-cols-2 no-gutters">
            <div className="col-sm-6">
              <IconInfoBox
                icon={iconVideo}
                title="Educators"
                text="Design a project and invite your students"
              />
            </div>
            <div className="col-sm-6">
              <IconInfoBox
                icon={iconJigsaw}
                title="Educators"
                text="Customize an existing project to your needs"
              />
            </div>
            <div className="col-sm-6">
              <IconInfoBox
                icon={iconJuicebox}
                title="Students"
                text="Grow your portfolio of projects"
              />
            </div>
            <div className="col-sm-6">
              <IconInfoBox
                icon={iconRibbon}
                title="Students"
                text="Create projects and work with friends"
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
    </section>
  );
}
