import "./Dashboard.scss";
import Navbar from "../../components/Navbar/Navbar";
import SideNav from "../../components/SideNav/SideNav";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboardContainer">
      <div className="dashNavContainer">
        <Navbar />
      </div>
      <div className="dashboardContentWrapper">
        <div className="sideNavContainer">
          <SideNav />
        </div>
        <div className="dashboardOutlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
