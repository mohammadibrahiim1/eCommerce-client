/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Brand from "./Brand";
import { useGetBrandsQuery } from "../../redux/features/api/brandApi/brandApi";

const Brands = () => {
  // useEffect(() => {}, []);
  const { data } = useGetBrandsQuery();
  const brands = data?.data;
  // console.log(brands);

  const [selectedBrand, setSelectedBrand] = useState([]);
  console.log(selectedBrand);

  return (
    <div>
      <section>
        <div>
          <h1 className="font-semibold text-[16px] text-[#10B981] mb-2">
            Popular Brands
          </h1>
          {/* <hr /> */}
          <div className="grid grid-cols-2 justify-between items-center gap-3">
            {brands?.map((brand, index) => (
              <Brand
                selectedBrand={selectedBrand}
                setSelectedBrand={setSelectedBrand}
                brand={brand}
                key={brand._id}
                index={index}
              ></Brand>
            ))}
          </div>
          <hr className="my-3" />
        </div>
      </section>
    </div>
  );
};

export default Brands;
