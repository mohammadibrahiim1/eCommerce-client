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
    slug: "nokia",
  },
  {
    id: 4,
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

          <div>
            {brands?.map((brand) => (
              <>
                <div>
                  <h1>{brand.title}</h1>
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
