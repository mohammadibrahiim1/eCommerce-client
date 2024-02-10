/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const brands = [
  {
    id: 1,
    title: "Apple",
    slug: "apple",
  },
  {
    id: 2,
    title: "Lenovo",
    slug: "lenovo",
  },
  {
    id: 3,
    title: "Nokia",
    slug: "nokia",
  },
  {
    id: 4,
    title: "One Plus",
    slug: "one-plus",
  },
  {
    id: 5,
    title: "Huawei",
    slug: "huawei",
  },
  {
    id: 6,
    title: "Motorola",
    slug: "motorola",
  },
  {
    id: 7,
    title: "Samsung",
    slug: "samsung",
  },
  {
    id: 8,
    title: "Asus",
    slug: "asus",
  },
  {
    id: 9,
    title: "Dell",
    slug: "dell",
  },
  {
    id: 10,
    title: "Intel",
    slug: "intel",
  },
  {
    id: 11,
    title: "AMD Ryzen",
    slug: "ryzen",
  },
];

const Brands = ({ selectedBrands, setSelectedBrands }) => {
  // const handleBrandChange = (slug) => {
  //   if (selectedBrands.includes(slug)) {
  //     setSelectedBrands(selectedBrands.filter((item) => item !== slug));
  //   } else {
  //     setSelectedBrands([...selectedBrands, slug]);
  //   }
  // };
  return (
    <div>
      <section>
        <div>
          <h1 className="font-semibold text-[16px] text-gray-400">
            Popular Brands
          </h1>

          <div className="grid grid-cols-2 justify-between items-center gap-3">
            {brands?.map((brand) => (
              <>
                <div className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    id="checkbox"
                    // checked={selectedBrands}
                    onClick={() => setSelectedBrands(brand.slug)}
                    className="form-checkbox  text-indigo-600"
                  />

                  <label className="text-sm font-medium text-gray-700">
                    {brand.title}
                  </label>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brands;
