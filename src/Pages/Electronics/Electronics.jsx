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
          <div className=" px-12 py-36 bg-cover bg-no-repeat bg-center bg-[url('https://i.ibb.co/YbQQz1K/ki-chai-electronics-banner-img-1.png')] ">
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
            <button className="border  border-gray-900 font-semibold my-3 btn-sm px-5 hover:text-gray-100 duration-300">
              Buy Now
            </button>

            <h5 className="text-sm font-semibold uppercase text-[#000]">
              *Bulk order available
            </h5>
          </div>
        </section>
      </div>

      <section className="max-w-screen-2xl mx-auto grid grid-cols-6 items-start gap-1">
        <div className="col-span-1">sub category</div>

        <div className="col-span-5 grid grid-cols-4 justify-between items-center gap-5 my-12 ">
          {savedProducts?.map(
            ({
              _id,
              brand,
              category,
              description,
              thumbnail,
              sub_category,
              price,
              rating,
              stock,
              discount_percentage,
              title,
              images,
            }) => (
              <>
                <div key={_id}>
                  <div className="card w-[310px] h-[430px] rounded-none  bg-gray-200 shadow-xl">
                    <figure>
                      <img
                        src={thumbnail}
                        alt="Shoes"
                        className=" w-[330px] h-[280px] p-5"
                      />
                    </figure>
                    <div className="px-5 pt-8">
                      <h2 className="font-bold uppercase text-sm text-gray-700">
                        {brand}
                      </h2>
                      <p className="uppercase font-semibold text-lg">
                        {title.slice(0, 25)}
                      </p>
                      {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default Electronics;
