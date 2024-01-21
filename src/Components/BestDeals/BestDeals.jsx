/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { useGetProductsQuery } from "../../redux/features/api/productsApi/productsApi";
import { Spinner } from "keep-react";

const BestDeals = () => {
  const { data, error, isLoading } = useGetProductsQuery("");

  const products = data?.data;
  //   console.log(products);

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
      <section>
        <div className="flex justify-between items-center ">
          <h2 className="text-[#191C1F] font-semibold text-[22px]">
            Best Deals
          </h2>
          <Link className="flex items-center gap-2 text-[#2DA5F3]" to={"/shop"}>
            <span className="font-semibold text-sm capitalize">
              Browse all products
            </span>
            <HiMiniArrowLongRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-5 justify-between items-center gap-2">
          {products?.slice(0, 8)?.map((product) => (
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
                  <div className="card-actions justify-start mt-2">
                    <div className="badge badge-outline text-[#2DA5F3]">
                      ${product?.price}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BestDeals;
