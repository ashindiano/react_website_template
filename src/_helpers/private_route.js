import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./auth_provider";

function PrivateRoute({ component: Component, ...rest }) {
  const [isAuthenticated] = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;
