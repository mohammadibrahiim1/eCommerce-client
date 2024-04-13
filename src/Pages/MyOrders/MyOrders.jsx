/* eslint-disable no-unused-vars */

import React, { useEffect } from "react";
import { useGetUserOrdersQuery } from "../../redux/features/api/orderApi/orderApi";
import { Spinner } from "keep-react";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const cart = useSelector((state) => state.cart);
  const itemsInCart = useSelector((state) => state?.cart?.cartItems);
  console.log(itemsInCart);
  const {
    user: { email },
  } = useSelector((state) => state.auth);
  console.log(email);
  const {
    data: orders,
    isLoading,
    isError,
    error,
  } = useGetUserOrdersQuery(email);

  console.log(orders);

  // const orders = data?.data;
  // console.log(orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  if (isLoading) {
    return (
      <Spinner
        className="flex justify-center items-center mx-auto my-12"
        color="failure"
        size="lg"
      />
    );
  }

  if (isError) {
    return (
      <div className="text-red-500 text-center  py-12 font-semibold text-2xl">
        {/* Something went wrong! */}
        {error?.data?.message}
      </div>
    );
  }

  return (
    <div>
      <section className=" rounded  shadow max-w-5xl mx-auto">
        <div className="">
          <h1 className="font-semibold text-md py-2 px-2 bg-[#FA8232]">
            My orders
            <span className="text-white mx-1 ">
              ( Your total orders : <span>{orders?.length}</span> )
            </span>
          </h1>
          <hr />
        </div>

        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="bg-gray-100">
                <tr>
                  <th>ORDER ID</th>
                  <th>STATUS</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              {orders.map((order) => (
                <>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td className="text-green-500">#{order._id}</td>
                      <td className="text-orange-500 capitalize">
                        {order?.status}
                      </td>
                      <td className="text-green-500">{order.createdAt}</td>
                      <td className="text-red-500 font-semibold">
                        ${order.price}
                        <span className="text-orange-500 mx-1">
                          ({order?.items?.cartItems?.length}products)
                        </span>
                      </td>
                      <td className="text-green-500 cursor-pointer">
                        {order?.paymentOption === "creditCard" ? (
                          <>
                            {order?.paymentStatus === "paid" ? (
                              <button
                                // to={`/payment/${order._id}`}
                                className="btn btn-sm border-none rounded-xs text-white btn-error"
                              >
                                paid
                              </button>
                            ) : (
                              <Link
                                to={`/payment/${order._id}`}
                                className="btn btn-sm border-none rounded-xs text-white btn-error"
                              >
                                payment
                              </Link>
                            )}
                          </>
                        ) : (
                          <span className="capitalize text-error font-semibold">
                            cash on delivery
                          </span>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </>
              ))}
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyOrders;
