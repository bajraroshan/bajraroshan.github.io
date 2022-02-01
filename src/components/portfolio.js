import React from "react";

import CHS from "../assets/images/career-headstart-small.png"; 
import Rec from "../assets/images/recipe.png"; 
import WF from "../assets/images/weather-forecast.png"; 
import DP from "../assets/images/day-planner.png"; 
import QW from "../assets/images/quiz-wiz.png"; 
import PF from "../assets/images/portfolio-roshan.jpg";

function Portfolio() {

  const portfolioCard = [
    {
      imageSrc: CHS,
      title: 'Career Headstart',
      description: 'HTML5, CSS3, JavaScript, jQuery, SASS, Bootstrap, Handlebars, Heroku, Express, Node.js, MySQL',
      githubRepo: 'https://github.com/bajraroshan/career-headstart',
      liveSite: 'https://career-head-start.herokuapp.com/',
    },
    {
      imageSrc: Rec,
      title: 'Recipe with Music',
      description: 'HTML5, CSS3, JavaScript, jQuery, Server-Side APIs, Foundation',
      githubRepo: 'https://github.com/bajraroshan/Recipes-with-little-taste-of-music',
      liveSite: 'https://bajraroshan.github.io/Recipes-with-little-taste-of-music/',
    },
    {
      imageSrc: WF,
      title: 'Weather Forecast',
      description: 'HTML5, CSS3, JavaScript, jQuery, Server-Side APIs, Localstorage',
      githubRepo: 'https://github.com/bajraroshan/weather-forecast',
      liveSite: 'https://bajraroshan.github.io/weather-forecast/',
    },
    {
      imageSrc: DP,
      title: 'Day Planner',
      description: 'HTML5, CSS3, JavaScript, jQuery, Localstorage, Custom Fonts',
      githubRepo: 'https://github.com/bajraroshan/day-planner',
      liveSite: 'https://bajraroshan.github.io/day-planner/',
    },
    {
      imageSrc: QW,
      title: 'Quiz Wiz',
      description: 'HTML5, CSS3, JavaScript, Localstorage',
      githubRepo: 'https://github.com/bajraroshan/quizwiz',
      liveSite: 'https://bajraroshan.github.io/quizwiz/',
    },
    {
      imageSrc: PF,
      title: 'Portfolio Site',
      description: 'HTML5, CSS3, JavaScript, jQuery',
      githubRepo: 'https://github.com/bajraroshan/bajraroshan.github.io',
      liveSite: 'https://bajraroshan.github.io/',
    },
  ]


  return (
    <section id="portfolio" className="portfolio spacer">
      <div className="container">
        <div className="row">
          <div className="column-full center">
            <h3>Work</h3>
            <h2>Portfolio</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
        {portfolioCard.map((card, index) => (

        <div className="card-box" key={index}>
            <div className="single-card">
              <div className="image-holder">
                <img src={card.imageSrc} alt={card.title} />
              </div>
              <div className="content-holder">
                <h4 className="card-title">{card.title}</h4>
                <div className="card-desc">{card.description}</div>
                <div className="card-btn-wrap">
                  <a href={card.githubRepo} target="_blank" rel="noreferrer">Github Repo</a>
                  <a href={card.liveSite} target="_blank" rel="noreferrer">Live Site</a>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
