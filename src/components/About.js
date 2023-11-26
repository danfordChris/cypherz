import React from "react";
import "./About.css";
import Navbar from "./Navbar";
import maize from "../assets/maize.png";

function About() {
  return (
    <div className="fullAboutPage">
      <h2>About Us</h2>
      <div className="aboutPage">
        <div className="leftSectionPic"> </div>
        <div className="rightSectionPic">
          <p>
            We are building a modern distribution platform that connects farmers, consumers, businesses and informal retailers in a marketplace for
            selling and buying fresh produce leveraging on mobile technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
