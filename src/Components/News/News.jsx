/* eslint-disable no-unused-vars */
import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoCalendar } from "react-icons/io5";
import { HiOutlineChatBubbleOvalLeftEllipsis } from "react-icons/hi2";

const News = () => {
  return (
    <div>
      <section className="mt-[72px]">
        <div>
          <h1 className="text-[32px] text-center font-bold text-[#191C1F]">
            Latest News
          </h1>
        </div>

        {/* 

 */}

        <div className="grid grid-cols-3 justify-center items-center gap-5">
          <div className="max-w-[424px] h-[572px] mx-auto mt-[40px]">
            <div className="bg-white shadow-md border border-gray-200 rounded-none max-w-sm dark:bg-gray-800 dark:border-gray-700  p-5">
              <a href="#">
                <img
                  className=""
                  src="https://i.ibb.co/QcWSr9y/unsplash-i-ZVrf-El-G1t0.png"
                  alt=""
                />
              </a>
              <div className="flex justify-start items-center gap-5 py-3">
                <div className="flex items-center gap-2">
                  <FaRegCircleUser className="text-[#FA8232]" />
                  <span className="text-sm font-semibold text-gray-500">
                    Ibrahim
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <IoCalendar className="text-[#FA8232]" />
                  <span className="text-sm font-semibold text-gray-500">
                    19Dec, 2013
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineChatBubbleOvalLeftEllipsis className="text-[#FA8232]" />
                  <span className="text-sm font-semibold text-gray-500">
                    453
                  </span>
                </div>
              </div>
              <div className="">
                <a href="#">
                  <h5 className="text-gray-900 font-bold text-[16px] tracking-tight mb-2 dark:text-white">
                    Curabitur massa orci, consectetur et blandit ac, auctor et
                    tellus.
                  </h5>
                </a>
                <p className="font-normal text-[13px] text-gray-700 mb-3 dark:text-gray-400">
                  Pellentesque vestibulum lorem vel gravida aliquam. Morbi
                  porta, odio id suscipit mattis, risus augue condimentum purus.
                </p>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="-mr-1 ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-[424px] h-[572px] mx-auto mt-[40px]">
            <div className="bg-white shadow-md border border-gray-200 rounded-none max-w-sm dark:bg-gray-800 dark:border-gray-700  p-5">
              <a href="#">
                <img
                  className=""
                  src="https://i.ibb.co/NNsXw3r/unsplash-FO7-JIlwj-Ot-U.png"
                  alt=""
                />
              </a>
              <div className="flex justify-start items-center gap-5 py-3">
                <div className="flex items-center gap-2">
                  <FaRegCircleUser className="text-[#FA8232]" />
                  <span className="text-sm font-semibold text-gray-500">
                    Ibrahim
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <IoCalendar className="text-[#FA8232]" />
                  <span className="text-sm font-semibold text-gray-500">
                    19Dec, 2013
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineChatBubbleOvalLeftEllipsis className="text-[#FA8232]" />
                  <span className="text-sm font-semibold text-gray-500">
                    453
                  </span>
                </div>
              </div>
              <div className="">
                <a href="#">
                  <h5 className="text-gray-900 font-bold text-[16px] tracking-tight mb-2 dark:text-white">
                    Curabitur pulvinar aliquam lectus, non blandit erat mattis
                    vitae.
                  </h5>
                </a>
                <p className="font-normal text-[13px] text-gray-700 mb-3 dark:text-gray-400">
                  Pellentesque vestibulum lorem vel gravida aliquam. Morbi
                  porta, odio id suscipit mattis, risus augue condimentum purus.
                </p>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="-mr-1 ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-[424px] h-[572px] mx-auto mt-[40px]">
            <div className="bg-white shadow-md border border-gray-200 rounded-none max-w-sm dark:bg-gray-800 dark:border-gray-700  p-5">
              <a href="#">
                <img
                  className=""
                  src="https://i.ibb.co/RDxMDhX/unsplash-6-MNm-Di1hc-Y.png"
                  alt=""
                />
              </a>
              <div className="flex justify-start items-center gap-5 py-3">
                <div className="flex items-center gap-2">
                  <FaRegCircleUser className="text-[#FA8232]" />
                  <span className="text-sm font-semibold text-gray-500">
                    Ibrahim
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <IoCalendar className="text-[#FA8232]" />
                  <span className="text-sm font-semibold text-gray-500">
                    19Dec, 2013
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineChatBubbleOvalLeftEllipsis className="text-[#FA8232]" />
                  <span className="text-sm font-semibold text-gray-500">
                    453
                  </span>
                </div>
              </div>
              <div className="">
                <a href="#">
                  <h5 className="text-gray-900 font-bold text-[16px] tracking-tight mb-2 dark:text-white">
                    Cras nisl dolor, accumsan et metus sit amet, vulputate
                    condimentum dolor.
                  </h5>
                </a>
                <p className="font-normal text-[13px] text-gray-700 mb-3 dark:text-gray-400">
                  Maecenas scelerisque, arcu quis tempus egestas, ligula diam
                  molestie lectus, tincidunt malesuada arcu metus posuere metus.
                </p>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="-mr-1 ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
