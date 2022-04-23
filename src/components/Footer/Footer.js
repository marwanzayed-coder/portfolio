import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="item">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="item">
            <h3>Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/works">Works</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="item"></div>
          <div className="item">
            <a href="https://www.facebook.com/marwanzayed13/">
              <i className="fa-brands fa-facebook-square fa-2x"></i>
            </a>
            <a href="https://twitter.com/marwanzayed20">
              <i className="fa-brands fa-twitter fa-2x"></i>
            </a>
            <a href="https://github.com/marwanzayed-coder/">
              <i className="fa-brands fa-github fa-2x"></i>
            </a>
            <a href="https://codepen.io/marwanzayed-coder">
              <i className="fa-brands fa-codepen fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
