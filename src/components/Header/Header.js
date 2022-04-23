import React, { Component } from "react";
import Logo from "./logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
  state = {
    styles: {
      opacity: 0,
      zIndex: -1,
      visibility: "hidden",
    },
  };
  handleClick = (e) => {
    e.target.classList.toggle("open");
    if (e.target.classList.contains("open") === true) {
      this.setState({
        styles: {
          opacity: 1,
          zIndex: 1,
          visibility: "visible",
        },
      });
    } else {
      this.setState({
        styles: {
          opacity: 0,
          zIndex: -1,
          visibility: "hidden",
        },
      });
    }
  };
  render() {
    return (
      <header>
        <div className="container flex-between">
          <a className="logo" href="/">
            <img src={Logo} alt="Logo" />
          </a>
          <div className="links">
            <div className="divider transition-all" onClick={this.handleClick}>
              <span className="transition-all"></span>
              <span className="transition-all"></span>
              <span className="transition-all"></span>
            </div>
            <ul
              className="flex-between transition-all"
              style={this.state.styles}
            >
              <li>
                <Link to="/" className="m-1 transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="m-1 transition-all">
                  About
                </Link>
              </li>
              <li>
                <Link to="/skills" className="m-1 transition-all">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/works" className="m-1 transition-all">
                  Works
                </Link>
              </li>
              <li>
                <Link to="/contact" className="m-1 transition-all">
                  Contact
                </Link>
              </li>
              <button className="transition-all" onClick={this.props.mode}>
                {this.props.text}
              </button>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
