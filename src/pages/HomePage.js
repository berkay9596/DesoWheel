import React, { useEffect } from "react";
import wheel from "../assets/wheel.gif";
import { Link } from "react-router-dom";
import { FaRetweet } from "react-icons/fa";
import DesoLogin from "../components/DesoLogin";
import { getInfo } from "../redux/actions/userInfoActions";
import { useDispatch, useSelector } from "react-redux";
import BasicInfo from "../components/BasicInfo";
import axios from "axios";
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
    <div className="d-flex" style={{ height: "92vh" }}>
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
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
              pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
              Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
              in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
              per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
              vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
              Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat
              faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc.
              Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis.
              Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus,
              non dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
