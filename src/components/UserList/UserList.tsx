import { useEffect, useState } from "react";
import "./UserList.scss";
import { BiFilter, BiDotsVerticalRounded } from "react-icons/bi";
import axios from "axios";
import { IUser } from "../../models/user.model";
import { Link } from "react-router-dom";

let GET_ALL_USER =
  "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

export default function UserList() {
  const [user, setUser] = useState<IUser[]>();

  useEffect(() => {
    axios
      .get(GET_ALL_USER)
      .then((response) => {
        const res: IUser[] = response.data;
        console.log(res);
        setUser(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="userListContainer">
      <div className="userListMenu">
        <div className="userListHead">
          <p>organization</p>
          <BiFilter className="userListIcon" />
        </div>
        <div className="userListHead">
          <p>username</p>
          <BiFilter className="userListIcon" />
        </div>
        <div className="userListHead">
          <p>email</p>
          <BiFilter className="userListIcon" />
        </div>
        <div className="userListHead">
          <p>Phone number</p>
          <BiFilter className="userListIcon" />
        </div>
        <div className="userListHead">
          <p>date joined</p>
          <BiFilter className="userListIcon" />
        </div>
        <div className="userListHead">
          <p>Status</p>
          <BiFilter className="userListIcon" />
        </div>
        <div className="userListHead">
          <p>Status</p>
          <BiFilter className="userListIcon" />
        </div>
      </div>
      <>
        <Link to="/dashboard/user/">
          {user?.map((each, index) => (
            <div className="userListContent" key={index}>
              <p>{each?.orgName?.slice(0, 6)}</p>
              <p>{each?.userName?.slice(0, 9)}</p>
              <p>{each?.email?.slice(0, 18)}</p>
              <p>{each?.phoneNumber?.slice(0, 10)}</p>
              <p>{each?.createdAt?.slice(0, 6)}</p>
              <p className="active">
                <span>Inactive</span>
              </p>
              <div>
                <BiDotsVerticalRounded />
              </div>
            </div>
          ))}
        </Link>
      </>
    </div>
  );
}
