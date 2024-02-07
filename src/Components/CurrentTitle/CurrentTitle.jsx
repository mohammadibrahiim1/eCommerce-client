/* eslint-disable no-unused-vars */
import React from "react";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import { usePageTitle } from "../../hooks/usePageTitle/usePageTitle";

const CurrentTitle = () => {
  const pageTitle = usePageTitle();
  return (
    <div>
      <div className="bg-[#F2F4F5] p-6">
        <div className="flex items-center w-[1320px] mx-auto">
          <MdHome className="w-4 h-4 m-1" />
          <span className="text-xs font-semibold">Home</span>
          <MdKeyboardArrowRight className="mt-1" />
          <span className="text-xs font-semibold capitalize">{pageTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentTitle;
