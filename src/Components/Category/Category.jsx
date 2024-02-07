/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { CaretDown } from "phosphor-react";
import React, { useState } from "react";

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

  console.log(category);

  const { name, _id, index, subCategories, i } = category;

  const handleCategory = (value) => {
    setSelectedCategory(value);
  };

  return (
    <div className="mt-2">
      <div key={_id}>
        <div
          type={"primary"}
          className={`flex items-center justify-between  text-gray-400 p-1 text-sm hover:bg-gray-100 rounded-sm cursor-pointer ${
            activeIndex === index ? "active" : ""
          }`}
          onClick={() => toggleAccordion(index)}
        >
          <div className="flex items-center gap-3">{name}</div>
          <CaretDown size={14} />
        </div>

        {activeIndex === i && (
          <div>
            {subCategories?.map((subItem, i) => (
              <>
                <div>
                  <div
                    type={"primary"}
                    className={`flex items-center justify-between  text-gray-500 p-1 text-sm hover:bg-gray-100 rounded-sm cursor-pointer ${
                      activeChildIndex === i ? "active" : ""
                    }`}
                    onClick={
                      subItem?.subCategories?.length > 0
                        ? () => childAccordion(i)
                        : () => handleCategory(subItem?.slug)
                    }
                  >
                    <div className="flex items-center gap-3 ms-4">
                      -{subItem?.name}
                    </div>
                    {subItem?.subCategories?.length > 0 ? (
                      <CaretDown size={14} />
                    ) : (
                      ""
                    )}
                  </div>

                  {activeChildIndex === i && (
                    <div>
                      {subItem?.subCategories?.map((child, idx) => (
                        <>
                          <div>
                            <div
                              type={"primary"}
                              className={`flex items-center justify-between   text-gray-400  p-1 text-sm hover:bg-gray-100 rounded-sm cursor-pointer ${
                                activeChildSubIndex === idx ? "active" : ""
                              }`}
                              onClick={
                                child?.subCategories?.length > 0
                                  ? () => childSubAccordion(idx)
                                  : () => handleCategory(child?.slug)
                              }
                            >
                              <div className="flex items-center gap-3 ms-7">
                                -{child?.name}
                              </div>

                              {child?.subCategories?.length > 0 ? (
                                <CaretDown size={14} />
                              ) : (
                                ""
                              )}
                            </div>

                            {activeChildSubIndex === idx && (
                              <div>
                                {child?.subCategories?.map((subChild, idx) => (
                                  <>
                                    <div>
                                      <div
                                        type={"primary"}
                                        className={`flex items-center justify-between   text-gray-500  p-1 text-sm hover:bg-gray-100 rounded-sm cursor-pointer ${
                                          activeChildSubIndex === idx
                                            ? "active"
                                            : ""
                                        }`}
                                        onClick={
                                          subChild?.subCategories?.length > 0
                                            ? () => childSubAccordion(idx)
                                            : () =>
                                                handleCategory(subChild?.slug)
                                        }
                                      >
                                        <div className="flex items-center gap-3 ms-12">
                                          -{subChild?.name}
                                        </div>

                                        {subChild?.subCategories?.length > 0 ? (
                                          <CaretDown size={14} />
                                        ) : (
                                          ""
                                        )}
                                      </div>
                                    </div>
                                  </>
                                ))}
                              </div>
                            )}
                          </div>
                        </>
                      ))}
                    </div>
                  )}
                </div>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
