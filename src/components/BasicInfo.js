import { useSelector } from "react-redux";

const BasicInfo = () => {
  const state = useSelector((state) => state.info);

  return (
    <>
      {state ? (
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
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a className="dropdown-item" href="/posts">
                My posts
              </a>
            </li>
            <li>
              <a
                onClick={() => localStorage.removeItem("publicKey")}
                className="dropdown-item"
                href="/"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default BasicInfo;
