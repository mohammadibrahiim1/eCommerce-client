/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  createUser,
  signInWithGoogle,
} from "../../redux/features/api/auth/authSlice";
import { usePostUserMutation } from "../../redux/features/api/auth/authApi";
import { useForm } from "react-hook-form";
import useRedirectToPrevious from "../../hooks/useRedirectToPrevious/useRedirectToPrevious";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset, control } = useForm();
  const [postUser, { isLoading, error }] = usePostUserMutation();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(
      createUser({
        name: data?.name,
        email: data?.email,
        password: data?.password,
      })
    );

    postUser({ displayName: data?.name, email: data?.email });
    reset();
    navigate("/store");
  };

  const handleGoogleSignIn = () => {
    dispatch(signInWithGoogle());

    // postUser({ displayName: user?.displayName, email: user?.email });
  };

  return (
    <div>
      <div className="bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse max-w-screen-2xl mx-auto">
          <div className="card w-[424px] h-[644px] shadow-2xl bg-base-100 rounded-none">
            <h2 className="font-semibold border-b ps-8 py-4 bg-[#1b6392] text-white">
              Sign up
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="py-2 px-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered rounded-none focus:outline-none focus:border-[#FA8232]"
                  required
                  {...register("name")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered rounded-none focus:outline-none focus:border-[#FA8232]"
                  required
                  {...register("email")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered rounded-none focus:outline-none focus:border-[#FA8232]"
                  required
                  {...register("password")}
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

                <span className=" text-[#1B6392] font-semibold text-sm my-1">
                  Already have an account?
                  <Link
                    to={"/login"}
                    className="text-[#1B6392] hover:text-yellow-600 ms-1"
                  >
                    Login
                  </Link>
                </span>
              </div>

              {/* <div className="text-yellow-500 flex justify-center items-center py-5">
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
              </div> */}
            </form>

            <div className="text-yellow-500 flex justify-center items-center py-2">
              <span>Or</span>
            </div>
            <div className="mx-5">
              <button
                onClick={handleGoogleSignIn}
                className="inline-flex h-10 w-full  mx-auto items-center justify-evenly gap-5 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
              >
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
