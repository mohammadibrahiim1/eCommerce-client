/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { selectProducts } from "../../redux/features/products/productSlice";
import { useSelector } from "react-redux";

const Electronics = () => {
  const { products, loading, error } = useSelector(selectProducts);
  console.log(products);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <div>
      <section>
        <h4>electronics</h4>
      </section>
    </div>
  );
};

export default Electronics;
