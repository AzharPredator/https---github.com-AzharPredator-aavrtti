import React from "react";
import "./team.css";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import Rotate from "react-reveal/Rotate";

const Team = () => {
  const data = [
    {
      id: 1,
      name: "Amelia",
      content:
        "A highly motivated accounting specialist with over three years of experience assisting advisers in the private practice industry. ",
      img: "https://www.cheatsheet.com/wp-content/uploads/2022/08/Persuasion-Dakota-Johnson.jpg?w=1200",
    },
    {
      id: 2,
      name: "Oliver",
      content:
        "Highly trained and motivated administrative assistant with over seven years of experience providing clerical support to three executive professionals.",
      img: "https://www.yourstru.ly/wp-content/uploads/2023/01/2023-01-27_43_the-most-handsome-man.webp",
    },
    {
      id: 3,
      name: "Noah",
      content:
        "Self-sufficient and organized custodian with over nine years of experience cleaning and providing maintenance to the upkeep of hospitals and clinics",
      img: "https://cdnph.upi.com/collection/fp/upi/13346/8a11f9749d34f1254321233d3eea87c0/Harry-Styles-turns-29-a-look-back_1_1.jpg",
    },
    {
      id: 4,
      name: "Luna",
      content:
        "Data-driven and creative digital marketing manager with over 15 years of marketing experience and five years of management experience.",
      img: "https://www.theplace2.ru/cache/archive/andrea_riseborough/img/Wim_Heitinga_Andrea_-gthumb-ghdata300.jpg",
    },
    {
      id: 5,
      name: "James",
      content:
        "Problem-solving information technology specialist with six years of experience using operating and security software for various technology companies",
      img: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80",
    },
    {
      id: 6,
      name: "Johnny Depp",
      content:
        "Data-driven and creative digital marketing manager with over 10 years of marketing experience and five years of management experience.",
      img: "https://www.sorrisi.com/wp-content/uploads/2015/10/johnny-depp-olycom06.jpg",
    },
  ];
  return (
    <div className="container team-members" id="team">
      <div className="section_title">
        <h5>Team Members</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <Rotate bottom right>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="card team-members-item">
                <img src={item.img} alt="team image" />
                <div className="team-info">
                  <h6>{item.name}</h6>
                  <p>{item.content}</p>
                </div>
                <span className="line-for-teammembrs"></span>
                <div className="team-social-icons">
                  <p>
                    <FaFacebookF size={25} />
                  </p>
                  <p>
                    <FaTwitter size={25} />
                  </p>
                  <p>
                    <FaLinkedinIn size={25} />
                  </p>
                </div>
              </div>
            </div>
          </Rotate>
        ))}
      </div>
    </div>
  );
};

export default Team;
