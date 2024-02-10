/* eslint-disable no-unused-vars */
import React from "react";

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
    id: 7,
    title: "Asus",
    slug: "asus",
  },
  {
    id: 7,
    title: "Dell",
    slug: "dell",
  },
  {
    id: 7,
    title: "Intel",
    slug: "intel",
  },
  {
    id: 7,
    title: "AMD Ryzen",
    slug: "ryzen",
  },
];

const Brands = () => {
  return (
    <div>
      <section>
        <div>
          <h1 className="font-semibold text-[16px] text-gray-400">
            Popular Brands
          </h1>

          <div className="grid grid-cols-2 justify-between items-center gap-3 cursor-pointer">
            {brands?.map((brand) => (
              <>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600"
                  />

                  <label
                    // eslint-disable-next-line react/no-unknown-property
                    for="checkbox"
                    className="text-sm font-medium text-gray-700"
                  >
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
