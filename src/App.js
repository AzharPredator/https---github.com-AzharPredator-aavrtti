import React, { useState, createContext } from "react";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Service from "./components/Service/Service.js";
import Career from "./components/Career/Career.js";
import NavbarMobileView from "./components/Navbar/NavbarMobileView.js";
import Video from "./components/Video/Video.js";
import Testimonial from "./components/Testimonial/Testimonial.js";
import JoinUs from "./components/Join Us/JoinUs.js";
import Footer from "./components/Footer/Footer.js";
import Team from "./components/Team/Team.js";
import Feedback from "./components/Feedback/Feedback.js";

import "./App.css";
import ScrollToTop from "react-scroll-to-top";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const handleChangeTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      <Navbar />
      <NavbarMobileView />
      <Home theme={theme} handleChangeTheme={handleChangeTheme} />
      <div className="main-theme-compo" id={theme}>
        <About />
        <Service />
        <Career />
        <Video />
        <Team />
        <Testimonial />
        <Feedback />
      </div>

      <JoinUs />
      <Footer />

      <ScrollToTop
        smooth
        color="white"
        height="20"
        width="20"
        style={{ borderRadius: "90px", backgroundColor: "#38004c" }}
      />
    </ThemeContext.Provider>
  );
};

export default App;
