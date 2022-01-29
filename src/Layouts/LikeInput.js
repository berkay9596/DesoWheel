import React from "react";
import { useState } from "react";
import { getProfiles } from ".././redux/actions/profilesActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const LikeInput = () => {
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
    await dispatch(getProfiles(headers));
    navigate("/wheel");
  };

  return (
    <div style={{position:"relative",top:"20rem"}}>
      <h1 className="text-center">Your Post URL</h1>
      <form
        onSubmit={formSubmit}
        className="form-group"
      >
        <div
          className="input-group"
          style={{
            position: "absolute",
            top: "5rem",
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
    </div>
  );
};

export default LikeInput;
