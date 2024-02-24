/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="bg-base-100 mt-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card  w-[424px] h-[744px] shadow-2xl bg-base-100 rounded-none">
            <h2 className="font-semibold border-b ps-8 py-4 bg-[#1b6392] text-white">
              Sign up
            </h2>
            <form className="py-2 px-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered rounded-none focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered rounded-none focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered rounded-none focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div className="font-semibold text-sm flex items-start  gap-1 mt-3">
                <input
                  type="checkbox"
                  defaultChecked
                  required
                  className="checkbox rounded-md checkbox-warning checkbox-xs mt-1"
                />
                <span className="text-[#1B6392]">
                  Are you agree to Clicon{" "}
                  <span className="text-yellow-500">Terms of Condition</span>{" "}
                  and <span className="text-yellow-500">Privacy Policy</span>?
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary bg-[#FA8232] border-[#FA8232] hover:bg-[#FA8232] hover:border-[#fa8232e8] text-white rounded-none">
                  Sign up
                </button>
              </div>

              <div className="text-yellow-500 flex justify-center items-center py-5">
                <span>or</span>
              </div>
              <div>
                <div className="form-control">
                  <Link
                    to={"/login"}
                    className="btn btn-primary text-gray-500 bg-white border-[#FA8232] hover:bg-[#FA8232] hover:border-[#FA8232]  hover:text-white rounded-none "
                  >
                    Login
                  </Link>
                </div>
              </div>
            </form>

            <div className="text-yellow-500 flex justify-center items-center py-5">
              <span>Or create account with</span>
            </div>
            <div className="mx-5">
              <button className="inline-flex h-10 w-full  mx-auto items-center justify-evenly gap-5 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="h-[18px] w-[18px] "
                />
                Continue with Google
              </button>
              {/* <button className="inline-flex h-10 w-full mt-2 mx-auto items-center justify-evenly gap-7 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                <img
                  src="https://www.svgrepo.com/show/511330/apple-173.svg"
                  alt="Google"
                  className="h-[18px] w-[18px] "
                />
                Continue with Apple
              </button> */}
              <button className="inline-flex h-10 w-full mt-2 mx-auto items-center justify-evenly gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                <img
                  src="https://www.svgrepo.com/show/448224/facebook.svg"
                  alt="Google"
                  className="h-[20px] w-[20px] "
                />
                Continue with facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
