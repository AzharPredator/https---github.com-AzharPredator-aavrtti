import React from "react";
import "./service.css";
import { FcOk } from "react-icons/fc";

const Service = () => {
  const servicedata = [
    {
      id: 1,
      service1: "Product",
      service2: "Research",
      service3: "Product",
      service4: "Product",
    },
    {
      id: 2,
      service1: "Product",
      service2: "Research",
      service3: "Product",
      service4: "Product",
    },
    {
      id: 3,
      service1: "Product",
      service2: "Research",
      service3: "Product",
      service4: "Product",
    },
    {
      id: 4,
      service1: "Product",
      service2: "Research",
      service3: "Product",
      service4: "Product",
    },
    {
      id: 5,
      service1: "Product",
      service2: "Research",
      service3: "Product",
      service4: "Product",
    },
    {
      id: 6,
      service1: "Product",
      service2: "Research",
      service3: "Product",
      service4: "Product",
    },
    {
      id: 7,
      service1: "Product",
      service2: "Research",
      service3: "Product",
      service4: "Product",
    },
    {
      id: 8,
      service1: "Product",
      service2: "Research",
      service3: "Product",
      service4: "Product",
    },
  ];
  return (
    <div className="container service-section">
      {/* Section title */}
      <div className="section_title">
        <h5>Services</h5>
        <samp className="line"></samp>
      </div>
      <div className="row">
        {servicedata.map((item, index) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
            <div className="services">
              <span className="service-number">
                <p>{item.id}</p>
              </span>
              <div className="list-of-service">
                <p>
                  <FcOk size={20} style={{ margin: "5px" }} />
                  {item.service1}
                </p>
                <p>
                  <FcOk size={20} style={{ margin: "5px" }} />
                  {item.service2}
                </p>
                <p>
                  <FcOk size={20} style={{ margin: "5px" }} />
                  {item.service3}
                </p>
                <p>
                  <FcOk size={20} style={{ margin: "5px" }} />
                  {item.service4}
                </p>
              </div>
              <div />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
