import React from "react";
import "./Home.css";
import Card from "../componet/card";
import "../componet/video.css";
import Video from "../Assets/Footage.mp4";

export default function Home() {
  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <div className="content">
          <video src={Video} autoPlay loop muted />
        </div>

        <div className="Cards">
          <h1>Welcome to Gaming News See What's New!</h1>
          <div className="row">
            <div className="col">
              <Card
                src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
                title="Gaming News"
                description="You can find all gaming news by clicking the button below."
                link="/news"
                buttonText="Check Here"
              />
            </div>
            <div className="col">
              <Card
                src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
                title="Technologie"
                description="You can find all Technologie by clicking the button below."
                link="/tech"
                buttonText="Check Here"
              />
            </div>
            <div className="col">
              <Card
                src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg"
                title="about"
                description="You can find all about by clicking the button below."
                link="/about"
                buttonText="Check Here"
              />
            </div>
          </div>
        </div>

        <div className="image-gallery">
          <h2>Image Gallery</h2>
          <div className="row">
            <div className="col-lg-6">
              <img
                src="https://via.placeholder.com/300"
                alt="Big Image"
                style={{ marginBottom: "-5px", marginRight: "-5px" }}
              />
            </div>
            <div className="col-lg-3 d-flex flex-column justify-content-between">
              <img
                src="https://via.placeholder.com/150"
                alt="Top Left Image"
                style={{
                  marginTop: "-5px",
                  marginLeft: "-5px",
                  marginBottom: "-5px",
                  marginRight: "-5px",
                }}
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Bottom Left Image"
                style={{
                  marginTop: "-5px",
                  marginLeft: "-5px",
                  marginBottom: "-5px",
                  marginRight: "-5px",
                }}
              />
            </div>
            <div className="col-lg-3 d-flex flex-column justify-content-between">
              <img
                src="https://via.placeholder.com/150"
                alt="Top Right Image"
                style={{
                  marginTop: "-5px",
                  marginLeft: "-5px",
                  marginBottom: "-5px",
                  marginRight: "-5px",
                }}
              />
              <img
                src="https://via.placeholder.com/150"
                alt="Bottom Right Image"
                style={{
                  marginTop: "-5px",
                  marginLeft: "-5px",
                  marginBottom: "-5px",
                  marginRight: "-5px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
