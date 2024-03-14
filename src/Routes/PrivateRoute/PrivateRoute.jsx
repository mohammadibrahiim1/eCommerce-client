/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useSelector((state) => state?.auth);
  console.log(user);

  if (isLoading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  if (!user && !isLoading) {
    return <Navigate to={"/login"} replace />;
  } else {
    return children;
  }
};

export default PrivateRoute;
