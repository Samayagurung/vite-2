import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const SecureRoutes = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const loggedIn = Boolean(isLoggedIn);
  // console.log(loggedIn, typeof loggedIn)
  return <>{loggedIn ? <Outlet /> : <Navigate to="/" />}</>;
};

export default SecureRoutes;
