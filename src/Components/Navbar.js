import "../App.css";
import DesoPrice from "./DesoPrice";
const Navbar = () => {
  return (
    <div style={{ position: "sticky", top: "0", zIndex: "1000" }}>
      <nav>
        <div className="nav-links" id="navLinks">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/">ROADMAP</a>
            </li>
            <li>
              <a href="/">DESO PROFILE</a>
            </li>
            <li>
              <a
                href="https://www.coingecko.com/tr/coins/bitclout/usd"
                target="_blank"
                rel="noreferrer"
              >
                <DesoPrice />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
