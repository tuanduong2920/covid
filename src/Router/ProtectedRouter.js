import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRouter = ({
  isAuthenticated: isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/quan-ly" />
      )
    }
  />
);

export default ProtectedRouter;
