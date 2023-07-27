import React from "react";
import "./feedback.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Zoom from "react-reveal/Zoom";

const Feedback = () => {
  const data = [
    {
      img: "https://d1hbpr09pwz0sk.cloudfront.net/profile_pic/emily-shaffer-58df9cea",
      content:
        "Emily Shaffer. Marketing and sales professional who is passionate about personal development, fostering connections, and being a self-starter. Savannah, GA.",
      name: "Emily Shaffer",
      position: "Software Engineer",
    },
    {
      img: "https://media.licdn.com/dms/image/C4D03AQHEYVQv6JSSsA/profile-displayphoto-shrink_800_800/0/1516618988068?e=2147483647&v=beta&t=IffGOdJN0cWwaD1yqPRYhorYlk4NcD0L9PuGYKjVNzI",
      content:
        "Emily Shaffer. Marketing and sales professional who is passionate about personal development, fostering connections, and being a self-starter. Savannah, GA.",
      name: "Hongtao Sun",
      position: "Software Engineer",
    },
    {
      img: "https://media.licdn.com/dms/image/C4D03AQH0pS8FDwbmIw/profile-displayphoto-shrink_800_800/0/1530066006147?e=2147483647&v=beta&t=Eb1BX0G8JdMGk7dw2IpoPs6Xdwb5Hqp-35kSLQyA5e0",
      content:
        "Emily Shaffer. Marketing and sales professional who is passionate about personal development, fostering connections, and being a self-starter. Savannah, GA.",
      name: "Max Chu",
      position: "Product Go-To-Market Lead",
    },
    {
      img: "https://media.licdn.com/dms/image/C4D03AQFqSmaprnerNw/profile-displayphoto-shrink_800_800/0/1620539149884?e=2147483647&v=beta&t=DdqU3ilTVZcXa1jMpO6T83fH0qsjOeUGBOPvuwE9xd4",
      content:
        "Emily Shaffer. Marketing and sales professional who is passionate about personal development, fostering connections, and being a self-starter. Savannah, GA.",
      name: "MONIS KHAN",
      position: "Software Engineer",
    },
    {
      img: "https://media.licdn.com/dms/image/C5603AQE9XOmyNRwJVg/profile-displayphoto-shrink_800_800/0/1649398591116?e=2147483647&v=beta&t=0bUQSDXhxH7Z5WG4_xV_dbb2o-C9y8Dy1rr5IQytcQk",
      content:
        "Emily Shaffer. Marketing and sales professional who is passionate about personal development, fostering connections, and being a self-starter. Savannah, GA.",
      name: "SHRI PARESH KUMAR DURIA",
      position: "Software Engineer",
    },
    {
      img: "https://cdn.yashodahospitals.com/wp-content/uploads/Dr.-Anil-Kumar.jpg",
      content:
        "Emily Shaffer. Marketing and sales professional who is passionate about personal development, fostering connections, and being a self-starter. Savannah, GA.",
      name: "R. SRINIWAS",
      position: "Product Go-To-Market Lead",
    },
    {
      img: "https://images.unsplash.com/photo-1603713590241-14d3b5a8b5c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80",
      content:
        "Emily Shaffer. Marketing and sales professional who is passionate about personal development, fostering connections, and being a self-starter. Savannah, GA.",
      name: " R. MURLIDHARA NAIK",
      position: "Software Engineer",
    },
    {
      img: "https://media.licdn.com/dms/image/C5603AQFYTFHfn70CpA/profile-displayphoto-shrink_800_800/0/1656411563079?e=2147483647&v=beta&t=orOCF5fY_71A0Z3WY9dsZjMZe5vtVR_Zf0DK2FJpWkI",
      content:
        "Emily Shaffer. Marketing and sales professional who is passionate about personal development, fostering connections, and being a self-starter. Savannah, GA.",
      name: "PROMILA BHALLA",
      position: "Software Engineer",
    },
    {
      img: "https://media.licdn.com/dms/image/C4D03AQH0pS8FDwbmIw/profile-displayphoto-shrink_800_800/0/1530066006147?e=2147483647&v=beta&t=Eb1BX0G8JdMGk7dw2IpoPs6Xdwb5Hqp-35kSLQyA5e0",
      content:
        "Emily Shaffer. Marketing and sales professional who is passionate about personal development, fostering connections, and being a self-starter. Savannah, GA.",
      name: "Max Chu",
      position: "Product Go-To-Market Lead",
    },
    {
      img: "https://images.unsplash.com/photo-1569068517543-f040ab06db75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content:
        "Emily Shaffer. Marketing and sales professional who is passionate about personal development, fostering connections, and being a self-starter. Savannah, GA.",
      name: "Emily Shaffer",
      position: "Software Engineer",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    adaptiveHeight: true,
    initialSlide: 0,
    autoplay: true,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container feedback-slider" id="feedback">
      <div className="section_title">
        <h5>Feedback</h5>
        <span className="line"></span>
      </div>

      <div className="feedback-slide">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Zoom>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="card content-slider" key={index}>
                  <img
                    src={item.img}
                    alt="slider image"
                    className="center-image"
                  />
                  <p>{item.content}</p>
                  <h4>{item.name}</h4>
                  <p>{item.position}</p>
                </div>
              </div>
            </Zoom>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
