import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneVolume,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import "./ContactInfo.css";

function ContactInfo() {
  return (
    <>
      <div className="container-fluid contact-info-container d-flex align-items-center">
        <div className="green-bar d-flex align-items-center justify-content-center">
          <div className="card contact-info-card py-0">
            <div className="card-body p-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-12 left-col text-left ps-0 pt-3">
                    <h2 className="">Contact Info</h2>
                    <div className="contact-number d-flex align-items-start py-3">
                      <FontAwesomeIcon
                        className="contact-icon me-2 pt-1"
                        icon={faPhoneVolume}
                      />{" "}
                      +1 (234) 567-8910
                    </div>
                    <div className="email d-flex align-items-start py-3">
                      <FontAwesomeIcon
                        className="contact-icon me-2 pt-1"
                        icon={faEnvelope}
                      />{" "}
                      contact@yourmail.com
                    </div>
                    <div className="address d-flex align-items-start py-3">
                      <FontAwesomeIcon
                        className="contact-icon me-2 pt-1"
                        icon={faLocationDot}
                      />{" "}
                      203, Abu salam, behind alees street, Australia
                    </div>
                    <div className="icons d-flex justify-content-start align-items-start py-3">
                      <FontAwesomeIcon
                        className="social-icon me-2"
                        icon={faFacebookSquare}
                      />
                      <FontAwesomeIcon
                        className="social-icon me-2"
                        icon={faTwitter}
                      />
                      <FontAwesomeIcon
                        className="social-icon me-2"
                        icon={faInstagram}
                      />
                      <FontAwesomeIcon
                        className="social-icon me-2"
                        icon={faYoutube}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 col-12 ps-0 pe-0 pt-3">
                    <form>
                      <div className="pb-2">
                        <input
                          type="text"
                          className="form-control contact-input-field"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="pb-2">
                        <input
                          type="text"
                          className="form-control contact-input-field"
                          placeholder="Enter a valid email address"
                        />
                      </div>
                      <div className="pb-2">
                        <textarea
                          name="Your Msg"
                          className="form-control contact-input-field"
                          rows={3}
                          id="Msg"
                          placeholder="Enter your message"
                        ></textarea>
                      </div>
                      <button className="btn btn-success form-control submit-button">SUBMIT</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactInfo;
