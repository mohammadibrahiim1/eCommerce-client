/* eslint-disable no-unused-vars */
import React from "react";
import { FaShirt } from "react-icons/fa6";
import { FcElectronics } from "react-icons/fc";
import { MdMapsHomeWork } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";
import { FcSportsMode } from "react-icons/fc";
import { Link } from "react-router-dom";

const ShopWithCategories = () => {
  return (
    <div>
      <section className="mt-[72px]">
        <h1 className="text-[#00A2C9] text-[24px] font-semibold text-center">
          Shop with Categories
        </h1>

        <div className="grid grid-cols-5 justify-between items-center gap-3 mt-[40px] ">
          <Link
            to={"/store"}
            className="flex flex-col  items-center gap-1 border border-[#00A2C9] bg-[#D2EEF5] py-3"
          >
            <FcElectronics className="h-8 w-8" />
            <h6 className="text-[14px] font-semibold text-[#00A2C9]  ">
              Electronics
            </h6>
          </Link>
          <Link
            to={"/store"}
            className="flex flex-col  items-center gap-1 border border-[#00A2C9] bg-[#D2EEF5] py-3"
          >
            <FaShirt className="h-8 w-8" />
            <h6 className="text-[ 14px] font-semibold text-[#00A2C9] ">
              Fashion
            </h6>
          </Link>
          <Link
            to={"/store"}
            className="flex flex-col  items-center gap-1 border border-[#00A2C9] bg-[#D2EEF5] py-3"
          >
            <MdMapsHomeWork className="h-8 w-8" />
            <h6 className="text-[ 14px] font-semibold text-[#00A2C9] ">
              Home appliances
            </h6>
          </Link>
          <Link
            to={"/store"}
            className="flex flex-col  items-center gap-1 border border-[#00A2C9] bg-[#D2EEF5] py-3"
          >
            <IoBookSharp className="h-8 w-8" />
            <h6 className="text-[ 14px] font-semibold text-[#00A2C9] ">
              Books
            </h6>
          </Link>
          <Link
            to={"/store"}
            className="flex flex-col  items-center gap-1 border border-[#00A2C9] bg-[#D2EEF5] py-3"
          >
            <FcSportsMode className="h-8 w-8" />
            <h6 className="text-[ 14px] font-semibold text-[#00A2C9] ">
              Sports
            </h6>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ShopWithCategories;
