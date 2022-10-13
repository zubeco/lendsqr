import PropagateLoader from "react-spinners/PropagateLoader";
import "./Loading.scss";

export default function Loading() {
  return (
    <div className="loadingContainer">
      <PropagateLoader color={"#0047CC"} size={20} />
    </div>
  );
}
