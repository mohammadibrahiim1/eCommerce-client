/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { selectProducts } from "../../redux/features/products/productSlice";
import { useSelector } from "react-redux";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { FaList } from "react-icons/fa";
import { CgSmartphoneChip } from "react-icons/cg";
import { SlScreenSmartphone } from "react-icons/sl";
import { MdComputer } from "react-icons/md";
import { FcAutomotive } from "react-icons/fc";

const Electronics = () => {
  const savedProducts = JSON.parse(localStorage.getItem("products"));
  // const { products, loading, error } = useSelector((state) => state.products);
  console.log(savedProducts);

  const handleCategoryFilter = (selectedCategory) => {
    console.log(selectedCategory);
  };

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
        <div className="col-span-1 bg-gray-100 border-rounded">
          <h1 className="uppercase font-semibold border-b p-2">sub category</h1>
          <div className="flex  flex-col justify-between  gap-y-1 ">
            <div
              onClick={() => handleCategoryFilter("smartphones")}
              className="flex items-center font-semibold gap-1 cursor-pointer  p-2"
            >
              <SlScreenSmartphone className="w-5 h-5" />
              <h6 className="hover:text-green-500 duration-300">Smartphones</h6>
            </div>
            <div
              onClick={() => handleCategoryFilter("laptops")}
              className="flex items-center font-semibold gap-1 cursor-pointer p-2"
            >
              <MdComputer className="w-5 h-5" />
              <h6 className="hover:text-green-500 duration-300">Laptops</h6>
            </div>
            <div
              onClick={() => handleCategoryFilter("automotive")}
              className="flex items-center font-semibold gap-1  cursor-pointer p-2"
            >
              <FcAutomotive className="w-5 h-5" />
              <h6 className="hover:text-green-500 duration-300">Automotive</h6>
            </div>
          </div>
        </div>

        <div className="col-span-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400 font-bold normal-case ">
                <span className="text-error"> {savedProducts?.length}</span>{" "}
                products found.
              </p>
            </div>
            <div>
              <div>
                <div className="flex items-center justify-between gap-7 m-1 border px-5 py-1 ">
                  <h1 className="font-semibold text-gray-900 ">View </h1>
                  <div className="flex items-center justify-between gap-3">
                    <TfiLayoutGrid3Alt className="w-4 h-4" />
                    <FaList className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
            {/* <div>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1">
                  Sort by price
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Price: low to high</a>
                  </li>
                  <li>
                    <a>Price : high to low</a>
                  </li>
                </ul>
              </div>
            </div> */}
          </div>
          <div className="grid grid-cols-4 justify-between items-center gap-5 py-2">
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
                    <div className="card w-[310px] h-[430px] rounded-none  bg-[#EEEFF6] shadow-xl">
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
                          {title.slice(0, 20)}
                        </p>
                        <div className="card-actions justify-start">
                          <button className="border  border-gray-900 font-semibold my-3 btn-sm px-5 text-gray-500 hover:text-gray-900 duration-300">
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Electronics;
