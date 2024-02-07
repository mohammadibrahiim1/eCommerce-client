/* eslint-disable react/display-name */
// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const usePageTitle = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    setPageTitle(processRouteData(location.pathname));
  }, [location]);
  return pageTitle;
};

// Function to process route data and extract title
export function processRouteData(pathname) {
  // Implement your logic to extract title from pathname (e.g., split by "/")
  return pathname.split("/")[1] || "Home";
}
