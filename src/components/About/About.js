import React from "react";
import "./about.css";
import about from "../../Image/7ch79mlJ-AdobeStock_397971331-scaled.jpg";
import { FcDeployment, FcSupport, FcBusinessman } from "react-icons/fc";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

function About() {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade left big>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={about} height="400px" width="400px" alt="about_image" />
            </div>
          </div>
        </Fade>
        <Fade right big>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-details">
              <div className="about-title">
                <h5>About</h5>
                <span className="line"></span>
              </div>
              <p>
                AAVRTTI is a knowledge-based company providing engineering
                solutions to infrastructure & construction industries using our
                expertise in Electromagnetics Non-Destructive Techniques.
              </p>
              <div className="card-design">
                <div className="about-list-item">
                  <div className="about-details-icon">
                    <p>
                      <FcDeployment size={50} />
                    </p>
                  </div>
                  <div>
                    <h6>PRODUCT</h6>
                    <p>
                      Our flagship product RUDI (Radar for Utility Detection and
                      Imaging) not only detects but also locates, identifies and
                      maps buried utilities on the go.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-design">
                <div className="about-list-item">
                  <div className="about-details-icon">
                    <p>
                      <FcSupport size={50} />
                    </p>
                  </div>
                  <div>
                    <h6>SERVICES</h6>
                    <p>
                      Using our technical expertise in Electromagnetics
                      Non-Destructive Evaluation (NDE), we provide services for
                      underground inspection and monitoring of pipe leakage and
                      detection, localization of cable fault, identification of
                      dead and live cables.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-design">
                <div className="about-list-item">
                  <div className="about-details-icon">
                    <p>
                      <FcBusinessman size={50} />
                    </p>
                  </div>
                  <div>
                    <h6>CONSULTANCY</h6>
                    <p>• Advanced processing of weak and noisy GPR scans</p>
                    <p>• Updates,consultation, and technical support on GPR </p>
                    <p>• Antenna design, fabrication, and characterizations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default About;
