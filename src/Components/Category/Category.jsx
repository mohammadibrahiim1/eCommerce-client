/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CaretDown } from "phosphor-react";
import React, { useState } from "react";
import { FcElectronics } from "react-icons/fc";
import { Link } from "react-router-dom";

const Category = ({ category, setSelectedCategory }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeChildIndex, setActiveChildIndex] = useState(null);
  const [activeChildSubIndex, setActiveChildSubIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const childAccordion = (i) => {
    setActiveChildIndex(activeChildIndex === i ? null : i);
  };

  const childSubAccordion = (idx) => {
    setActiveChildSubIndex(activeChildIndex === idx ? null : idx);
  };

  // console.log(category);

  const { name, _id, index, subCategories, i } = category;

  const handleCategory = (value) => {
    setSelectedCategory(value);
  };

  return (
    <div>
      <Link
        to={"/store"}
        className="flex flex-col  items-center gap-1 border border-[#00A2C9] bg-[#D2EEF5] py-3"
      >
        <FcElectronics className="h-8 w-8" />
        <h6 className="text-[14px] font-semibold text-[#00A2C9]">{name}</h6>
      </Link>
    </div>
  );
};

export default Category;
