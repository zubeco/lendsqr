import "./FormComp.scss";

export default function FormComp() {
  return (
    <div className="formCompWrapper">
      <div className="formCompContainer">
        <h2 className="">Welcome!</h2>
        <h4>Enter details to login.</h4>
        <form className="loginForm">
          <div>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
          </div>
          <p>Forgot PASSWORD?</p>
          <h3>SHOW</h3>
          <button>LOG IN</button>
        </form>
      </div>
    </div>
  );
}
