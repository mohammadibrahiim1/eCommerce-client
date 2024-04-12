/* eslint-disable no-unused-vars */

import React, { useEffect } from "react";
import { useGetUserOrdersQuery } from "../../redux/features/api/orderApi/orderApi";
import { Spinner } from "keep-react";
import { useDispatch, useSelector } from "react-redux";
import { getTotal } from "../../redux/features/cart/cartSlice";

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
      <section className="max-w-5xl mx-auto">
        <div className="border border-gray-300 rounded p-4  shadow">
          <h1 className="font-semibold text-md">
            My orders
            <span className="text-orange-500 mx-1">
              (Your total orders :{" "}
              <span className="text-green-400">{orders?.length}</span> )
            </span>
          </h1>

          <hr />
          <h3 className="text-gray-600 font-semibold text-sm">
            Order status : On hold
          </h3>
        </div>

        <div>
          {orders?.map((order) => (
            <>
              <div className="border">
                <div className="p-2 font-semibold text-lg capitalize">
                  Your order id :
                  <span className="text-green-500"> {order?._id} </span>
                  {/* <span className="text-orange-500">
                    ( {itemsInCart?.length} items)
                  </span> */}
                  <h2 className="text-sm font-semibold">
                    Payable Amount :
                    <span className="text-green-500  uppercase  ms-1">
                      Tk.{order?.price}
                    </span>
                  </h2>
                  {/* <div className="flex items-center justify-start gap-3">
                    {itemsInCart?.map((item) => (
                      <>
                        <div>
                          <div>
                            <img
                              className="h-[80px] w-[80px]"
                              src={item?.thumbnail}
                              alt={item?.title}
                            />
                            <h1 className="text-xs ">
                              {item?.title.slice(0, 12)}...
                            </h1>
                            <h6 className="text-xs">Tk : {item?.price}</h6>
                          </div>
                        </div>
                      </>
                    ))}
                  </div> */}
                </div>
              </div>
            </>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyOrders;
