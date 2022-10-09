import "./UserDetails.scss";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { RiUserLine } from "react-icons/ri";

export default function UserDetails() {
  return (
    <div className="userContainer">
      <div className="userDetailsArrow">
        <HiOutlineArrowNarrowLeft className="userArrow" />
        <p>Back to Users</p>
      </div>
      <div className="userDetailsHead">
        <h2>User Details</h2>
        <div className="activerUser">
          <h3>Blacklist User</h3>
          <h3>Activate User</h3>
        </div>
      </div>

      <div className="userProfile">
        <div className="userDetail1">
          <div className="profileLogo">
            <RiUserLine />
          </div>
          <div className="userDetailInner1">
            <h2>Grace Effiom</h2>
            <h3>LSQFf587g90</h3>
          </div>

          <div className="userDetailInner2">
            <h2>User’s Tier</h2>
            <h3>LSQFf587g90</h3>
          </div>

          <div className="userDetailInner3">
            <h2>₦200,000.00</h2>
            <h3>9912345678/Providus Bank</h3>
          </div>
        </div>

        <div className="userApps">
          <p>General Details</p>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>App and System</p>
        </div>
      </div>

      <div className="userInfo">
        <div className="userInfo1">
          <h3>Personal Information</h3>
          <div className="userGrid">
            <div>
              <h1>full Name</h1>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h1>full Name</h1>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h1>full Name</h1>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h1>full Name</h1>
              <p>Grace Effiom</p>
            </div>
            <div>
              <h1>full Name</h1>
              <p>Grace Effiom</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
