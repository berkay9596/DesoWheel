import React, { useEffect } from "react";
import "./Header.css";
import gif from "../../assets/desologogif.gif";
import { Link } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
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
          </div>
        </div>
        <div className="header-right">
          {/* <img src={phoneHeader} alt="phone" /> */}
          <img src={gif} alt="phone" />
        </div>
      </div>
    </section>
  );
};

export default Header;
