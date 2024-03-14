/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  loginUser,
  signInWithGoogle,
} from "../../redux/features/api/auth/authSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import useRedirectToPrevious from "../../hooks/useRedirectToPrevious/useRedirectToPrevious";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const redirectToPrevious = useRedirectToPrevious();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    dispatch(loginUser({ email, password }));
    toast.success("User login successfully");
    navigate("/store");
  };

  const handleGoogleSignIn = () => {
    dispatch(signInWithGoogle());
    redirectToPrevious();
  };
  return (
    <div>
      <section>
        <div className="bg-base-100">
          <div className="hero-content flex-col lg:flex-row-reverse max-w-screen-2xl mx-auto">
            <div className="card w-[424px] h-[500px] shadow-2xl bg-base-100 rounded-none">
              <h2 className="font-semibold border-b ps-8 py-4 bg-[#1b6392] text-white">
                Login
              </h2>
              <form onSubmit={handleSubmit} className="py-2 px-5">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
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
                    name="password"
                    className="input input-bordered rounded-none focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary bg-[#FA8232] border-[#FA8232] hover:bg-[#FA8232] hover:border-[#fa8232e8] text-white rounded-none">
                    Login
                  </button>

                  <span className=" text-[#1B6392] font-semibold text-sm my-1">
                    Do not have an account?
                    <Link
                      to={"/signUp"}
                      className="text-[#1B6392] hover:text-yellow-600 ms-1"
                    >
                      Sign up
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
              <div onClick={handleGoogleSignIn} className="mx-5">
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
        {/* <div className="bg-base-100  py-24 ">
          <div className="text-center lg:text-center py-5">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered focus:outline-none focus:border-indigo-500"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary bg-[#FA8232] border-[#FA8232] hover:bg-[#FA8232] hover:border-[#fa8232e8] text-white ">
                    Login
                  </button>
                </div>
                <div>
                  <h3>Do not have an account?</h3>

                  <div className="form-control mt-6">
                    <Link
                      to={"/signUp"}
                      className="btn btn-primary text-gray-500 bg-white border-[#FA8232] hover:bg-[#FA8232] hover:border-[#FA8232]  hover:text-white "
                    >
                      Create account
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Login;
