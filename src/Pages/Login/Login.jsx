/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <section>
        {" "}
        <div className="bg-base-200  py-24 ">
          <div className="text-center lg:text-center py-5">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
              <form className="card-body">
                {/* <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div> */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
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
                    className="input input-bordered"
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
        </div>
      </section>
    </div>
  );
};

export default Login;
