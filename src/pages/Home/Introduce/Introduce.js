import React from "react";
import introImage from "../../../assets/main-banner-image.png";
import "./Introduce.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function Introduce() {
  return (
    <div className="container introduce-container">
      <div className="row py-5">
        <div className="col-md-6 pt-3">
          <h1 className="big-green-heading mb-4" >
            One-click solution for your static website.
          </h1>
          <p className="mb-4">
            Image from{" "}
            <span style={{ textDecoration: "underline" }}>Freepik</span>
          </p>
          <div className="container">
            <div className="row" style={{ width: "75%"}}>
              <div className="col-lg-6 col-md-12 col-12 ps-0">
                <button className="btn btn-success introduction-success-button mb-4">
                  <FontAwesomeIcon
                    className="me-2"
                    icon={faArrowUpFromBracket}
                  />
                  Upload for Free
                </button>
              </div>
              <div className="col-lg-6 col-md-12 col-12 ps-0">
                <button className="btn btn-secondary introduction-secondary-button mb-4">
                  <FontAwesomeIcon className="me-2" icon={faYoutube} />
                  Watch Video
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <img
            className="introduction-image mt-4"
            src={introImage}
            alt="Introduction"
          />
        </div>
      </div>
    </div>
  );
}

export default Introduce;
