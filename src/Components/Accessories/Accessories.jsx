/* eslint-disable no-unused-vars */
import React from "react";
import { useGetProductsQuery } from "../../redux/features/api/productsApi/productsApi";
import { useDispatch } from "react-redux";
import { Spinner } from "keep-react";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { FaArrowRightLong, FaCartShopping } from "react-icons/fa6";

const Accessories = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetProductsQuery("");

  const products = data?.data;
  console.log(products);

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

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div>
      <section className="flex justify-center gap-5 mt-[72px]">
        <div>
          <div>
            <div className="flex justify-between items-center gap-1 ">
              <h1 className="text-[#191C1F] font-semibold text-[24px] ">
                Accessories
              </h1>

              <div className="flex justify-center items-center gap-5">
                <h1 className="font-semibold text-sm text-[#191C1F]">
                  All products
                </h1>
                <h1 className="font-semibold text-sm text-[#191C1F]">
                  Smart phones
                </h1>
                <h1 className="font-semibold text-sm text-[#191C1F]">
                  Laptops
                </h1>
                <h1 className="font-semibold text-sm text-[#191C1F]">
                  HeadPhones
                </h1>
                <h1 className="font-semibold text-sm text-[#191C1F]">TV</h1>
                <div className="font-semibold text-sm text-[#191C1F] flex items-center gap-1">
                  <span> Browse All Products</span>
                  <FaArrowRightLong />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 justify-between items-center gap-3 mt-[24px]">
              {products?.slice(10, 18)?.map((product) => (
                <>
                  <div className="card w-[248px] h-[296px] bg-base-100 shadow-xl rounded-none">
                    <img
                      className="w-[216px] h-[188px] mx-auto rounded-sm py-3"
                      src={product.image}
                      alt={product.model}
                    />

                    <div className="px-4 py-1">
                      <p className="font-semibold text-[14px]">
                        If a dog chews shoes whose shoes does he choose?
                      </p>
                      <div className="card-actions font-semibold justify-between items-center mt-2 flex  ">
                        <div className="badge badge-outline text-[#2DA5F3]">
                          ${product?.price}
                        </div>
                        <div
                          onClick={() => handleAddToCart(product)}
                          className="btn btn-sm text-[#2DA5F3] px-3"
                        >
                          <FaCartShopping />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col  gap-[24px] ">
          <div className="bg-[#F3DE6D] flex flex-col justify-center items-center gap-4 h-[375px] w-[312px] ">
            <h2 className="text-[#BE4646] font-semibold text-xs ">
              COMPUTER & ACCESSORIES
            </h2>
            <h1 className="text-[#191C1F] text-[32px] font-semibold ">
              32% Discount
            </h1>
            <h4 className="text-[#475156] font-semibold text-xs">
              For all ellectronics products
            </h4>
            <h4 className="mt-3">
              <span className="text-sm font-semibold me-1">
                Offers ends in:
              </span>
              <span className="bg-white font-semibold text-sm p-2 uppercase">
                ENDS OF Eid-ul-fitre{" "}
              </span>
            </h4>

            <button className="flex items-center gap-2 bg-[#FA8232] text-[#FFFFFF] font-semibold px-3 py-2 my-3">
              <span>Shop now</span>
              <span className="mt-1">
                <FaArrowRightLong />
              </span>
            </button>
          </div>

          <div>
            <div className="bg-[#124261] flex flex-col justify-center items-center gap-4 h-[264px] w-[312px] ">
              <h2 className="text-[#FFF] border-[#FFFFFF1F] p-1 bg-[#FFFFFF1F] font-semibold text-xs ">
                SUMMER SALES
              </h2>
              <h1 className="text-[#FFFFFF] text-[28px] font-semibold ">
                37% DISCOUNT
              </h1>
              <h4 className="text-[#FFF] font-semibold text-[15px] capitalize">
                only for <span className="text-[#EBC80C]">SmartPhone</span>{" "}
                product.
              </h4>

              <button className="flex items-center gap-2 bg-[#2DA5F3] text-[#FFFFFF] font-semibold px-12 py-2 my-3">
                <span>Shop now</span>
                <span className="mt-1">
                  <FaArrowRightLong />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accessories;
