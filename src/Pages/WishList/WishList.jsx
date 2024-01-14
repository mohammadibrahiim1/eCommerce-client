/* eslint-disable no-unused-vars */
import { Avatar, Badge, Button, Popover, Table } from "keep-react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Cube,
  DotsThreeOutline,
  Pencil,
  ShoppingCart,
  Trash,
  X,
} from "phosphor-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/features/cart/cartSlice";
import { removeFromWishList } from "../../redux/features/wishList/wishListSlice";
import { Link } from "react-router-dom";

const WishList = () => {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList);
  console.log(wishList);
  const [disabled, setDisabled] = useState(false);

  const handleAddToCart = (item) => {
    setDisabled(true);
    dispatch(addToCart(item));
  };

  const handleRemoveFromWishList = (item) => {
    console.log("wishlist");
    dispatch(removeFromWishList(item));
  };
  return (
    <div>
      <div className="flex justify-between items-center mt-12 ">
        <h2 className="text-xl font-semibold leading-tight text-[#1B6392] mb-3">
          WishList
        </h2>
        <h2 className="text-xl font-semibold leading-tight text-[#1B6392] mb-3">
          Total-items : {wishList.length}
        </h2>
      </div>
      <hr />
      <div className="grid grid-cols-12 gap-12 pt-10">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8  overflow-x-auto col-span-12">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-[#2DA5F3] uppercase tracking-wider">
                    Products
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-[#2DA5F3] uppercase tracking-wider">
                    Price
                  </th>

                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-[#2DA5F3] uppercase tracking-wider">
                    stock status
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-[#2DA5F3] uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>

              {wishList?.map((item) => (
                <>
                  <tbody>
                    <tr>
                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-16 h-16">
                            <img
                              className="w-full h-full rounded"
                              src={item?.image}
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap font-semibold capitalize">
                              {item?.model}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 whitespace-no-wrap font-semibold text-md">
                          ${item?.price}
                        </p>
                      </td>

                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-red-100 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">{item?.status}</span>
                        </span>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm flex items-center gap-3">
                        <Button
                          onClick={() => handleAddToCart(item)}
                          disabled={disabled}
                          size="xs"
                          type="outlineGray"
                          color={"error"}
                        >
                          <span className="pr-2 ">
                            <ShoppingCart size={18} />
                          </span>
                          Add To Cart
                        </Button>
                        <span className="relative inline-block p-2  font-semibold text-red-900 leading-tight cursor-pointer">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-red-400 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">
                            <X onClick={() => handleRemoveFromWishList(item)} />
                          </span>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </>
              ))}
            </table>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between ">
        <Link to={"/shop"}>
          <Button className="py-2 w-50 h-16 px-6 mb-4 mt-6 text-sky-700 shadow-lg before:block before:-left-1 before:-top-1 before:bg-sky-700 before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-sky-700 after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block">
            Return to shop
          </Button>
        </Link>
        <Link to="/cart">
          <Button
            size={"xs"}
            className="py-2   w-40 h-16 px-6 mb-4 mt-6 text-sky-700 shadow-lg before:block before:-left-1 before:-top-1 before:bg-sky-700 before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-sky-700 after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative "
          >
            <ShoppingCart size={19} color="#444" />
            <span>Cart</span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WishList;
