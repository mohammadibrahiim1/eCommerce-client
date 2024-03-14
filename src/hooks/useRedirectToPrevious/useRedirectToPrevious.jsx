/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useRedirectToPrevious = () => {
  const [previousPath, setPreviousPath] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setPreviousPath(location.pathname);
  }, [location]);

  const redirectToPrevious = () => {
    if (previousPath) {
      window.location.href = previousPath;
    } else {
      window.location.href = "/";
    }
  };
  return redirectToPrevious;
};

export default useRedirectToPrevious;
