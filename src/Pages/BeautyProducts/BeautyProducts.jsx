/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectProducts,
} from "../../redux/features/products/productSlice";

const BeautyProducts = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(selectProducts);
  console.log(products);

  return (
    <div>
      <h1>Beauty products</h1>
    </div>
  );
};

export default BeautyProducts;
