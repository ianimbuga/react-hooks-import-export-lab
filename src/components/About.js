import React from "react";
import { image } from "../data/user"; 

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am a Web Developer from New York.</p>
      <img src={image} alt="Profile" />
    </div>
  );
}

export default About;




