import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-center text-white"
      style={{ background: "#191CA9" }}
    >
      <div className="container p-4 pb-0">
        <section>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            style={{ borderRadius: "20px" }}
          >
            <FaFacebook />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            style={{ borderRadius: "20px" }}
          >
            <FaTwitter />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            style={{ borderRadius: "20px" }}
          >
            <FaGoogle />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            style={{ borderRadius: "20px" }}
          >
            {/* <i className="fab fa-instagram"></i> */}
            <FaInstagram />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            style={{ borderRadius: "20px" }}
          >
            <FaLinkedin />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
            style={{ borderRadius: "20px" }}
          >
            <FaGithub />
          </a>
        </section>
      </div>

      <div
        className="text-center p-3"
        // style="background-color: rgba(0, 0, 0, 0.2);"
      >
        © 2022 Copyright:
        <a className="text-white mx-2" href="https://desowheel.com/">
          Desowheel.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
