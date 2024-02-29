/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { setUser } from "../../redux/features/api/auth/authSlice";

const PrivateRoute = ({ children }) => {
  const dispatch = useDispatch();
  const pathName = useLocation();

  const { email, isLoading } = useSelector((state) => state);

  useEffect(() => {
    onAuthStateChanged(getAuth, (user) => {
      if (user) {
        dispatch(
          setUser({
            name: user.displayName,
            email: user.email,
          })
        );
      }
    });
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoading && !email) {
    return <Navigate to={"/login"} state={{ path: pathName }}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
