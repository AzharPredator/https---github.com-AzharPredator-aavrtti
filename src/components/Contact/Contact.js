import React from "react";
import "./contact.css";
import { BsFillSendFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const Contact = () => {
  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <Fade left big>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
            <div className="image-class">
              <img
                src="https://img.freepik.com/free-vector/emails-concept-illustration_114360-1217.jpg"
                height="700px"
                width="auto"
              />
            </div>
          </div>
        </Fade>
        <Fade right big>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
            <div className="contact-form-design">
              <div className="text-center">
                <h5>Contact Form</h5>
                <span className="line"></span>
              </div>
              <form>
                <div className="contact-form">
                  <label className="form-leble">Name</label>
                  <input type="text" />
                </div>

                <div className="contact-form">
                  <label className="form-leble">E-mail</label>
                  <input type="email" />
                </div>

                <div className="contact-form">
                  <label className="form-leble">Service you need</label>

                  <select className="custom-select">
                    <option>Softwar Development</option>
                    <option>Hardwar Development</option>
                    <option>Project Development</option>
                    <option>Web Development</option>
                    <option>Web Development</option>
                  </select>
                </div>

                <div className="contact-form">
                  <label className="form-leble">Your Massage</label>
                  <textarea
                    type="text"
                    maxLength="500"
                    className="form-control"
                    rows="4"
                  />
                </div>
                <div className="button-submit">
                  <p>
                    Send .
                    <BsFillSendFill />
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
