import "./Login.scss";
import FormComp from "../../components/LoginComp/FormComp/FormComp";
import LogoComp from "../../components/LoginComp/LogoComp/LogoComp";

export default function Login() {
  return (
    <div className="login-wrapper">
      <LogoComp />
      <FormComp />
    </div>
  );
}
