/* eslint-disable no-unused-vars */
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Advertise = () => {
  return (
    <div>
      <section>
        <div className=" max-w-screen-2xl mx-auto mt-[72px]">
          <div className="flex justify-between items-center gap-[40px] p-[44px] bg-[#FFE7D6] h-[424px]">
            <div>
              <button className="btn btn-sm rounded-none bg-[#2DA5F3] hover:bg-[#2DA5F3] text-white">
                SAVE UP TO $200.00
              </button>
              <h1 className="text-[#191C1F] font-semibold text-[48px] w-[424px]">
                Macbook Pro
              </h1>
              <h5 className="text-[#475156] font-semibold text-[24px] w-[424px]">
                Apple M1 Max Chip. 32GB Unified Memory, 1TB SSD Storage
              </h5>
              <button className="flex justify-center items-center gap-1  btn btn-md rounded-none bg-[#FA8232] hover:bg-[#FA8232] text-white mt-3 px-5">
                <span>Shop now</span>
                <FaArrowRightLong />
              </button>
            </div>

            <div>
              <img
                className="w-[536px] h-[424px]"
                src="https://i.ibb.co/j8mssCQ/Image-3.png"
                alt=""
                srcSet=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advertise;
