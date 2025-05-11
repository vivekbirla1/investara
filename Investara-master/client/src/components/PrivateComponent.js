import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent = () => {
  const auth = localStorage.getItem("user");
  return auth ? (
    <Outlet />
  ) : (
    <>
      {alert("Please signup to view this page")}
      <Navigate to="/signup" />
    </>
  );
};

export default PrivateComponent;
