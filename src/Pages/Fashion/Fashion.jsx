/* eslint-disable no-unused-vars */
import React from "react";

const Fashion = () => {
  
  const savedProducts = JSON.parse(localStorage.getItem("products"));
  console.log(savedProducts);

  return <div>Men and Women</div>;
};

export default Fashion;
