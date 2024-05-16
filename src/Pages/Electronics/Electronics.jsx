/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { FaList } from "react-icons/fa";
// import { CgSmartphoneChip } from "react-icons/cg";
import { SlScreenSmartphone } from "react-icons/sl";
import { MdComputer } from "react-icons/md";
import { FcAutomotive } from "react-icons/fc";
import { IoInformationCircleSharp } from "react-icons/io5";
import { BsSortDown, BsSortUp } from "react-icons/bs";
import { useGetProductsQuery } from "../../redux/features/api/productsApi/productsApi";

const Electronics = () => {
  const dispatch = useDispatch();

  // state declare
  const [toggle, setToggle] = useState("grid");
  const [sub_category, setSubcategory] = useState("");
  console.log(sub_category);

  const { data } = useGetProductsQuery({
    category: "electronics",
    sub_category,
  });
  const electronics = data;
  console.log(data);
  // const { data: productsBySubCategory } =
  //   useGetProductsBySubCategoryQuery(selectedSubCategory);
  //  const productsBySubCategory = data?.data;
  // console.log(productsBySubCategory);

  const handleBrandFilter = (selectedBrand) => {
    console.log(selectedBrand);
  };

  return (
    <div>
      <div className="">
        <section className="">
          <div className="px-12 py-32 bg-cover bg-no-repeat bg-center bg-[url('https://i.ibb.co/YbQQz1K/ki-chai-electronics-banner-img-1.png')] ">
            <div className="max-w-screen-2xl mx-auto">
              <h5 className="font-semibold text-lg text-[#000]">GERMNIL</h5>
              <h1 className="font-bold uppercase  text-2xl font-sans">
                Hand sanitizer 100ml(Spray)
              </h1>

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
          </div>
        </section>
      </div>

      <section className="max-w-screen-2xl mx-auto grid grid-cols-6 items-start gap-1">
        <div className="col-span-1 border-s border-b">
          <div className="border-b p-3 text-green-800 text-lg font-semibold ">
            Filters
          </div>

          <div>
            <div className="border-b p-3 text-green-800 text-sm font-semibold text-center ">
              Category
            </div>
            <div className="flex flex-col justify-between  gap-y-1 ">
              <div
                onClick={() => setSubcategory("smartphones")}
                className="flex items-center font-semibold gap-1 cursor-pointer  p-2"
              >
                <SlScreenSmartphone className="w-5 h-5" />
                <h6 className="hover:text-green-500 duration-300">
                  Smartphones
                </h6>
              </div>
              <div
                onClick={() => setSubcategory("laptops")}
                className="flex items-center font-semibold gap-1 cursor-pointer p-2"
              >
                <MdComputer className="w-5 h-5" />
                <h6 className="hover:text-green-500 duration-300">Laptops</h6>
              </div>
              <div
                onClick={() => setSubcategory("automotive")}
                className="flex items-center font-semibold gap-1  cursor-pointer p-2"
              >
                <FcAutomotive className="w-5 h-5" />
                <h6 className="hover:text-green-500 duration-300">
                  Automotive
                </h6>
              </div>
            </div>
          </div>

          <div className="border-t border-b p-3 text-green-800 text-sm font-semibold text-center ">
            Brand
          </div>
          <div className="flex  flex-col justify-between  gap-y-1 ">
            <div
              onClick={() => handleBrandFilter("Apple")}
              className="flex items-center font-semibold gap-1 cursor-pointer  p-2"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-xs rounded-none"
              />
              {/* <SlScreenSmartphone className="w-5 h-5" /> */}
              <h6 className="hover:text-green-500 duration-300">Apple</h6>
            </div>
            <div
              onClick={() => handleBrandFilter("Samsung")}
              className="flex items-center font-semibold gap-1 cursor-pointer p-2"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-xs rounded-none"
              />
              <h6 className="hover:text-green-500 duration-300">Samsung</h6>
            </div>
            <div
              onClick={() => handleBrandFilter("OPPO")}
              className="flex items-center font-semibold gap-1  cursor-pointer p-2"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-xs rounded-none"
              />
              <h6 className="hover:text-green-500 duration-300">Oppo</h6>
            </div>
            <div
              onClick={() => handleBrandFilter("Huawei")}
              className="flex items-center font-semibold gap-1  cursor-pointer p-2"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-xs rounded-none"
              />
              <h6 className="hover:text-green-500 duration-300">Huawei</h6>
            </div>
            <div
              onClick={() => handleBrandFilter("Microsoft Surface")}
              className="flex items-center font-semibold gap-1  cursor-pointer p-2"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-xs rounded-none"
              />
              <h6 className="hover:text-green-500 duration-300"> Microsoft</h6>
            </div>
            <div
              onClick={() => handleBrandFilter("Infinix")}
              className="flex items-center font-semibold gap-1  cursor-pointer p-2"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-xs rounded-none"
              />
              <h6 className="hover:text-green-500 duration-300">Microsoft</h6>
            </div>
            <div
              onClick={() => handleBrandFilter("HP Pavilion")}
              className="flex items-center font-semibold gap-1  cursor-pointer p-2"
            >
              <input
                type="checkbox"
                className="checkbox checkbox-xs rounded-none"
              />
              <h6 className="hover:text-green-500 duration-300">Microsoft</h6>
            </div>
          </div>
        </div>

        <div className="col-span-5 border-s">
          <div className="flex items-center justify-between border-b p-3 text-green-800 text-lg  ">
            <div>
              <div className="text-xs text-[#000] font-bold uppercase ">
                Showing{" "}
                {/* <span className="text-[#095256]">{electronics?.length} </span> */}
                results for <span className="text-[#095256]">electronics </span>{" "}
                products
              </div>
            </div>

            <div className="flex items-center justify-between gap-7  border px-5 py-1  ">
              <h1 className="font-semibold text-gray-900 text-sm ">Sort </h1>
              <div className="flex items-center justify-between gap-3">
                <BsSortDown
                  // onClick={() => handleSort("low")}
                  className="w-5 h-5 cursor-pointer"
                />
                <BsSortUp
                  // onClick={() => handleSort("high")}
                  className="w-5 h-5 cursor-pointer"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between gap-7  border px-5 py-1  ">
                <h1 className="font-semibold text-gray-900 text-sm ">View </h1>
                <div className="flex items-center justify-between gap-3">
                  <TfiLayoutGrid3Alt
                    onClick={() => setToggle("grid")}
                    className="w-4 h-4 cursor-pointer"
                  />
                  <FaList
                    onClick={() => setToggle("list")}
                    className="w-4 h-4 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {toggle === "grid" ? (
            <div className="grid grid-cols-4 justify-between items-center gap-5 m-3">
              {electronics?.map(
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
                      <div className="grid__item card col-lg-4 col-md-6 col-sm-6 col-12 product-card border">
                        <figure>
                          <img
                            src={thumbnail}
                            alt="Shoes"
                            className=" w-[330px] h-[280px] p-5"
                          />
                        </figure>
                        <div className="px-5">
                          <div className="flex justify-between items-center gap-5">
                            <h2 className="font-bold capitalize  text-xs text-[#095256]">
                              rating: {rating}
                            </h2>
                            <h2 className="font-bold uppercase text-xs text-[#095256]">
                              {brand}
                            </h2>
                          </div>
                          <div className="card-title text-[#095256] mt-2">
                            <span>{title.slice(0, 23)}</span>
                            <span>
                              <div
                                className="tooltip  tooltip-right cursor-pointer capitalize"
                                data-tip="view details"
                              >
                                <IoInformationCircleSharp />
                              </div>
                            </span>
                          </div>
                          <div className="uppercase font-semibold text-lg text-[#095256] py-1">
                            {title.slice(0, 24)}
                          </div>
                          <div className="uppercase font-semibold text-lg text-[#095256]">
                            ${price}
                          </div>
                          <div className="card-actions justify-start">
                            <button className="border  border-[#095256] font-semibold my-3 btn-sm px-10 text-[#095256] hover:text-[#FFFFFF] hover:bg-[#095256]  duration-500">
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
          ) : (
            <div className="grid grid-cols-2 justify-between items-center gap-5 m-3">
              {electronics?.map(
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
                      <div className="card card-side  grid__item  col-lg-4 col-md-6 col-sm-6 col-12 product-card border">
                        <figure>
                          <img
                            src={thumbnail}
                            alt="Movie"
                            className=" w-[280px] h-[230px] p-7"
                          />
                        </figure>
                        <div className="card-body">
                          <div className="flex justify-between items-center gap-5">
                            <h2 className="font-bold capitalize  text-xs text-[#095256]">
                              rating: {rating}
                            </h2>
                            <h2 className="font-bold uppercase text-xs text-[#095256]">
                              {brand}
                            </h2>
                          </div>
                          <div className="card-title text-[#095256]">
                            <span>{title.slice(0, 23)}</span>
                            <span>
                              <div
                                className="tooltip  tooltip-right cursor-pointer capitalize"
                                data-tip="view details"
                              >
                                <IoInformationCircleSharp />
                              </div>
                            </span>
                          </div>
                          <p className="font-semibold text-[#095256] text-sm btn bg-[#0952560e] btn-xs">
                            ${price}
                          </p>
                          <div className="card-actions  flex items-center justify-between gap-5">
                            {" "}
                            <span className="capitalize font-semibold text-[#095256]">
                              in stock : {stock}
                            </span>
                            <button className="border  border-[#095256] font-semibold my-3 btn-sm px-10 text-[#095256] hover:text-[#FFFFFF] hover:bg-[#095256]  duration-500">
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
          )}
        </div>
      </section>
    </div>
  );
};

export default Electronics;
