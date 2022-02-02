import React from "react";

import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";
import Logo from "../assets/wheel.gif";
const TopBar = () => {
  const props = {
    items: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "My posts",
        link: "/posts",
      },
      {
        text: "What is Deso Wheel?",
        link: "/desowheel",
      },
      {
        text: "Contact",
        link: "/contact",
      },
      {
        text: "Roadmap",
        link: "/roadmap",
      },
    ],
    logo: {
      text: "Deso Wheel App",
      link: "/",
      img: Logo,
    },
    style: {
      barStyles: {
        background: "#f0a30a",
      },
      linkStyles: {
        color: 'white',
        fontWeight:"bold"
      },
      sidebarStyles: {
        background: "black",
        buttonColor: "white",
        zindex: 10,
      },
    },
  };

  return <Navbar {...props} />;
};

export default TopBar;
