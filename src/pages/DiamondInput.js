import React from "react";
import { useState } from "react";
import { getProfilesDiamonders } from "../redux/actions/profilesActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DiamondInput = () => {
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
      await dispatch(getProfilesDiamonders(headers));
      navigate("/wheel");
    }
  };

  return (
    <div
      className="container"
      style={{
        height: "85vh",
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
            left: "10%",
            width: "80%",
          }}
        >
          <input
            type="text"
            className="form-control"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={{height:"40px"}}
          />

          <button type="submit" className="btn btn-success" title="We will filter the diamond senders for this post.">
            Submit
          </button>
        </div>
      </form>
      <p
        className="text-center"
        style={{
          fontWeight: "bold",
          color: "red",
          fontSize: "45px",
        
        }}
      >
        DIAMOND SENDERS 
      </p>
      <h1 className="text-center" style={{ lineHeight:"45px",color:"whitesmoke"}}>
        Your Post URL
      </h1>
  
    </div>
  );
};

export default DiamondInput;
