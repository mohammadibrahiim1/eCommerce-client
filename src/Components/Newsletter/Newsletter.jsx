/* eslint-disable no-unused-vars */
import React from "react";

const Newsletter = () => {
  return (
    <div>
      <section className="  mt-16">
        <div
          className=" mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:py-12 lg:px-8"
          style={{ "background-color": "#1B6392" }}
        >
          <div className="px-6 py-6 rounded-lg md:py-12 md:px-12 lg:py-10 lg:px-16 xl:flex xl:items-center">
            <div className="xl:w-0 xl:flex-1">
              <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
                Subscribe to our newsletter
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-indigo-200">
                Subscribe to our newsletter and stay updated on the latest
                developments.
              </p>
            </div>
            <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
              <div id="mc_embed_signup">
                <form className="sm:flex">
                  <input
                    className="required rounded-md w-full px-4 py-2 email"
                    id="mce-EMAIL"
                    placeholder="Enter your email"
                    required=""
                    type="email"
                    value=""
                    aria-required="true"
                  />
                  <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                    <button
                      className="w-full flex items-center justify-center px-5 py-3 text-base leading-6
                            font-medium rounded-md text-white bg-[#00A2C9] focus:ring
                            hover:bg-[#00E3D0] focus:outline-[#00E3D0] focus:bg-[#00E3D0]
                            transition duration-150 ease-in-out"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-8">
            <img
              src="https://i.ibb.co/jJ8fqSj/samsung-4-1.png"
              alt=""
              srcSet=""
            />
            <img
              src="https://i.ibb.co/821DYYN/toshiba-1-1.png"
              alt=""
              srcSet=""
            />
            <img
              src="https://i.ibb.co/7pvT7tN/philips-1.png"
              alt=""
              srcSet=""
            />
            <img src="https://i.ibb.co/Bc6gWC5/Vector.png" alt="" srcSet="" />
            <img
              src="https://i.ibb.co/BzdzpTF/google-2015-1.png"
              alt=""
              srcSet=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
