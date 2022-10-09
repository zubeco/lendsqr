import "./SideNav.scss";
import { FaBriefcase, FaHome, FaUserFriends, FaUsers } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

export default function SideNav() {
  const decor = {
    textDecoration: "none",
  };
  return (
    <div>
      <div className="flex1Container">
        <div className="flex1">
          <FaBriefcase className="sideNavIcons" />
          <p>Switch Organization</p>
          <IoIosArrowDown className="sideNavIcons" />
        </div>

        <div className="flex1">
          <FaHome className="sideNavIcons" />
          <p>Dashboard</p>
          <div className="hide"></div>
        </div>
      </div>

      <div>
        <h2 className="sideBarHeader">CUSTOMERS</h2>
        <Link to="/dashboard/user" style={decor}>
          <div className="flex2Container">
            <div className="flex2Clicked">
              <FaUserFriends className="sideNavIcons" />
              <p>Users</p>
            </div>
          </div>
        </Link>
        <div className="flex2Container">
          <div className="flex2">
            <FaUsers className="sideNavIcons" />
            <p>Guarantors</p>
          </div>
        </div>
      </div>
    </div>
  );
}
