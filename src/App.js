import React from 'react'
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Service from "./components/Service/Service.js";
import Testimonial from "./components/Testimonial/Testimonial.js";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Testimonial />
    </>
  );
};

export default App;
