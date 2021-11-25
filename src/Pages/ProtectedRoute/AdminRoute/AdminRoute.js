import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  // if (isLoading) {
  //   return (
  //     <div
  //       style={{ minWidth: "100vh" }}
  //       className="d-flex justify-content-center align-items-center"
  //     >
  //       {" "}
  //       <Spinner animation="grow" variant="warning" />
  //     </div>
  //   );
  // }
  if (!admin) {
    return "Data Loading Please wait.. ";
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
