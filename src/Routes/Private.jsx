import React from "react";
import { Route, Redirect } from "react-router-dom";
import useToken from "../Hooks/useToken";

function Private(props) {
  const [token] = useToken();

  if (token) {
    return <Route {...props} />;
  }
  return <Redirect to="/login" />;
}
export default Private;
