import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section id="footer" style={{padding:"40px"}}>
      <div className="container d-flex align-items-center justify-content-center">
        <p className="u-text-small mx-5" style={{ marginTop: "4px" }}>
          &copy; Copyright 2022. DesoWheel.com
        </p>
        <p className="u-text-small">
          Built with{" "}
          <i
            className="fa fa-heart"
            style={{ color: "red", fontWeight: "bold", fontSize: "20px" }}
          ></i>{" "}
          by{" "}
          <a
            href="https://diamondapp.com/u/berkayuksel"
            style={{ textDecoration: "none", color: "rebeccapurple" }}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            @Berkayuksel{" "}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
