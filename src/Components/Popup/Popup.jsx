/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    // Set a timer to display the popup after 5 seconds (5000 milliseconds)
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <section>
        {showPopup && (
          <div
            className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover bg-[#ffffff5e]"
            id="modal-id"
          >
            <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-[#F7E99E] ">
              <div className="">
                <div className="text-center p-5 flex-auto justify-center items-center">
                  <img
                    className="w-[50%] mx-auto"
                    src="https://i.ibb.co/vqzZk4q/Image.png"
                    alt=""
                    srcSet=""
                  />
                  <h2 className="text-xl font-bold py-4 ">21% Discount</h2>
                  <p className="text-sm text-gray-500 px-8">
                    Escape the noise, It’s time to hear the magic with Xiaomi
                    Earbuds.
                  </p>

                  <Link to={"/shop"}>
                    <button
                      to={"/shop"}
                      className=" md:mb-0 bg-[#FA8232] px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-[#FA8232]"
                    >
                      Shop now
                    </button>
                  </Link>
                </div>

                <div className="p-3  mt-2 text-center space-x-4 md:block">
                  <button
                    onClick={handleClosePopup}
                    className="mb-2 md:mb-0   bg-red-500  p-2 text-sm shadow-sm font-medium tracking-wider border text-white rounded-full hover:shadow-lg hover:bg-red-600"
                  >
                    <RxCross2 />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Popup;
