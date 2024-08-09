import React from "react";
import { SocialIcon } from "react-social-icons";
import "../styling/AboutMe.css";
import JohnPic from "../image/JohnPic.JPG";

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="social-icons">
        <SocialIcon
          url="https://www.linkedin.com/in/john-nelsonsd"
          style={{ height: 30, width: 30 }}
        />
        <SocialIcon
          url="https://www.github.com/JohndaDeveloper"
          style={{ height: 30, width: 30 }}
        />
      </div>
      <div className="about-me-content">
        <div className="about-me-text">
          <h2>John Nelson</h2>
          <p>
            Hi there! I'm a passionate Full Stack Developer dedicated to
            crafting digital solutions that empower businesses and enhance user
            experiences. With a strong foundation in JavaScript, I specialize in
            developing scalable and efficient applications using Node.js on the
            backend and React.js on the front end.
          </p>
        </div>
        <div className="about-me-image">
          <img src={JohnPic} alt="John Nelson" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
