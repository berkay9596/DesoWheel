import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { RiCloseLine } from "react-icons/ri";
import logo from "../../assets/desologo.png";
import Login from "../Login";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar container">
      <div className="logo">
        <img
          src={logo}
          style={{ width: "80px", cursor: "pointer" }}
          onClick={() => navigate("/")}
          alt="name"
        />
        {/* <SiAnaconda color="#fff" size={33} /> */}
        <p className="logo-text">
          <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            {" "}
            Deso<span>Wheel</span>
          </div>
        </p>
      </div>

      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/posts">My Posts</a>
          </li>
          <li>
            <Login />
          </li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#fff" size={30} />
        ) : (
          <AiOutlineBars color="#fff" size={27} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
