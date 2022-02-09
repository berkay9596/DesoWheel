import React from "react";
import { useState } from "react";
import { getProfiles } from "../redux/actions/profilesActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LikeInput = () => {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const headers = {
    PostUrl: url,
    ReaderPublicKey: "BC1YLianxEsskKYNyL959k6b6UPYtRXfZs4MF3GkbWofdoFQzZCkJRB",
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    if (!url) {
      toast.error("Please enter the url.");
    } else if (!url.includes("post")) {
      toast.error("Please enter valid url");
      setUrl("");
    } else {
      await dispatch(getProfiles(headers));
      navigate("/wheel");
    }
  };

  return (
    <div
      className="container"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column-reverse",
        justifyContent: "center",

        width:"100%"
      }}
    >
      <form onSubmit={formSubmit} className="form-group">
        <div
          className="input-group"
          style={{
            left: "16%",
            width: "70%",
          }}
        >
          <input
            type="text"
            className="form-control"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />

          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </form>
      <p
        className="text-center"
        style={{
          fontWeight: "bold",
          color: "#0056B3",
          fontSize: "25px",
          zIndex: -2,
        }}
      >
       ( LIKERS ) 
      </p>
      <h1 className="text-center" style={{ zIndex: -2 , lineHeight:"45px"}}>
        Your Post URL
      </h1>
  
    </div>
  );
};

export default LikeInput;
