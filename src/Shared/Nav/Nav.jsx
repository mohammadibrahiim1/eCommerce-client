/* eslint-disable no-unused-vars */
import React from "react";
import { FaHeart, FaHome, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-[#1B6392]">
      <div>
        <div className="navbar w-[1320px] mx-auto pt-5">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link>Item 1</Link>
                </li>
                <li>
                  <Link>Parent</Link>
                  <ul className="p-2">
                    <li>
                      <Link>Submenu 1</Link>
                    </li>
                    <li>
                      <Link>Submenu 2</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link>Item 3</Link>
                </li>
              </ul>
            </div>
            <Link to={"/"} className=" text-xl text-white">
              Army Pharma
            </Link>
          </div>
          <div>
            <input
              className="border w-[646px] h-[42px] p-2 rounded focus-outline:none "
              type="search"
              name="search"
              placeholder="search..."
              id="search"
            />
          </div>
          {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link>Item 1</Link>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <Link>Submenu 1</Link>
                  </li>
                  <li>
                    <Link>Submenu 2</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link>Item 3</Link>
            </li>
          </ul>
        </div> */}
          <div className="navbar-end gap-5 ">
            <Link to={"/cart"}>
              <FaCartShopping className="text-[#FFF] w-6 h-6" />
            </Link>

            <Link to={"/wishList"}>
              <FaHeart className="text-[#FFF] w-6 h-6" />
            </Link>
            <Link to={"/signUp"}>
              <FaUser className="text-[#FFF] w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#1B6392] flex justify-between items-center w-[1320px] mx-auto mt-3">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-sm  rounded-none m-1"
          >
            All category
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-md font-semibold text-[#FFF]">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/shop"}>Shop</Link>
            </li>

            <li>
              <Link to={"/trackOrder"}>Track Order</Link>
            </li>
            <li>
              <Link to={"/customerSupport"}>Customer Support</Link>
            </li>
            <li>
              <Link to={"/compare"}>Compare</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-[#fff] font-semibold text-md">+8801625619689</h1>
        </div>
      </div>
    </div>
  );
};

export default Nav;
