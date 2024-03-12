/* eslint-disable react/jsx-key */
import { FaArrowRightLong } from "react-icons/fa6";
import SimpleSlider from "../SimpleSlider/SimpleSlider";
import "./Header.css";

// const slides = [
//   "https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
//   "https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
//   "https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
// ];

const Header = () => {
  return (
    <div>
      <section className="flex items-center justify-between gap-2 py-5 ">
        <SimpleSlider></SimpleSlider>
        <div className="flex items-center gap-[40px] p-[44px] bg-[#F2F4F5] w-[648px] h-[380px]">
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
      </section>
    </div>
  );
};

export default Header;
