import React from "react";
import "./video.css";
import ReactPlayer from "react-player";

const Video = () => {
  const data = [
    {
      id: 1,
      url: "https://www.youtube.com/watch?v=m1fzvVotz0g",
      title: "Work process of our team",
      content:
        "Emily Shaffer. Marketing and sales professional who is passionate about personal development.",
    },
    {
      id: 2,
      url: "https://www.youtube.com/watch?v=m1fzvVotz0g",
      title: "Work process of our team",
      content:
        "Emily Shaffer. Marketing and sales professional who is passionate about personal development.",
    },
    {
      id: 3,
      url: "https://www.youtube.com/watch?v=m1fzvVotz0g",
      title: "Work process of our team",
      content:
        "Emily Shaffer. Marketing and sales professional who is passionate about personal development.",
    },
    {
      id: 4,
      url: "https://www.youtube.com/watch?v=m1fzvVotz0g",
      title: "Work process of our team",
      content:
        "Emily Shaffer. Marketing and sales professional who is passionate about personal development.",
    },
    {
      id: 5,
      url: "https://www.youtube.com/watch?v=m1fzvVotz0g",
      title: "Work process of our team",
      content:
        "Emily Shaffer. Marketing and sales professional who is passionate about personal development.",
    },
    {
      id: 6,
      url: "https://www.youtube.com/watch?v=m1fzvVotz0g",
      title: "Work process of our team",
      content:
        "Emily Shaffer. Marketing and sales professional who is passionate about personal development.",
    },
  ];
  return (
    <div className="container video" id="video">
      <div className="section_title">
        <h5>Video</h5>
        <span className="line"></span>
        <div className="row">
          {data.map((item, index) => (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="video-details" key={index}>
                <ReactPlayer
                  url={item.url}
                  loop={true}
                  controls
                  playing={false}
                  width="auto"
                  height="250px"
                />
                <div className="video-content">
                  <h6>{item.title}</h6>
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Video;
