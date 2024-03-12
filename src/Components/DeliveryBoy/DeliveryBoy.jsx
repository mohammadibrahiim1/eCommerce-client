/* eslint-disable no-unused-vars */
import React from "react";

const DeliveryBoy = () => {
  return (
    <div>
      <section className=" bg-[#00A2C9]">
        <div className=" max-w-screen-2xl mx-auto p-16 border border-[#00A2C9]  rounded-lg ">
          <div className="flex  justify-between items-center  mx-auto bg-[#FFFFFF] p-6 rounded-lg">
            <div className="w-[800px]">
              <h3 className="text-[22px] font-semibold ">
                Organic Products and Food
              </h3>
              <h3 className="text-[28px] font-bold text-[#000000] my-1">
                Quick Delivery to Your Home
              </h3>
              <h6 className="text-[16px] leading-6 ">
                There are many products you will find in our shop, Choose your
                daily necessary product from our KI CHAI shop and get some
                special offers. See Our latest discounted products from here and
                get a special discount.
              </h6>
              <button className="btn rounded-full px-12 py-2 bg-[#00A2C9] hover:bg-[#00A2C9] text-[#FFFFFF] my-5">
                Download app
              </button>
            </div>

            <div>
              <img
                src="https://i.ibb.co/T41wGm3/8299346-3870890.jpg"
                alt="delivery boy img"
                className="w-[373px]  h-[250px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DeliveryBoy;
