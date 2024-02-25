/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { createUser } from "../../redux/features/api/auth/authSlice";
import toast from "react-hot-toast";
import { usePostUserMutation } from "../../redux/features/api/auth/authApi";

const SignUp = () => {
  const [postUser, { isLoading, error, isError }] = usePostUserMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    dispatch(createUser({ name, email: email, password: password }));
    toast.success("User created successfully");

    const userInfo = {
      displayName: name,
      email: email,
    };

    await postUser({ ...userInfo, applicants: [], queries: [] });
  };

  return (
    <div>
      <div className="bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-[424px] h-[644px] shadow-2xl bg-base-100 rounded-none">
            <h2 className="font-semibold border-b ps-8 py-4 bg-[#1b6392] text-white">
              Sign up
            </h2>
            <form onSubmit={handleSubmit} className="py-2 px-5">
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
