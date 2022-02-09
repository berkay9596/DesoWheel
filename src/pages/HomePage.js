// import React, { useEffect } from "react";
import wheel from "../assets/son.png";
import { Link } from "react-router-dom";
// import { getInfo } from "../redux/actions/userInfoActions";
// import { useDispatch, useSelector } from "react-redux";
import Login from "../components/Login";
import WaveEffect from '../components/WaveEffect'

const HomePage = () => {
  // const dispatch = useDispatch();
  // const state = useSelector((state) => state.info);
  // const user = JSON.parse(localStorage.getItem("identityUsersV2"));
  // const public_key = user.publicKey;
  // const headers = {
  //   PublicKey: public_key,
  // };
  // useEffect(() => {
  //   dispatch(getInfo(headers));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [public_key]);

  return (
    <>
    <div className="d-flex my-4">
      <div className="container d-flex align-items-center justify-content-center a">
        <div className="row container d-flex justify-content-center">
          <div className="row col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex res">
            <div
              style={{
                position: "absolute",
                top: "22px",
                left: "66px",
                width: "200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <Login />
              {/* {public_key ? <BasicInfo /> : <DesoLogin />} */}
            </div>

            <h1
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "3rem",
                
                lineHeight: "70px",
              }}
            >
              Deso
            </h1>
            <h1
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "3rem",
        
                lineHeight: "70px",
              }}
            >
              Wheel
            </h1>
            <h2 style={{ color: "black" }}>
              Paste the URL of any post on DESO.
              <br /> Get a winner among the lucky <b>Reposters</b>,{" "}
              <b>Diamonders</b> or <b>Likers.</b>
            </h2>
            <div className="d-flex btns">
              <Link to="/like">
                <button className="button-49">
                  Diamonds
                  <i className="far fa-gem" style={{ color: "#006AF9" }}></i>
                </button>
              </Link>
              <Link to="/repost">
                <button className="button-49 mx-1">
                  Repost{" "}
                  <i className="fas fa-retweet" style={{ color: "#7800ff " }}></i>
                </button>
              </Link>
              <Link to="/like">
                <button className="button-49 mx-1">
                  Likes{" "}
                  <i className="fas fa-heart" style={{ color: "red" }}></i>
                </button>
              </Link>
            </div>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12 col-12 col-sm-12">
            <img className="wheel-gif" src={wheel} alt="wheel" />
          </div>
        </div>
        
      </div>

    </div>
    <div style={{position:"relative",padding:0,margin:0}}>
      <WaveEffect/>
      </div>
    </>
  );
};

export default HomePage;
