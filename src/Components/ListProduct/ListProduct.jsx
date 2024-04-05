/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { BsBagPlusFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ListProduct = ({ product }) => {
  const dispatch = useDispatch();
  const { model, image, price, _id, status, brand, keyFeature } = product;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <div>
      <div>
        <div className="card card-side h-[220px] bg-base-100 shadow-xl mx-auto">
          <figure>
            <img src={image} className="w-[180px] p-12" alt={model} />
          </figure>
          <div className="card-body w-[500px]">
            <div className="flex justify-between items-center ">
              <strong className="text-green-500 capitalize text-xs">
                Stock: {status}
              </strong>
              {brand ? (
                <strong className="text-orange-500 capitalize text-xs">
                  Brand : {brand}
                </strong>
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-between items-center ">
              <h2 className="text-[#10B981] text-lg font-semibold">
                {model.slice(0, 19)}...
              </h2>
              <Link
                to={`/productDetails/${_id} `}
                className="btn btn-xs rounded-sm btn-warning capitalize"
              >
                see details
              </Link>
            </div>
            <p>
              {keyFeature ? (
                keyFeature?.slice(0, 2)?.map((key) => (
                  <>
                    <p className="text-sm font-semibold text-gray-400">{key}</p>
                  </>
                ))
              ) : (
                <span>no details found</span>
              )}
            </p>

            <div className="card-actions font-semibold justify-between items-center mt-1 flex  ">
              <div className=" text-sm text-orange-500">${price}</div>
              <div className="flex justify-between items-center gap-1">
                <div
                  onClick={handleAddToCart}
                  className="cursor-pointer border rounded p-2 text-[#10B981] hover:bg-[#10B981] hover:text-[#FFF] duration-300"
                >
                  <BsBagPlusFill className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
