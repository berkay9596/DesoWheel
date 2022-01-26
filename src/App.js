import { useState } from "react";
import { getProfiles } from "../src/redux/actions/profilesActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function App() {
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
    <div>
      {/* <Fireworks/>  */}
      <h1 style={{color:"black",fontWeight:"bold",fontSize:"3rem",marginTop:"3rem"}}>
        Simply paste the url of any post on DESO. <br />
        See the magic.
      </h1>
      <form onSubmit={formSubmit} className="form-group">
        <div
          className="input-group"
          style={{
            position: "absolute",
            top: "30%",
            left: "28%",
            width: "50%",
          }}
        >
          <input
            type="text"
            className="form-control"
            value={url}
            type="text"
            onChange={(e) => setUrl(e.target.value)}
          />

          <button type="submit" className="btn btn-success">
            Get Likes
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
