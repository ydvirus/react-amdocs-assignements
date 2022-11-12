import React from "react";
import './Footer.css'

function Footer() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center footer">
      <div className="py-2 px-5">
        <span className="link-text">Privacy Policy</span>
      </div>
      <div className="py-2 px-5">
        <span className="link-text">Sitemap</span>
      </div>
      <div className="py-2 px-5">
        <span className="link-text">
        &copy; { new Date().getFullYear()} Build Dreams Ltd
        </span>
      </div>
    </div>
  );
}

export default Footer;
