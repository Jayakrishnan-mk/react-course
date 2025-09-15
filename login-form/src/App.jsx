import { useState } from "react";
import "./App.css";

function App() {
  const [showPassword, setShowPassword] = useState(true);

  function buttonStatus() {
    setShowPassword(showPassword ? false : true);
  }

  return (
    <>
      <p>Hello, welcome to my website</p>
      <div>
        <input type="email" placeholder="Email" />
      </div>
      <div className="passwordInput">
        <input
          type={showPassword ? "password" : "text"}
          placeholder="Password"
        />
        <button className="hide-button" onClick={buttonStatus}>
          {showPassword ? "Show" : "Hide"}
        </button>
      </div>
      <button className="login-button">Login</button>
      <button className="signup-button">Sign up</button>
    </>
  );
}

export default App;
