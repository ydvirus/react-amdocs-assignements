import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="container-fluid p-0">
      <div className="collapse navbar-collapse" id="navbarScroll">
        <div className="container-fluid" style={{ backgroundColor: "#e5e5e5" }}>
          <div className="d-flex flex-column align-items-end me-5">
            <h5 className="mt-3 navbar-menu-items">Home</h5>
            <h5 className="navbar-menu-items">About</h5>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="row" style={{ width: "100%" }}>
            <div className="navbar-brand-column col-sm-6 col-12">
              <h1 className="navbar-brand">Build Dreams</h1>
            </div>
            <div className="social-media-column col-sm-6 col-12">
              <div className="box d-flex justify-content-center align-items-center">
                <button
                  // navbar-toggler - is used when we want toggler for small screens only
                  className="navbar-expand navbar-expand-btn-1 pe-2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarScroll"
                  aria-controls="navbarScroll"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <img
                  src="https://img.icons8.com/color/512/facebook-circled.png"
                  className="icon pe-1"
                  alt="Facebook_icon"
                />
                <img
                  src="https://img.icons8.com/color/512/twitter-circled.png"
                  className="icon pe-1"
                  alt="Twitter_icon"
                />
                <img
                  src="https://img.icons8.com/ios-glyphs/512/instagram-circle.png"
                  className="icon pe-1"
                  alt="Twitter_icon"
                />
              </div>
            </div>
            <div className="extra-hamburger-btn navbar-expand-btn-2 col-12">
              <button
                // navbar-toggler - is used when we want toggler for small screens only
                className="navbar-expand pe-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
