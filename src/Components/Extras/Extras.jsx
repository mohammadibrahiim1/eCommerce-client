/* eslint-disable no-unused-vars */
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Extras = () => {
  return (
    <div>
      <section className=" max-w-screen-2xl mx-auto mt-[72px]">
        <div className="flex justify-between items-center gap-[40px]">
          <div className="flex items-center gap-[40px] p-[44px] bg-[#F2F4F5] w-[648px] h-[336px]">
            <div>
              <button className="btn btn-sm rounded-none bg-[#2DA5F3] hover:bg-[#2DA5F3] text-white">
                INTRODUCING
              </button>
              <h1 className="text-[#191C1F] font-semibold text-[32px] w-[230px]">
                New Apple Homepod Mini
              </h1>
              <h5 className="text-[#475156] font-semibold text-xs w-[230px]">
                Jam-packed with innovation, HomePod mini delivers unexpectedly.
              </h5>
              <button className="flex justify-center items-center gap-1  btn btn-sm rounded-none bg-[#FA8232] hover:bg-[#FA8232] text-white mt-3">
                <span>Shop now</span>
                <FaArrowRightLong />
              </button>
            </div>

            <div>
              <img
                src="https://i.ibb.co/Lt7Lnh4/image-6-1.png"
                alt=""
                srcSet=""
              />
            </div>
          </div>
          <div className="flex items-center gap-[40px] p-[44px] bg-[#191C1F] w-[648px] h-[336px]">
            <div>
              <button className="btn btn-sm rounded-none bg-[#2DA5F3] hover:bg-[#2DA5F3] text-white border-[#2DA5F3]">
                INTRODUCING
              </button>
              <h1 className="text-[#FFF] font-semibold text-[32px] w-[280px]">
                Xiaomi Mi 11 Ultra 12GB+256GB
              </h1>
              <h5 className="text-[#475156] font-semibold text-xs w-[230px]">
                Jam-packed with innovation, HomePod mini delivers unexpectedly.
              </h5>
              <button className="flex justify-center items-center gap-1  btn btn-sm rounded-none bg-[#FA8232] hover:bg-[#FA8232] text-white mt-3 border-[#FA8232]">
                <span>Shop now</span>
                <FaArrowRightLong />
              </button>
            </div>

            <div>
              <img
                className="h-[312px] w-[312px] mt-6"
                src="https://i.ibb.co/n8xMkqk/Image-2.png"
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

export default Extras;
