import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {
    isDark: true,
    styleVar: {
      "--main-color": "#23a96e",
      "--main-bg-color": "#1d2239",
      "--bg-color": "#292e48",
      "--text-color": "#eee",
    },
    mode: "Light Mode",
  };
  Mode = (e) => {
    let { isDark } = this.state;
    this.setState({ isDark: !isDark });
    if (isDark) {
      this.setState({
        styleVar: {
          "--main-color": "#23a96e",
          "--main-bg-color": "#eee",
          "--bg-color": "#fff",
          "--text-color": "#111",
        },
        mode: "Dark Mode",
      });
    } else {
      this.setState({
        styleVar: {
          "--main-color": "#23a96e",
          "--main-bg-color": "#1d2239",
          "--bg-color": "#292e48",
          "--text-color": "#eee",
        },
        mode: "Light Mode",
      });
    }
  };
  render() {
    return (
      <BrowserRouter>
        <div className="App" style={this.state.styleVar}>
          <Header mode={this.Mode} text={this.state.mode} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
