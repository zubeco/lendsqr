import "./User.scss";
import { FaUserFriends, FaUsers } from "react-icons/fa";
import { TbReportMoney } from "react-icons/tb";
import { GiCoins } from "react-icons/gi";
import UserList from "../../components/UserList/UserList";

export default function User() {
  const style = { color: "white", fontSize: "1.5em" };
  return (
    <div className="userContainer">
      <h3 className="userHeader">Users</h3>
      <div className="userBoxContainer">
        <div className="userBox">
          <div>
            <FaUserFriends style={style} />
          </div>
          <p>Users</p>
          <h4>2,453</h4>
        </div>

        <div className="userBox">
          <div>
            <FaUsers style={style} />
          </div>
          <p>Active Users</p>
          <h4>2,453</h4>
        </div>

        <div className="userBox">
          <div>
            <TbReportMoney style={style} />
          </div>
          <p>Users with Loans</p>
          <h4>12,453</h4>
        </div>

        <div className="userBox">
          <div>
            <GiCoins style={style} />
          </div>
          <p>Users with Savings</p>
          <h4>102,453</h4>
        </div>
      </div>

      <div className="userList">
        <UserList />
      </div>
    </div>
  );
}
