import React from "react";
import TwitterLogo from "../../Assets/images/logo.png";
import "./Login.css";
import useToken from "../../Hooks/useToken";
function Login() {
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
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login">
          <div>
            <img src={TwitterLogo} alt="twitter logo" width="50" height="41" />
          </div>
          <h2 className="login-heading">Log in to Twitter</h2>

          <div>
            <input
              className="email-input"
              type="text"
              placeholder="Phone number, email address"
              defaultValue="muhammadazizravshanbekov@gmail.com"
              name="email"
            />
          </div>
          <div>
            <input
              className="password-input"
              type="password"
              placeholder="Password"
              defaultValue="12345678"
              name="password"
            />
          </div>

          <button className="login-btn">Log In</button>

          <div className="link-wrapper">
            <a className="login-forgot-password" href="#">
              Forgot password?
            </a>
            <a className="login__sign-up" href="#">
              Sign up to Twitter
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Login;
