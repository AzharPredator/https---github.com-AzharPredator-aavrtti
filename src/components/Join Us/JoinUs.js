import React from "react";
import "./joinus.css";
import { FaUserPlus } from "react-icons/fa";
import Zoom from "react-reveal/Zoom";

const JoinUs = () => {
  return (
    <div className="container-fluid joinus" id="joinus">
      <div className="container">
        <div className="row">
          <Zoom bottom>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="joinus_title">
                <h5>Join Our Team</h5>
              </div>
              <div className="jionus-form">
                <input type="text " placeholder="Your E-mail" />
              </div>
              <div className="joinus_button">
                <p>
                  Join Us .
                  <FaUserPlus />
                </p>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
