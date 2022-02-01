import React from "react";

import html5 from "../assets/images/html5.png"; 
import javaScript from "../assets/images/javascript-logo.png"; 
import jQuery from "../assets/images/jQuery-logo.png"; 
import CSS3 from "../assets/images/css3.png"; 
import express from "../assets/images/express.png"; 
import nodejs from "../assets/images/nodejs.png"; 
import github from "../assets/images/github.png"; 
import mySql from "../assets/images/mysql.png"; 



function Skills() {
  return (
    <section id="skills" className="skills spacer">
      <div className="container">
        <div className="row slick">
          <div className="column-full center">
            <h3>What I know</h3>
            <h2>Skills</h2>
          </div>
        </div>
      </div>
      <div className="container spacer-top">
      
        <div className="row slick">
          <div className="column-oneforth">
            <img src={html5} alt="HTML5" />
          </div>
          <div className="column-oneforth">
            <img src={javaScript} alt="JavaScript" />
          </div>
          <div className="column-oneforth">
            <img src={jQuery} alt="jQuery" />
          </div>
          <div className="column-oneforth">
            <img src={CSS3} alt="CSS3" />
          </div>
          <div className="column-oneforth">
            <img src={express} alt="Express" />
          </div>
          <div className="column-oneforth">
            <img src={nodejs} alt="NodeJS" />
          </div>
          <div className="column-oneforth">
            <img src={github} alt="Github" />
          </div>
          <div className="column-oneforth">
            <img src={mySql} alt="mySql" />
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Skills;
