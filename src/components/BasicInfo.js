import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getInfo } from "../redux/actions/userInfoActions";

const BasicInfo = ({ logout }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.info);
  const user = JSON.parse(localStorage.getItem("identityUsersV2"));
  const public_key = user?.publicKey;
  useEffect(() => {
    dispatch(getInfo({ PublicKey: public_key }));
  }, [public_key, dispatch]);
  // console.log("basicinfo",state)
  return (
    <>
      <div className="dropdown">
        <a
          className="dropdown-toggle text-info text-decoration-none"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          href="/"
          style={{ overFlow: "hidden" }}
        >
          {state?.info?.UserName}{" "}
          <img
            src={state?.info?.ProfilePicture}
            className="rounded-circle"
            alt="Username"
            style={{ width: "32px", height: "32px" }}
          />
        </a>
        <ul
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton1"
          style={{ backgroundColor: "black", width: "100%" }}
        >
          <li>
            <a onClick={logout} className="dropdown-item" href="/" style={{ backgroundColor: "black", width: "100%" }}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BasicInfo;
