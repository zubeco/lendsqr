import "./Navbar.scss";
import logo from "../../images/logo.png";
// import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navlogo">
        <img src={logo} alt="logo" />
      </div>

      <div className="search">
        <input type="text" placeholder="Search for anything" />
        <button>
          {/* <FiSearch /> */}
        </button>
      </div>
    </div>
  );
}






