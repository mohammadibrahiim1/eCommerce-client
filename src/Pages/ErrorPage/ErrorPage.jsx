/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      {" "}
      <div style={{ textAlign: "center", marginTop: "200px" }}>
        <h1 className="font-semibold text-error text-lg">
          Oops! Something went wrong!
        </h1>
        <p>Sorry, we could not find the page you are looking for.</p>
        <p className="text-2xl font-semibold text-error my-3">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link className="btn btn-info font-semibold capitalize" to="/">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
