/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from "keep-react";
import { CaretDown, Plus } from "phosphor-react";
import React, { useState } from "react";

const Category = ({ category, setSelectedCategory }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const { children } = category;
  console.log(children);

  const handleCategory = (value) => {
    setSelectedCategory(value);
  };

  return (
    <div className="mt-3">
      {children?.map((item, index) => (
        <div key={item?._id}>
          <div
            type={"primary"}
            className={`flex items-center justify-between  font-semibold text-red-500 p-2 hover:bg-gray-100 rounded-sm cursor-pointer ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-center gap-3">
              <img className="h-5 w-5" src={item?.icon} alt="" />
              {item?.name}
            </div>
            <CaretDown size={18} />
          </div>

          {activeIndex === index && (
            <div>
              {item?.children?.map((subItem) => (
                <>
                  <div
                    onClick={() => handleCategory(subItem?.slug)}
                    className="font-semibold text-sm text-gray-500 hover:text-green-400 cursor-pointer p-1 ms-12 hover:bg-gray-100 capitalize"
                  >
                    <div>
                      <span> -{subItem?.name}</span>
                    </div>
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Category;
