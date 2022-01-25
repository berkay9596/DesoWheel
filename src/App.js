import { useState } from "react";
// import Circle from "./Circle";
// import Circle2 from "./Circle2";
import { getProfiles } from "../src/redux/actions/profilesActions";
import { useDispatch } from "react-redux";
import Circle3 from "./Circle3";
import Fireworks from "./Firework";
function App() {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const headers = {
    post_url: url,
    reader_public_key:
      "BC1YLianxEsskKYNyL959k6b6UPYtRXfZs4MF3GkbWofdoFQzZCkJRB",
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    await dispatch(getProfiles(headers));
  };

  return (
    <div>
      {/* <Circle profiles={profiles} /> */}
      {/* <Circle2  /> */}
      {/* {winner ?  <Fireworks/>  : ""} */}
      <Circle3/>
      <form onSubmit={formSubmit}>
        <input
          value={url}
          type="text"
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Get Likes</button>
      </form>
    </div>
  );
}

export default App;
