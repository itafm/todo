import React from "react";
import image from "../image/me.png";
import { Link } from "react-router-dom";
import "./Home.css";
import Typical from "react-typical";
import img from "../image/CV.pdf";

export const Home = () => {
  return (
    <>
      <div className="container  text ">
        <div class="row">
          <div class="col-md-7 py-5 mt-5">
            <p className="style">WELCOME TO MY WORD </p>
            <h3>
              Hi, I'm <span className="text-danger">Fati z Msik</span>
            </h3>
            <div className="fs-2">
              <Typical
                steps={[
                  "a Full Stack Developer.",
                  1500,
                  "a Professional Coder",
                  500,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </div>

            <h6 className="style">
              I use animation as a third dimension by which to simplify
              experiences and kuding thro each and every interaction.I'm not
              adding motion just to spruce things up,but doing it in ways that{" "}
            </h6>
            <div>
              <Link to={img} target="_blank" download>
                <button className="mt-4">Download CV</button>
              </Link>
            </div>
            <div className="icons mt-4  text-center">
              <Link to="https://www.linkedin.com/in/fatimaezahra-msik-302561197/">
                <box-icon name="linkedin" type="logo"></box-icon>{" "}
              </Link>

              <Link to="https://www.facebook.com/fatimazahra.msm.5/">
                {" "}
                <box-icon name="facebook-circle" type="logo"></box-icon>{" "}
              </Link>
              <Link to="https://github.com/itafm">
                {" "}
                <box-icon name="github" type="logo"></box-icon>{" "}
              </Link>
              <Link to="https://www.instagram.com/itafmitafm/">
                <box-icon name="instagram" type="logo"></box-icon>{" "}
              </Link>
            </div>
          </div>
          <div class="col-md-5 ">
            <div className="back ">
              <img className="image w-75 mb-5" src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
