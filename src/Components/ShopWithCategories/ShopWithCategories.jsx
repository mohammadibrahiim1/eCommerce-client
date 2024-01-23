/* eslint-disable no-unused-vars */
import React from "react";
import { FaShirt } from "react-icons/fa6";
import { FcElectronics } from "react-icons/fc";
import { MdMapsHomeWork } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { FcSportsMode } from "react-icons/fc";

const ShopWithCategories = () => {
  return (
    <div>
      <section>
        <h1 className="text-[#191C1F] text-[24px] font-semibold">
          Shop with Categories
        </h1>

        <div className="grid grid-cols-5 justify-between items-center gap-3">
          <div className="flex flex-col  items-center gap-1 border py-3">
            <FcElectronics className="h-8 w-8" />
            <h6 className="text-[14px] font-semibold text-[#191C1F] ">
              Electronics
            </h6>
          </div>
          <div className="flex flex-col  items-center gap-1 border py-3">
            <FaShirt className="h-8 w-8" />
            <h6 className="text-[ 14px] font-semibold text-[#191C1F] ">
              Fashion
            </h6>
          </div>
          <div className="flex flex-col  items-center gap-1 border py-3">
            <MdMapsHomeWork className="h-8 w-8" />
            <h6 className="text-[ 14px] font-semibold text-[#191C1F] ">
              Home appliances
            </h6>
          </div>
          <div className="flex flex-col  items-center gap-1 border py-3">
            <IoBookSharp className="h-8 w-8" />
            <h6 className="text-[ 14px] font-semibold text-[#191C1F] ">
              Books
            </h6>
          </div>
          <div className="flex flex-col  items-center gap-1 border py-3">
            <FcSportsMode className="h-8 w-8" />
            <h6 className="text-[ 14px] font-semibold text-[#191C1F] ">
              Sports
            </h6>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopWithCategories;
