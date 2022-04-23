import React from "react";
import Avatar from "./avatar.svg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <section
        className="home center"
        data-aos="fade-up"
        data-aos-easing="linear"
      >
        <div className="container">
          <h1>Front End Web Developer</h1>
          <p>Hi, I'm Marwan Zayed. Nice to meet you.</p>
          <img src={Avatar} alt="Avatar" />
        </div>
      </section>

      <section
        className="about center"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="container">
          <h1>I'm Marwan Zayed.</h1>
          <p>
            I'm A Front End Web Developer Living In Egypt, I'm 15 Years Old And
            Have 1 Year Experience, I Look Forward To Improving Myself Every
            Day, I Look For Elegance And Softness In Designs.
          </p>
        </div>
      </section>

      <section
        className="skills center"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        <div className="container">
          <h2>My Skills</h2>
          <div className="row">
            <div className="item">HTML</div>
            <div className="item">CSS</div>
            <div className="item">JavaScript</div>
            <div className="item">Node</div>
            <div className="item">Express</div>
          </div>
        </div>
      </section>

      <section className="works center">
        <div className="container">
          <h2>My Works</h2>
          <div className="row">
            <div className="item">
              <h3>Quran Web</h3>
              <a
                href="https://github.com/marwanzayed-coder/quran"
                className="transition-all"
              >
                <i className="fa-solid fa-code"></i> Code
              </a>
              <a
                href="https://quranweb.herokuapp.com/"
                className="transition-all"
              >
                <i className="fa-solid fa-laptop-code"></i> Live
              </a>
            </div>
            <div className="item">
              <h3>URL Shortening</h3>
              <a
                href="https://github.com/marwanzayed-coder/url-shortening"
                className="transition-all"
              >
                <i className="fa-solid fa-code"></i> Code
              </a>
              <a
                href="https://marwanzayed-coder.github.io/url-shortening/"
                className="transition-all"
              >
                <i className="fa-solid fa-laptop-code"></i> Live
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact center">
        <div className="container">
          <h2>Contact Me</h2>
          <div className="row">
            <div className="item">
              <h3>Mail</h3>
              <a href="mailto:marwanzayedshaban@gmail.com">
                marwanzayedshaban@gmail.com
              </a>
            </div>
            <div className="item">
              <h3>Facebook</h3>
              <a href="https://www.facebook.com/marwanzayed13/">
                marwanzayed13
              </a>
            </div>
            <div className="item">
              <h3>Twitter</h3>
              <a href="https://twitter.com/marwanzayed20">marwanzayed20</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
