import React from 'react'
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Service from "./components/Service/Service.js";
import Testimonial from "./components/Testimonial/Testimonial.js";
import JoinUs from "./components/Join Us/JoinUs.js";
import Footer from "./components/Footer/Footer.js";

import "./App.css";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Testimonial />
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
