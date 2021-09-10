import React from "react";

import useToken from "./Hooks/useToken";
import Logo from "./Assets/images/logo.png";
function UnauthenticatedApp() {
  const [setToken] = useToken(true);

  const handleSubmit = evt => {
    evt.preventDefault();

    const { email, password } = evt.target.elements;

    setToken({
      email: email.value.trim(),
      password: password.value.trim(),
    });
  };
  return (
    <div className="login-page">
      <div className="login-wrapper">
        <form className="login-from" onSubmit={handleSubmit}>
          <Logo />
          <h2>Log in to Twitter</h2>

          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Phone number, email address"
              name="email"
              required
            />
          </div>
          <div className="password-wrapper">
            <input type="password" placeholder="Password" name="password" required />
          </div>
          <button>Log In</button>
        </form>
      </div>
    </div>
  );
}
export default UnauthenticatedApp;
