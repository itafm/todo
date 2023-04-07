import React from "react";
import "./About.css";
import about from "../image/5130627 (1).jpg";
import "animate.css/animate.min.css";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-light mt-5">
            <div className="animate__animated animate__heartBeat">
              <h3 className="text-danger">ABOUT Me</h3>
            </div>

            <p className="animate__animated animate__zoomIn animate__slower">
              Hello, I am FZ. My passions are music and travel. I am an organized and sociable person, and I am interested in sustainable development..{" "}
            </p>

            <div className="animate__animated animate__heartBeat">
              <h3 className="text-danger">EXPERIENCES</h3>
            </div>
            <p className="animate__animated animate__zoomIn animate__slower">
              I am front-end web developer. I can provide clean code and pixel
              perfect design. i also make the website more & more interactive
              with web animations.! can provide clean codeand pixel perfect
              design.I also make the web site more & more interactive with web
              animations.A responsive design makes your website accessible to
              all users,regardless of their device{" "}
            </p>
            <Link to="/con-tacts">
              <button>Let's Talk</button>
            </Link>
          </div>
          <div className="col-md-6 mt-5 ">
            <img
              src={about}
              className="rounded "
              alt=""
              width={446}
              height={446}
            />
          </div>
        </div>
      </div>
    </>
  );
};
