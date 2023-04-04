import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
  const isLoggedIn = localStorage.getItem("username") && localStorage.getItem("password");
  console.log(rest);
  return (
    <Route
      {...rest}
      render={() => {
        return isLoggedIn ? children : <Redirect to="/login" />;
      }}
    />
  );
}
