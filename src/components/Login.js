import React, { useState, useEffect } from "react";
import DesoIdentity from "../libs/desoIdentity";

// import DesoApi from "./libs/desoApi";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [publicKey, setSetPublicKey] = useState(null);
  const [desoIdentity, setDesoIdentity] = useState(null);
  //   const [desoApi, setDesoApi] = useState(null);
  const IdentityUsersKey = "identityUsersV2";

  useEffect(() => {
    const di = new DesoIdentity();
    setDesoIdentity(di);
    // const da = new DesoApi();
    // setDesoApi(da);

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
    const user = await desoIdentity.loginAsync(4);
    setSetPublicKey(user.publicKey);
    setLoggedIn(true);
  };
  const logout = async () => {
    await desoIdentity.logout(publicKey);
    setSetPublicKey(null);
    setLoggedIn(false);
  };
  return (
    <>
      {loggedIn ? (
        <button className="btn btn-secondary" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-secondary" onClick={login}>
          Login
        </button>
      )}
    </>
  );
};

export default Login;
