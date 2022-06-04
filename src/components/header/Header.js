import React, { useEffect } from "react";
import "./Header.css";
import gif from "../../assets/desologogif.gif";
import { Link } from "react-router-dom";

import { getProfilesFollowers } from "../../redux/actions/profilesActions";
import { useDispatch } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Lottie from "react-lottie-player";
import lottieJson from './my-lottie.json'

const Header = () => {
  const user = JSON.parse(localStorage.getItem("identityUsersV2"));
  console.log("user", user);
  const public_key = user?.publicKey;
  const navigate = useNavigate();

  console.log("pb", public_key);
  const dispatch = useDispatch();
  console.log("public_key", public_key);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const getFollowers = async () => {
    await dispatch(getProfilesFollowers({ PublicKey: public_key }));
    if (!public_key) {
      toast.error("You need to sign in to see the followers");
    } else {
      navigate("/wheel");
    }
  };
  return (
    <section id="header">
      <div className="container header align-items-center">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>Deso Wheel</span>
            <span>First Raffle Application in Deso Blockchain</span>
          </h1>
          
          <p className="u-text-custom">
            Paste the URL of any post on DESO. Get a winner among the lucky
            Reposters, Diamonders or Likers.
          </p>
          <div>
            <Link to="/diamond">
              <button className="button-49">
                Diamonds
                <i className="far fa-gem" style={{ color: "#006AF9" }}></i>
              </button>
            </Link>
            <Link to="/repost">
              <button className="button-49 mx-1">
                Reposts{" "}
                <i className="fas fa-retweet" style={{ color: "#7800ff " }}></i>
              </button>
            </Link>
            <Link to="/like">
              <button className="button-49 mx-1">
                Likes <i className="fas fa-heart" style={{ color: "red" }}></i>
              </button>
            </Link>

            <button className="button-49 mx-1 my-1" onClick={getFollowers}>
              Followers{" "}
              <i className="fa-solid fa-user" style={{ color: "orange" }}></i>
            </button>
          </div>
        </div>
        <div className="header-right">
          {/* <img src={phoneHeader} alt="phone" /> */}
          {/* <img src={gif} alt="phone" /> */}
          <Lottie
            loop
            animationData={lottieJson}
            play
            style={{ width: 550, height: 550 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
