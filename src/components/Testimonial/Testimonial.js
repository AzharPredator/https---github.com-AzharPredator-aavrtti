import React, { useState } from "react";
import "./testimonial.css";

const Testimonial = () => {
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
      img: "https://d1hbpr09pwz0sk.cloudfront.net/profile_pic/emily-shaffer-58df9cea",
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
  ];
  const [showMorePost, setShowMorePost] = useState(9);
  const loadmore = () => {
    setShowMorePost((prev) => prev + 3);
  };
  return (
    <div className="container testimonial-section" id="testimonial">
      <div className="section_title">
        <h5>Testimonial</h5>
        <samp className="line"></samp>
      </div>
      <div className="row">
        {data.slice(0, showMorePost).map((item, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
            <div
              className={index == 0 ? "marked-content-card" : "content-card"}
            >
              <img src={item.img} alt="image"></img>
              <p>{item.content}</p>
              <p>
                <samp className="card_name">{item.name}</samp>
              </p>
              <p>{item.position}</p>
            </div>
          </div>
        ))}
      </div>
      {showMorePost >= data.length ? null : (
        <span className="load-more-button" onClick={loadmore}>
          Load More
        </span>
      )}
    </div>
  );
};

export default Testimonial;
