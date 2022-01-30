import React from "react";
import wheel from "../assets/wheel.gif";
import { Link } from "react-router-dom";
import WaveEffect from "../Components/WaveEffect";
const HomePage = () => {
  return (
    <>
      <div
        className="container d-flex align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="row container d-flex justify-content-center ">
          <div
            className="row col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex res"
            style={{ marginRight: "2.2em" }}
          >
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
            <div className="d-flex btns" style={{}}>
              <Link to="/like">
                <button className="button-49">Reposts</button>
              </Link>
              <Link to="/like">
                <button className="button-49 mx-3">Likes</button>
              </Link>
            </div>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-6 col-12 col-sm-12">
            <img className="wheel-gif" src={wheel} alt="wheel" />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "5em" }}>
        <WaveEffect />
      </div>
    </>
  );
};

export default HomePage;
