import React from "react";

import ProfileImage from "../assets/ProfileImage.jpg";
const About = ({ aboutRef, theme }) => {
  return (
    <div ref={aboutRef}>
      <h1 className="Title">JULIAN DEBRABANDERE</h1>
      <h1 className="Subtitle">Full Stack Developer</h1>
      <div className="About">
        <img src={ProfileImage} className="photo" alt="" />
        <p>
          Hi! My name is Julian and I am a Full Stack Developer. Every day, I
          try to improve my skills with React, TS, Node and SQL. At the same
          time, I work as a Frontend Teacher at an Ed-tech. If you want to know
          more about my profile, please contact me.
        </p>
        <a
          href="mailto:julian.debra25@gmail.com"
          style={{ textDecoration: "none" }}
          target="_blank"
        >
          <button className={theme ? "Contact-Button" : "Contact-Button-light"}>
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
