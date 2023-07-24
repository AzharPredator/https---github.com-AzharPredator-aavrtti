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

const colors = [
  "#0000FF",
  "#FFAC1C",
  "#EE4B2B",
  "#AA336A",
  "#6082B6",
  "#FFBF00",
  "#6495ED",
  "#EEDC82",
];

return (
  <div className="container service-section" id="service">
    {/* Section title */}
    <div className="section_title">
      <h5>Services</h5>
      <samp className="line"></samp>
    </div>
    <div className="row">
      {servicedata.map((item, index) => (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
          <div className="services">
            <span
              className="service-number"
              style={{ backgroundColor: colors[index] }}
            >
              <p>{item.id}</p>
            </span>
            <div className="list-of-service">
              <p>
                <FcOk size={20} style={{ margin: "5px" }} />
                {item.service1}
              </p>
              <samp className="service_item_underline"></samp>
              <p>
                <FcOk size={20} style={{ margin: "5px" }} />
                {item.service2}
              </p>
              <samp className="service_item_underline"></samp>
              <p>
                <FcOk size={20} style={{ margin: "5px" }} />
                {item.service3}
              </p>
              <samp className="service_item_underline"></samp>
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
