import React, {useState} from "react";
import $ from "jquery";


function revoke(){
  if ($(window).width() < 767) {
    $('nav ul li a').click(function(){
      $(this).parent().parent().siblings(".hamburger-icon").removeClass("open");
      $(this).parents("nav").removeClass("mobilenav-open");
    });
  }
} 

revoke();

$(window).resize(function () {
  revoke();
});

function Navbar() {
  const [ navbarOpen, setNavbarOpen ] = useState(false);
  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  }
  
  return (
    <nav className={`hamburger-icon ${ navbarOpen ? 'mobilenav-open' : '' }`}>
      <div className= {`hamburger-icon ${ navbarOpen ? 'open' : '' }`} onClick={toggleNavbar}>
        <span className="bar1"></span>
        <span className="bar2"></span>
        <span className="bar3"></span>
      </div>
      <ul>
        <li className="s-only"><a href="#home">Home</a></li>
        <li><a href="#about-me">About Me</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Work</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="./assets/docs/resume-roshan.pdf" target="_blank">Resume</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
