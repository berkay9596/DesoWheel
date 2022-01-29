import wheel from "./assets/wheel.gif";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <div
        className="container d-flex align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="row container d-flex justify-content-center ">
          <div
            className="row col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 d-flex"
            style={{ marginRight: "2.2em" }}
          >
            <h1
              style={{
                color: "#007BFF",
                fontWeight: "bold",
                fontSize: "3rem",
                marginTop: "3rem",
              }}
            >
              Deso Wheel
            </h1>
            <h2 style={{ color: "black" }}>
              Paste the URL of any post on DESO.
              <br /> Get a winner among the lucky <b>Reposter</b> or{" "}
              <b>Liker.</b>
            </h2>
            <div className="d-flex">
              <Link to="/like">
                <button className="button-49">Reposts</button>
              </Link>
              <Link to="/like">
                <button className="button-49 mx-3">Likes</button>
              </Link>
            </div>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-6 col-12 col-sm-12">
            <img style={{ maxWidth: "100%" }} src={wheel} alt="wheel" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
