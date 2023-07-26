import React from 'react'
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

const App = () => {
  return (
    <>
      <Navbar />
      <NavbarMobileView />
      <Home />
      <About />
      <Service />
      <Career />
      <Video />
      <Team />
      <Testimonial />
      <Feedback />
      <JoinUs />
      <Footer />

      <ScrollToTop
        smooth
        color="white"
        height="20"
        width="20"
        style={{ borderRadius: "90px", backgroundColor: "#38004c" }}
      />
    </>
  );
};

export default App;
