import "./UserDetails.scss";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IUser } from "../../models/user.model";
import axios from "axios";
import Loading from "../../components/Loading/Loading";

export default function UserDetails() {
  let { id } = useParams();
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState(false);

  let USER_DATA = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`;

  useEffect(() => {
    setLoading(true);
    axios
      .get(USER_DATA)
      .then((response) => {
        const res: IUser = response.data;
        setUser(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [USER_DATA]);

  if (loading) return <Loading />;
  return (
    <div className="userContainer">
      <Link to="/user">
        <div className="userDetailsArrow">
          <HiOutlineArrowNarrowLeft className="userArrow" />
          <p>Back to Users</p>
        </div>
      </Link>

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
            <img src={user?.profile?.avatar} alt="avatar" />
          </div>
          <div className="userDetailInner1">
            <h2>
              {user?.profile?.firstName} {user?.profile?.lastName}
            </h2>
            <h3>LSQFf587g90</h3>
          </div>

          <div className="userDetailInner2">
            <h2>User’s Tier</h2>
            <h3>LSQFf587g90</h3>
          </div>

          <div className="userDetailInner3">
            <h2>₦{user?.accountBalance}</h2>
            <h3>{user?.accountNumber}/Providus Bank</h3>
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
            <div className="userData">
              <h1>full Name</h1>
              <p>
                {user?.profile?.firstName} {user?.profile?.lastName}
              </p>
            </div>
            <div className="userData">
              <h1>Phone Number</h1>
              <p>{user?.profile?.phoneNumber}</p>
            </div>
            <div className="userData">
              <h1>Email Address</h1>
              <p>{user?.email}</p>
            </div>
            <div className="userData">
              <h1>Bvn</h1>
              <p>{user?.profile?.bvn}</p>
            </div>
            <div className="userData">
              <h1>Gender</h1>
              <p>{user?.profile?.gender}</p>
            </div>
            <div className="userData">
              <h1>Marital status</h1>
              <p>Grace Effiom</p>
            </div>
            <div className="userData">
              <h1>Children</h1>
              <p>Grace Effiom</p>
            </div>
            <div className="userData">
              <h1>Type of residence</h1>
              <p>Grace Effiom</p>
            </div>
          </div>
        </div>

        <div className="userInfo1">
          <h3>Education and Employment</h3>
          <div className="userGrid1">
            <div className="userData">
              <h1>level of education</h1>
              <p>{user?.education?.level}</p>
            </div>
            <div className="userData">
              <h1>employment status</h1>
              <p>{user?.education?.employmentStatus}</p>
            </div>
            <div className="userData">
              <h1>sector of employment</h1>
              <p>{user?.education?.sector}</p>
            </div>
            <div className="userData">
              <h1>Duration of employment</h1>
              <p>{user?.education?.duration}</p>
            </div>
            <div className="userData">
              <h1>office email</h1>
              <p>{user?.education?.officeEmail}</p>
            </div>
            <div className="userData">
              <h1>Monthly income</h1>
              <p>
                ₦
                {user?.education?.monthlyIncome &&
                  user?.education?.monthlyIncome[0]}
                - ₦
                {user?.education?.monthlyIncome &&
                  user?.education?.monthlyIncome[1]}
              </p>
            </div>
            <div className="userData">
              <h1>loan repayment</h1>
              <p>{user?.education?.loanRepayment}</p>
            </div>
          </div>
        </div>

        <div className="userInfo1">
          <h3>Socials</h3>
          <div className="userGrid1">
            <div className="userData">
              <h1>Twitter</h1>
              <p>{user?.socials?.twitter}</p>
            </div>
            <div className="userData">
              <h1>Facebook</h1>
              <p>{user?.socials?.facebook}</p>
            </div>
            <div className="userData">
              <h1>Instagram</h1>
              <p>{user?.socials?.instagram}</p>
            </div>
          </div>
        </div>

        <div className="userInfo1">
          <h3>Guarantor</h3>
          <div className="userGrid1">
            <div className="userData">
              <h1>full Name</h1>
              <p>
                {user?.guarantor?.firstName} {user?.guarantor?.lastName}
              </p>
            </div>
            <div className="userData">
              <h1>Phone Number</h1>
              <p>{user?.guarantor?.phoneNumber}</p>
            </div>
            <div className="userData">
              <h1>Address</h1>
              <p>{user?.guarantor?.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
