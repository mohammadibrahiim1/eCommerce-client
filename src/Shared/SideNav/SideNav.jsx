/* eslint-disable no-unused-vars */
import React from "react";
import { GoStack } from "react-icons/go";
import { PiHeart, PiStorefront } from "react-icons/pi";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div>
      <section className="w-80">
        <div className="flex justify-start items-center gap-1.5 bg-[#FA8232] ps-4 py-2 text-white">
          <GoStack />
          <span>Dashboard</span>
        </div>
        <div>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <Link
              to={"/user/dashboard/myOrders"}
              className="flex items-center gap-1.5 text-[15px] py-2 px-1 hover:bg-gray-50 "
            >
              <PiStorefront className="h-5 w-5" />
              <span>My Orders</span>
            </Link>
            <Link
              to={"/user/dashboard/myAccount"}
              className="flex items-center gap-1.5 text-[15px] py-2 px-1 hover:bg-gray-50 mt-1"
            >
              <FaRegCircleUser className="h-5 w-5" />
              <span>My Account</span>
            </Link>
            <Link
              to={"/user/dashboard/wishList"}
              className="flex items-center gap-1.5 text-[15px] py-2 px-1 hover:bg-gray-50 mt-1"
            >
              <PiHeart className="h-5 w-5" />
              <span>My Wishlist</span>
            </Link>
            <Link className="flex items-center gap-1.5 text-[15px] py-2 px-1 hover:bg-gray-50 mt-1">
              <CiLogout className="h-5 w-5" />
              <span>Logout</span>
            </Link>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SideNav;
