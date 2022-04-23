import React from "react";
import "./Skills.css";
const Skills = () => {
  return (
    <section className="skills-page center">
      <div className="container">
        <h2>My Skills</h2>
        <div className="row">
          <div className="item">
            <i className="fa-brands fa-html5"></i> HTML
          </div>
          <div className="item">
            <i className="fa-brands fa-css3"></i> CSS
          </div>
          <div className="item">
            <i className="fa-brands fa-sass"></i> Sass
          </div>
          <div className="item">
            <i className="fa-brands fa-bootstrap"></i> Bootstrap
          </div>
        </div>
        <div className="row">
          <div className="item">
            <i className="fa-brands fa-js"></i> JavaScript
          </div>
          <div className="item">
            <i className="fa-brands fa-node"></i> Nodejs
          </div>
          <div className="item">
            <i className="fa-brands fa-node"></i> Express
          </div>
          <div className="item">
            <i className="fa-brands fa-react"></i> React
          </div>
        </div>
        <h2>Developer Tools</h2>
        <div className="row">
          <div className="item">
            <i className="fa-brands fa-codepen"></i> Codepen
          </div>
          <div className="item">
            <i className="fa-brands fa-github"></i> Github
          </div>
          <div className="item">
            <i className="fa-solid fa-terminal"></i> Terminal
          </div>
          <div className="item">
            <i className="fa-solid fa-font-awesome"></i> Font Awesome
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
