import React from "react";
import { Navlink, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
function AuthenticatedApp() {
  return (
    <div className="auth-wrapper">
      <Header />
    </div>
  );
}
export default AuthenticatedApp;
