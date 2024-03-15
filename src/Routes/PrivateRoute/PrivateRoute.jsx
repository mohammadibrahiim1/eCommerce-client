/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
// import Loading from "../components/reusable/Loading";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const {
    isLoading,
    user: { email },
  } = useSelector((state) => state.auth);
  // const isLoading = false;
  // const email = "test@gmail.com";

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!isLoading && !email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
