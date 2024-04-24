/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
// import { useGetBrandsQuery } from "../../redux/features/api/brandApi/brandApi";

const Brands = ({ brands, handleCheckboxFilter, isChecked }) => {
  useEffect(() => {}, []);

  // const [isChecked, setIsChecked] = useState(false);

  // const handleCheckboxChange = (data) => {
  //   console.log(data);
  //   setIsChecked(!isChecked);
  //   console.log(!isChecked);
  // };

  // console.log(brands);
  return (
    <div>
      <section>
        <div>
          <h1 className="font-semibold text-[16px] text-[#10B981] mb-2">
            Popular Brands
          </h1>
          {/* <hr /> */}
          <div className="grid grid-cols-2 justify-between items-center gap-3">
            {brands?.data?.map(({ slug, _id }, i) => {
              return (
                <>
                  <div className="form-control">
                    <label
                      key={_id}
                      className=" flex gap-2 items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        id={i}
                        value={slug}
                        className="checkbox checkbox-xs mt-1 rounded-none"
                        onChange={(e) => handleCheckboxFilter(e, i)}
                      />
                      <span
                        className="text-sm font-semibold capitalize"
                        htmlFor={`${_id}`}
                      >
                        {slug}
                      </span>
                    </label>
                  </div>
                </>
              );
            })}
          </div>
          <hr className="my-3" />
        </div>
      </section>
    </div>
  );
};

export default Brands;
