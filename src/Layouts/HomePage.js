import React from "react";
import wheel from "../assets/wheel.gif";
import { Link } from "react-router-dom";
import { FaRetweet } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="d-flex" style={{ height: "100vh", marginTop: "6rem" }}>
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row container d-flex justify-content-center">
          <div className="row col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex res">
            <h1
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "3rem",
                zIndex: -2,
              }}
            >
              Deso
            </h1>
            <h1
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "3rem",
                zIndex: -1,
              }}
            >
              Wheel
            </h1>
            <h2 style={{ color: "black" }}>
              Paste the URL of any post on DESO.
              <br /> Get a winner among the lucky <b>Reposters</b> or{" "}
              <b>Likers.</b>
            </h2>
            <div className="d-flex btns">
              <Link to="/repost">
                <button className="button-49 ">
                  Repost <FaRetweet className="reclout" />
                </button>
              </Link>
              <Link to="/like">
                <button className="button-49 mx-3">Likes ❤️</button>
              </Link>
            </div>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12 col-12 col-sm-12">
            <img className="wheel-gif" src={wheel} alt="wheel" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
