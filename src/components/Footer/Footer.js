import React from "react";
import "./footer.css";
import {
  FaSquareFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="footer-about-section">
              <h6 style={{ color: "white", marginTop: "20px" }}>About</h6>
              <p>
                AAVRTTI is a knowledge-based company providing engineering
                solutions to infrastructure & construction industries using our
                expertise in Electromagnetics Non-Destructive Techniques. Our
                founding team is a combination of experienced professors and
                motivated graduates from IIT Madras.
              </p>
              <span className="social-icons">
                <p>
                  <FaSquareFacebook size={30} />
                </p>
                <p>
                  <FaTwitter size={30} />
                </p>
                <p>
                  <FaInstagram size={30} />
                </p>
                <p>
                  <FaLinkedinIn size={30} />
                </p>
              </span>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="footer-service">
              <h6 style={{ color: "white", marginTop: "20px" }}>Services</h6>
              <div className="footer-item">
                <li>Product Sort</li>
                <li>Product Sort</li>
                <li>Product Sort</li>
                <li>Product Sort</li>
                <li>Product Sort</li>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="footer-service">
                <h6 style={{ color: "white", marginTop: "20px" }}>
                  Customer Care
                </h6>
                <div className="footer-item">
                  <li>Product Sort</li>
                  <li>Product Sort</li>
                  <li>Product Sort</li>
                  <li>Product Sort</li>
                  <li>Product Sort</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
