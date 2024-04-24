/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { useGetProductsQuery } from "../../redux/features/api/productsApi/productsApi";
import { Spinner } from "keep-react";
import CountDown from "../CountDown/CountDown";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { BsBagPlusFill } from "react-icons/bs";

const BestDeals = () => {
  const dispatch = useDispatch();
  // Set your target date here
  const targetDate = new Date("2024-12-31T23:59:59").getTime();
  const { data, error, isLoading } = useGetProductsQuery("");

  const products = data?.products;
  //   console.log(products);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (isLoading) {
    return (
      <Spinner
        className="flex justify-center items-center mx-auto my-12"
        color="failure"
        size="lg"
      />
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center  py-12 font-semibold text-2xl">
        Something went wrong!
      </div>
    );
  }
  return (
    <div>
      <section className=" max-w-screen-2xl mx-auto mt-[72px]">
        <div className="flex justify-between items-center">
          <h2 className="text-[#00A2C9] font-semibold text-[22px] flex justify-between items-center gap-10">
            <span>Best Deals</span>
            <CountDown targetDate={targetDate}></CountDown>
          </h2>
          <Link
            className="flex items-center gap-2 text-[#2DA5F3] hover:text-[#2c7486] duration-300"
            to={"/store"}
          >
            <span className="font-semibold text-sm capitalize">
              Browse all products
            </span>
            <HiMiniArrowLongRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-6 justify-between items-center gap-2 mt-[20px]">
          {products
            ?.slice(0, 10)
            ?.map(({ _id, price, stock, thumbnail, title }) => (
              <div key={_id}>
                <Link
                  to={`/productDetails/${_id} `}
                  className="card w-[240px] h-[350px] bg-gray-100 rounded-none p-2"
                >
                  <button className="text-start text-sm p-1  font-semibold text-[#10B981]">
                    In stock :
                    <span className="text-orange-500 capitalize">{stock}</span>
                  </button>
                  <div>
                    <img
                      className="w-[219px] h-[190px] mx-auto rounded-sm p-5"
                      src={thumbnail}
                      alt={title}
                    />
                  </div>

                  <div className="mt-[45px]">
                    <h4 className="font-semibold text-[14px] uppercase text-[#10B981] duration-300">
                      {title}
                    </h4>
                    <div className="card-actions font-semibold justify-between items-center flex pt-1 ">
                      <div className=" text-sm text-orange-500">${price}</div>
                      {/* <div className="flex justify-between items-center gap-1">
                <div
                  onClick={handleAddToCart}
                  className="cursor-pointer border rounded p-2 text-[#10B981] hover:bg-[#10B981] hover:text-[#FFF] duration-300"
                >
                  <BsBagPlusFill className="h-4 w-4" />
                </div>
              </div> */}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default BestDeals;
