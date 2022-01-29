import "../App.css";
import DesoPrice from "./DesoPrice";
import React from "react";

import { Navbar } from "responsive-navbar-react";
import "responsive-navbar-react/dist/index.css";
const TopBar = () => {
  const props = {
    items: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Doc",
        link: "#docs",
      },
      {
        text: "Custom",
        link: "#custom-bar",
      },
      {
        text: "Contact",
        link: "#contact",
      },
    ],
    logo: {
      text: "Deso-wheel.com",
    },
    style: {
      barStyles: {
        background: "#191CA9",
      },
      sidebarStyles: {
        background: "black",
        buttonColor: "white",
      },
    },
  };

  return <Navbar {...props} />;
};

export default TopBar;
