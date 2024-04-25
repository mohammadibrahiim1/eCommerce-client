/* eslint-disable no-unused-vars */
import React from "react";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
import { usePageTitle } from "../../hooks/usePageTitle/usePageTitle";

const CurrentTitle = () => {
  const pageTitle = usePageTitle();
  return (
    <div>
      <div className="uppercase">
        <div className="flex items-center justify-center  mt-1 ">
          <span className="text-xs font-bold">Home</span>
          <MdKeyboardArrowRight />
          <span className="text-xs font-bold">{pageTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentTitle;
