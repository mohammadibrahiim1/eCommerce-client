/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { FaAngleDown, FaInstagram, FaTwitter, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logOut } from "../../redux/features/api/auth/authSlice";
import auth from "../../firebase/firebase.config";
import { getTotal } from "../../redux/features/cart/cartSlice";

const Nav = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    user: { email, role, photoURL },
  } = useSelector((state) => state.auth);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      dispatch(logOut());
      navigate("/login");
    });
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <div className="bg-[#F2F2F2]">
      <div className="flex justify-between items-center gap-4 max-w-screen-2xl mx-auto py-2">
        <h3 className="text-[#484848] font-semibold text-[14px] ">
          Welcome to <span className="text-[#5DBF9D]">KI CHAI</span> online
          eCommerce store.
        </h3>
        <div className="flex justify-between items-center gap-5">
          <div>
            <span className="text-[#ffa52f]  font-semibold text-sm">
              +8801625619689
            </span>
          </div>
          <h1 className="text-[#5DBF9D] font-semibold text-[14px]">
            Follow us on :{" "}
          </h1>
          <div className="flex  items-center  gap-3">
            <Link to={"https://www.facebook.com/"}>
              <FaFacebook className=" text-[#484848]" />
            </Link>
            <Link className=" text-[#484848]" to={"https://www.facebook.com/"}>
              <FaInstagram />
            </Link>
            <Link className=" text-[#484848]" to={"https://www.facebook.com/"}>
              <FaTwitter />
            </Link>

            <div>
              <div className="flex justify-end flex-1 px-2">
                <div className="flex items-center ">
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-xs btn-ghost rounded-btn text-[#484848] gap-1"
                    >
                      <span>USD</span>
                      <FaAngleDown />
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-[120px] mt-4"
                    >
                      <li>
                        <a>Dollar(USD)</a>
                      </li>
                      <li>
                        <a>Euro(EUR)</a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-xs btn-ghost rounded-btn text-[#484848] gap-1"
                    >
                      <span>Language</span>
                      <FaAngleDown />
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-[120px] mt-4"
                    >
                      <li>
                        <a>English</a>
                      </li>
                      <li>
                        <a>Bangla</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-gray-600" />
      <div>
        <div className="navbar max-w-screen-2xl mx-auto py-3">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link>Item 1</Link>
                </li>
                <li>
                  <Link>Parent</Link>
                  <ul className="p-2">
                    <li>
                      <Link>Submenu 1</Link>
                    </li>
                    <li>
                      <Link>Submenu 2</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link>Item 3</Link>
                </li>
              </ul>
            </div>
            <Link to={"/"} className="text-lg text-[#5DBF9D] font-semibold">
              কী চাই!
            </Link>
          </div>
          <div>
            <input
              className="border lg:w-[646px] md:w-[425px] sm:w-[23px] hidden md:flex lg:flex  h-[42px] p-2 rounded focus:outline-none "
              type="search"
              name="search"
              placeholder="search..."
              id="search"
            />
          </div>

          <div className="navbar-center hidden lg:flex  items-center">
            <ul className="menu menu-horizontal px-1 text-md font-semibold text-[#484848]">
              <li>
                <Link
                  className="hover:bg-[#f2f2f2] hover:text-[#10b981] duration-300"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-[#f2f2f2] hover:text-[#10b981] duration-300"
                  to={"/store"}
                >
                  Store
                </Link>
              </li>

              <li>
                <Link
                  className="hover:bg-[#f2f2f2] hover:text-[#10b981] duration-300"
                  to={"/trackOrder"}
                >
                  Track Order
                </Link>
              </li>
              {/* <li>
                <Link
                  className="hover:bg-[#f2f2f2] hover:text-[#4293D9] duration-300"
                  to={"/wishList"}
                >
                  Wishlist
                </Link>
              </li> */}
              <li>
                <Link
                  className="hover:bg-[#f2f2f2] hover:text-[#10b981] duration-300"
                  to={"/billingDetails"}
                >
                  Checkout
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-[#f2f2f2] hover:text-[#10b981] duration-300 border border-[#10b981]"
                  to={"/cart"}
                >
                  Cart :
                  <span className="text-[#10b981] font-semibold">
                    ${totalAmount.toFixed()}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="navbar-end gap-5   lg:flex md:flex md:me-4 lg:me-0 me-3  items-center text-[#484848]">
            {email ? (
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="avatar">
                  <div className="w-12 rounded-full">
                    {photoURL ? (
                      <img src={photoURL} />
                    ) : (
                      <img src="https://i.ibb.co/6yLkr57/hipster-chicken-avatar-free-vector.jpg" />
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link
                      to={"/"}
                      className="text-[#484848] font-semibold hover:text-[#4293D9] duration-300 cursor-pointer"
                    >
                      User Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/myOrders"}
                      className="text-[#484848] font-semibold hover:text-[#4293D9] duration-300 cursor-pointer"
                    >
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <span
                      className="text-[#484848] font-semibold hover:text-[#4293D9] duration-300 cursor-pointer"
                      onClick={handleSignOut}
                    >
                      Logout
                    </span>
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                className="text-[#484848]  font-semibold hover:text-[#4293D9] duration-300 cursor-pointer flex tooltip"
                data-tip="Sign up/Login"
                to={"/signUp"}
              >
                <FaUser className="text-[#484848] w-7 h-7" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
