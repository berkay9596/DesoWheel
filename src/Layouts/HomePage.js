import React from "react";
import wheel from "../assets/wheel.gif";
import { Link } from "react-router-dom";
import WaveEffect from "../Components/WaveEffect";
import { FaRetweet } from "react-icons/fa";
const HomePage = () => {
  return (
    <>
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div className="row container d-flex justify-content-center" style={{height:"45vh"}}>
          <div className="row col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex res">
            <h1
              style={{
                color: "#007BFF",
                fontWeight: "bold",
                fontSize: "3rem",
                zIndex: -2,
              }}
            >
              Deso
            </h1>
            <h1
              style={{
                color: "#007BFF",
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
                <button className="button-49">
                  Repost <FaRetweet />
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
      <div style={{ marginTop: "12em" }}>
        <WaveEffect />
      </div>
    </>
  );
};

export default HomePage;
