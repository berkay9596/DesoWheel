import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getProfilesRepost } from "../redux/actions/profilesActions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const RepostInput = () => {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const headers = {
    post_url: url,
    reader_public_key:
      "BC1YLianxEsskKYNyL959k6b6UPYtRXfZs4MF3GkbWofdoFQzZCkJRB",
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    if (!url) {
      toast.error("Please enter the url.");
    } else {
      await dispatch(getProfilesRepost(headers));
      navigate("/wheel");
    }
  };

  return (
    <div style={{ position: "relative", top: "20rem" }}>
      <h1 className="text-center" style={{ zIndex: -2 }}>
        Your Post URL
      </h1>
      <p
        className="text-center"
        style={{
          fontWeight: "bold",
          color: "white",
          fontSize: "25px",
          zIndex: -2,
        }}
      >
        REPOSTERS
      </p>
      <form onSubmit={formSubmit} className="form-group">
        <div
          className="input-group"
          style={{
            position: "absolute",
            top: "10rem",
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

          <button
            type="submit"
            className="btn btn-success"
           >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RepostInput;
