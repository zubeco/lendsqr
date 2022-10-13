import "./Navbar.scss";
import logo from "../../images/logo.png";
import { FiSearch } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navLeft">
        <Link to="/">
          <div className="navlogo">
            <img src={logo} alt="logo" />
          </div>
        </Link>

        <div className="search">
          <input type="text" placeholder="Search for anything" />
          <button>
            <FiSearch className="search-icon" />
          </button>
        </div>
      </div>

      <div className="navRight">
        <p>Docs</p>

        <div className="navRightInner">
          <BsBell className="bell-icon" />
          <img
            src="https://img.freepik.com/premium-vector/man-face-design-logo-premium_96853-366.jpg"
            alt=""
          />
          <p>Adedeji</p>
          <IoMdArrowDropdown />
        </div>
      </div>
    </div>
  );
}
