import React, { useEffect } from "react";
import wheel from "../assets/desologogif.gif";
import { Link } from "react-router-dom";
import DesoLogin from "../components/DesoLogin";
import { getInfo } from "../redux/actions/userInfoActions";
import { useDispatch, useSelector } from "react-redux";
import BasicInfo from "../components/BasicInfo";
// import axios from "axios";

const HomePage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.info);
  const public_key = localStorage.getItem("publicKey");
  const headers = {
    PublicKey: public_key,
  };
  console.log("token", public_key);
  console.log("state", state);
  useEffect(() => {
    dispatch(getInfo(headers));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [public_key]);

  // const body = {
  //   PublicKey: "BC1YLjY7KnccPLkwd322FeKsDJts6SsLt1BfBjxDJrpHuP4Bjyb1WQa",
  // };
  // const apireq = () => {
  //   return axios.post(
  //     "https://deso-wheel.herokuapp.com/api/get-users-holders",
  //     body
  //   ).then(resp=> console.log("resp",resp));
  // };
  // apireq();
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <div className="container d-flex align-items-center justify-content-center">
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
              {public_key ? <BasicInfo /> : <DesoLogin />}
            </div>
            <h1
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "3rem",
                zIndex: -2,
                lineHeight: "70px",
              }}
            >
              Deso Wheel
            </h1>
            {/* <h1
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: "3rem",
                zIndex: -1,
              }}
            >
              Wheel
            </h1> */}
            <h2 style={{ color: "black" }}>
              Paste the URL of any post on DESO.
              <br /> Get a winner among the lucky <b>Reposters</b>,{" "}
              <b>Diamonders</b> or <b>Likers.</b>
            </h2>
            <div className="d-flex btns">
              <Link to="/like">
                <button className="button-49">
                  Diamonds
                  <i class="far fa-gem" style={{color:"#006AF9"}}></i>
                </button>
              </Link>
              <Link to="/repost">
                <button className="button-49 mx-1">
                  Repost <i class="fas fa-retweet" style={{color:"white"}}></i>
                </button>
              </Link>
              <Link to="/like">
                <button className="button-49 mx-1">
                  Likes <i class="fas fa-heart" style={{color:"red"}}></i>
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
  );
};

export default HomePage;
