import "./LogoComp.scss";
import logo from "../../../images/logo.png";
import loginbg from "../../../images/loginbgimage.png";

export default function LogoComp() {
  return (
    <div className="logoCompWrapper">
      <div className="logCompContainer">
        <div className="logoContainer">
          <img src={logo} alt="logo" />
        </div>

        <div className="loginBgImage">
          <img src={loginbg} alt="loginbg" />
        </div>
      </div>
    </div>
  );
}
