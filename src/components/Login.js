import React, { useState, useEffect,  } from "react";
import DesoIdentity from "../libs/desoIdentity";
import BasicInfo from "./BasicInfo";


import DesoApi from "../libs/desoApi";


const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [publicKey, setSetPublicKey] = useState(null);
  const [desoIdentity, setDesoIdentity] = useState(null);
  const IdentityUsersKey = "identityUsersV2";

  useEffect(() => {
    const di = new DesoIdentity();
    setDesoIdentity(di);
    let user = {};
    if (localStorage.getItem(IdentityUsersKey) === "undefined") {
      user = {};
    } else if (localStorage.getItem(IdentityUsersKey)) {
      user = JSON.parse(localStorage.getItem(IdentityUsersKey) || "{}");
    }
    if (user.publicKey) {
      setLoggedIn(true);
      setSetPublicKey(user.publicKey);
    }
    // eslint-disable-line react-hooks/exhaustive-deps
  }, []);

  const login = async () => {
    const user = await desoIdentity.loginAsync(1);
    setSetPublicKey(user.publicKey);
    setLoggedIn(true);
    window.location.reload(false);
  };
  const logout = async () => {
    localStorage.removeItem("identityUsersV2");
  };

  return (
    <>
      {loggedIn ? (
        <BasicInfo logout={logout} />
      ) : (
        <button
          className="btn btn-success"
          style={{ width: "100px", fontWeight: "bold", fontSize: "13px" }}
          onClick={login}
        >
          Login
        </button>
      )}
    </>
  );
};

export default Login;
