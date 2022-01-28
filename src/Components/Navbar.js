import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { handledarkMode } from "../redux/actions/darkModeActions";
import DesoPrice from "./DesoPrice";
const Navbar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.darkMode);
  const { isdarkMode } = mode;

  const switchDarkMode = () => {
    isdarkMode
      ? dispatch(handledarkMode(false))
      : dispatch(handledarkMode(true));
  };
  useEffect(() => {
    document.body.style.backgroundColor = isdarkMode ? "#292c35" : "#fff";
  }, [isdarkMode]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="/"
            style={{ fontWeight: "bold", color: "rebeccapurple" }}
          >
            DESOWHEEL
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a className="nav-link active" href="/">
                Home
              </a>
              <a className="nav-link" href="/">
                Features
              </a>
              <a className="nav-link" href="/">
                Pricing
              </a>
              <a className="nav-link" target="_blank" rel="noreferrer" href="https://www.livecoinwatch.com/price/DecentralizedSocial-DESO">
                <DesoPrice/>
              </a>
              
              <div id="darkmode">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="checkbox"
                  onChange={switchDarkMode}
                  checked={isdarkMode}
                />
                <label htmlFor="checkbox" className="label">
                  <BsMoonStarsFill color="white" />
                  <BsFillSunFill color="yellow" />
                  <div className="ball"></div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
