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
        text: "Roadmap",
        link: "/",
      },
      {
        text: "What is DESO?",
        link: "/",
      },
      {
        text: "Support",
        link: "/",
      },
    ],
    logo: {
      text: "Deso Wheel App",
      link: "/",
      img: Logo,
    },
    style: {
      barStyles: {
        background: "#191CA9",
      },
      sidebarStyles: {
        background: "black",
        buttonColor: "white",
        zindex:10
      },
    },
  };

  return <Navbar {...props} />;
};

export default TopBar;