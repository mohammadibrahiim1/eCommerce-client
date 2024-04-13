/* eslint-disable no-unused-vars */
import React from "react";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import { usePageTitle } from "../../hooks/usePageTitle/usePageTitle";

const CurrentTitle = () => {
  const pageTitle = usePageTitle();
  return (
    <div>
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold">Home</span>
          <MdKeyboardArrowRight className="mt-1" />
          <span className=" text-xs font-semibold capitalize">{pageTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentTitle;
