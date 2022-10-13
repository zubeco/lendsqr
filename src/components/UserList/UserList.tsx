import { useEffect, useState } from "react";
import "./UserList.scss";
import { BiFilter, BiDotsVerticalRounded } from "react-icons/bi";
import axios from "axios";
import { IUser } from "../../models/user.model";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import ReactPaginate from "react-paginate";

let GET_ALL_USER =
  "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

export default function UserList() {
  const [user, setUser] = useState<IUser[]>();
  const router = useNavigate();
  const [loading, setLoading] = useState(false);
  const usersPerPage = 10;
  const [pageNumber, setPageNumber] = useState(0);
  const pagesVisited = pageNumber * usersPerPage;

  useEffect(() => {
    setLoading(true);
    axios
      .get(GET_ALL_USER)
      .then((response) => {
        const res: IUser[] = response.data;
        setUser(res);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const displayUser = user
    ?.slice(pagesVisited, pagesVisited + usersPerPage)
    .map((each, index) => {
      return (
        <div
          className="userListContent"
          key={index}
          onClick={() => router(`/user/${each.id}`)}
        >
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
      );
    });

  let count: any = user?.length!;

  const pageCount = Math.ceil(count / usersPerPage);
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  if (loading) return <Loading />;
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
      <div>{displayUser}</div>

      <div className="paginateContainer">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
}
