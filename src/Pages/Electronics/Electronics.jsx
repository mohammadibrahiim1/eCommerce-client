/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { selectProducts } from "../../redux/features/products/productSlice";
import { useSelector } from "react-redux";

const Electronics = () => {
  const savedProducts = JSON.parse(localStorage.getItem("products"));
  // const { products, loading, error } = useSelector((state) => state.products);
  console.log(savedProducts);

  return (
    <div>
      <div className="bg-[#A1A4AD]">
        <section className="max-w-screen-2xl mx-auto ">
          <div className=" p-12 bg-cover bg-no-repeat bg-center bg-[url('https://i.ibb.co/YbQQz1K/ki-chai-electronics-banner-img-1.png')] ">
            <div>
              <h5 className="font-semibold text-lg text-[#000]">GERMNIL</h5>
              <h1 className="font-bold uppercase  text-2xl font-sans">
                Hand sanitizer 100ml(Spray)
              </h1>
            </div>

            <div className="mt-3">
              <h1 className="capitalize font-semibold text-sm">
                product detail :
              </h1>
              <h4 className="font-semibold text-xs text-gray-900">
                ETHANOL 80%, HYDROGEN PEROXIDE, GLYCERIN
              </h4>
            </div>
            <button className="border px-12 py-2 border-gray-900 font-semibold my-3">
              Buy Now
            </button>

            <h5 className="text-sm font-semibold uppercase text-[#000] py-1">
              {" "}
              *Bulk order available
            </h5>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Electronics;
