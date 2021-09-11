import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import useToken from "../Hooks/useToken";

function Public(props) {
  const [token] = useToken();

  const { pathname } = useLocation();

  if (token && pathname === "/login") {
    return <Redirect to="/" />;
  }

  return <Route {...props} />;
}
export default Public;
