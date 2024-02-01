/* eslint-disable no-unused-vars */
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const TrackOrder = () => {
  return (
    <div>
      <section>
        <div className="bg-gray-100 py-16 my-24">
          <div className="max-w-4xl  px-4">
            <h2 className="text-3xl font-semibold text-indigo-500">
              Track Your Order
            </h2>
            <h4 className="mb-4 text-sm font-semibold mt-2">
              To track your order please enter your order ID in the input field
              below and press the “Track Order” button. this was given to you on
              your receipt and in the confirmation email you should have
              received.
            </h4>
            <form>
              <div className="grid grid-cols-2  justify-start items-center gap-5">
                <div className="mb-4">
                  <label
                    htmlFor="orderNumber"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Order Number
                  </label>
                  <input
                    type="text"
                    id="orderNumber"
                    name="orderNumber"
                    placeholder="Enter your order number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
              <div className="text-start">
                <button
                  type="submit"
                  className="bg-indigo-500 text-white px-6 py-3 rounded-md font-semibold uppercase tracking-wide focus:outline-none hover:bg-indigo-600 flex gap-2 items-center"
                >
                  <span> Track Order</span>
                  <FaArrowRightLong />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrackOrder;
