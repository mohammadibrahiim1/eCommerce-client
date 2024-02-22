/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
// import { useGetBrandsQuery } from "../../redux/features/api/brandApi/brandApi";

const Brands = ({ brands, handleCheckboxFilter, isChecked }) => {
  useEffect(() => {}, []);

  return (
    <div>
      <section>
        <div>
          <h1 className="font-semibold text-[16px] text-gray-400 mb-3">
            Popular Brands
          </h1>

          <div className="grid grid-cols-2 justify-between items-center gap-3">
            {brands?.data?.map((brand) => {
              return (
                <>
                  <div className="form-control">
                    <label
                      key={brand._id}
                      className=" flex gap-2 items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        value={brand.slug}
                        id={brand._id}
                        className="checkbox checkbox-xs mt-1 rounded-none "
                        onChange={handleCheckboxFilter}
                      />
                      <span
                        className="text-sm  font-semibold capitalize "
                        htmlFor={brand._id}
                      >
                        {brand.slug}
                      </span>
                    </label>
                  </div>
                </>
              );
            })}
            {/* {brands?.map((brand) => (
              <>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    id="flexCheckDefault"
                    value=""
                    checked={selectedBrands}
                    onClick={(e) => setSelectedBrands(e.target.checked)}
                    className="form-checkbox  text-indigo-600"
                  />

                  <label
                    className="text-sm    capitalize text-gray-500"
                    id="flexCheckDefault"
                  >
                    {brand.slug}
                  </label>
                </div>
              </>
            ))} */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
