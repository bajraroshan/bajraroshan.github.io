import React from "react";

import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about-me";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";


import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="wrapper">
          <h1>Roshan Bajracharya</h1>
          <Navbar />
        </div>
      </header>
      <main className="content">
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            &copy; 2021. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
