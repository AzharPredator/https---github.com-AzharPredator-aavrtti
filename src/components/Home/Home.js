import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";
import {
  GiNightSky,
  GiBoomerangSun,
  GiField,
  GiMountains,
} from "react-icons/gi";

const Home = ({ theme, handleChangeTheme }) => {
  return (
    <div className="container-fluid home" id="home">
      <div className="theme-change" onClick={() => handleChangeTheme()}>
        {theme === "light" ? (
          <p>
            <GiNightSky size={40} />
          </p>
        ) : (
          <p>
            <GiField size={40} />
          </p>
        )}
      </div>
      <Fade left big>
        <div className="container home-content">
          <h1>
            <Typewriter
              options={{
                strings: ["Hello", "World", "Thiruharikaran"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p>
            Discretion has the meaning of acting on one's own authority and
            judgment. In law, discretion as to legal rulings, such as whether
            evidence is excluded at a trial, may be exercised by a judge. Some
            view discretion negatively, while some view it positively.
          </p>
          <span className="view-details-home-button">View Details</span>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
