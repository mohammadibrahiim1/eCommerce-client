import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  getTotal,
  incrementQuantity,
  removeFromCart,
} from "../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";
import { BsBagPlusFill } from "react-icons/bs";
import { FaShoppingBag } from "react-icons/fa";
import { IoReturnUpBack } from "react-icons/io5";
import { LuMoveRight } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const itemsInCart = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  let shipping = 25;
  let taxRate = 2;
  const taxDue = totalAmount * (taxRate / 100);

  const total = totalAmount + shipping + taxDue;

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecrementQuantity = (cartItem) => {
    dispatch(decrementQuantity(cartItem));
  };

  const handleIncrementQuantity = (cartItem) => {
    dispatch(incrementQuantity(cartItem));
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto">
        <div className=" px-4 sm:px-8">
          <div className="py-[9.2px]">
            <div className="flex justify-between items-center ">
              <h2 className="text-xl flex items-center  gap-2 font-semibold leading-tight text-[#10B981] mb-3">
                <BsBagPlusFill className="h-6 w-6 " /> Shopping Cart
              </h2>
              <h2 className="text-xl font-semibold leading-tight text-[#10B981] mb-3">
                Total-items :
                <span className="text-orange-500"> {itemsInCart.length}</span>
              </h2>
            </div>
            <hr />

            {itemsInCart?.length ? (
              <div className="grid grid-cols-12 gap-12 pt-10">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8  overflow-x-auto col-span-8">
                  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                      <thead className="bg-emerald-100 whitespace-nowrap">
                        <tr className="">
                          <th className=" py-3  border-gray-200 text-left px-5 text-xs font-semibold text-[#10B981] uppercase tracking-wider">
                            Products
                          </th>
                          <th className="py-3 border-gray-200  text-left text-xs font-semibold text-[#10B981] uppercase tracking-wider">
                            Price
                          </th>
                          <th className=" pr-5 py-3 border-gray-200   text-xs font-semibold text-[#10B981] uppercase tracking-wider">
                            Quantity
                          </th>
                          <th className=" py-3 border-gray-200   pr-6 text-xs font-semibold text-[#10B981] uppercase tracking-wider">
                            Sub-total
                          </th>
                          <th className=" py-3 border-gray-200  text-start text-xs font-semibold text-[#10B981] uppercase tracking-wider">
                            Action
                          </th>
                        </tr>
                      </thead>

                      {itemsInCart?.map((cartItem) => (
                        <>
                          <tbody>
                            <tr className="border-b">
                              <td className="px-5 py-2 text-start border-gray-200 bg-white text-sm">
                                <div className="flex items-center">
                                  <div className="flex-shrink-0 w-16 h-16">
                                    <img
                                      className="w-full h-full rounded"
                                      src={cartItem.image}
                                      alt=""
                                    />
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-gray-900 whitespace-no-wrap font-semibold capitalize">
                                      {cartItem.model}
                                    </p>
                                  </div>
                                </div>
                              </td>
                              <td className="py-2 border-gray-200  bg-white text-sm text-start">
                                <p className="text-gray-900 whitespace-no-wrap font-semibold text-md">
                                  ${cartItem.price}
                                </p>
                              </td>
                              <td className=" pt-8 mx-12 flex items-center gap-3 text-start border-gray-200 bg-white text-sm">
                                <button
                                  className=" px-0.5 rounded-full"
                                  onClick={() =>
                                    handleDecrementQuantity(cartItem)
                                  }
                                >
                                  -
                                </button>
                                <span className="text-orange-500 font-semibold text-md">
                                  {cartItem?.cartQuantity}
                                </span>
                                <button
                                  className="rounded-full"
                                  onClick={() =>
                                    handleIncrementQuantity(cartItem)
                                  }
                                >
                                  +
                                </button>
                              </td>
                              <td className="px-5 py-5 border-gray-200 bg-white text-sm ">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                  {/* <span
                                    aria-hidden
                                    className="absolute inset-0   opacity-50 rounded-full"
                                  ></span> */}
                                  <span className="relative text-orange-500 font-semibold">
                                    ${cartItem.price * cartItem.cartQuantity}
                                  </span>
                                </span>
                              </td>
                              <td className="px-5 py-5 border-gray-200 bg-white text-sm">
                                <span
                                  onClick={() => handleRemoveFromCart(cartItem)}
                                  className="relative inline-block p-2  font-semibold text-red-900 leading-tight cursor-pointer"
                                >
                                  <span
                                    aria-hidden
                                    className="absolute inset-0 bg-red-400 opacity-50 rounded-full"
                                  ></span>
                                  <span className="relative">
                                    <RxCross2 />
                                  </span>
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </>
                      ))}
                    </table>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <Link to={"/store"}>
                      <button className="w-full flex justify-center items-center  px-6 py-3 text-sm bg-gray-100 text-[#10B981] rounded-md hover:bg-gray-200 font-semibold duration-300">
                        <IoReturnUpBack className="mx-2" size={17} />
                        <span>Shop more</span>
                      </button>
                    </Link>

                    <button className=" flex justify-center items-center gap-2 px-6 py-3 text-sm bg-gray-100 text-[#333] rounded-md hover:bg-gray-200 font-semibold duration-300">
                      <span className="text-[#10B981]">Sub-total : </span>
                      <span className="text-orange-500 ms-1">
                        ${totalAmount}
                      </span>
                    </button>
                  </div>
                </div>

                <div className="border p-5 rounded col-span-4 h-[350px]">
                  <h1 className="font-semibold text-lg  text-orange-500  ">
                    Cart Totals
                  </h1>
                  <div>
                    <h2 className="flex justify-between items-center py-2 text-[#5F6C72] font-semibold text-md">
                      <span>Sub-total : </span>
                      <span className="text-orange-500"> ${totalAmount} </span>
                    </h2>
                    <h2 className="flex justify-between items-center py-2 text-[#5F6C72] font-semibold text-md">
                      <span>Shipping : </span>
                      <span className="text-orange-500"> $25 </span>
                    </h2>
                    <h2 className="flex justify-between items-center py-2 text-[#5F6C72] font-semibold text-md">
                      <span>Discount : </span>
                      <span className="text-orange-500"> $100 </span>
                    </h2>
                    <h2 className="flex  justify-between items-center py-2 text-[#5F6C72]  font-semibold text-md">
                      <span>Tax : </span>
                      <span className="text-orange-500">
                        ${taxDue.toFixed()}
                      </span>
                    </h2>

                    <hr />

                    <h2 className="flex  justify-between items-center py-5 text-[#5F6C72]  font-semibold text-md">
                      <span>Total : </span>
                      <span className="text-green-500 font-semibold">
                        ${total.toFixed()}
                      </span>
                    </h2>

                    <Link
                      to={"/billingDetails"}
                      className="w-full flex justify-center items-center gap-1 mt-5 px-6 py-3 text-sm bg-emerald-100 text-[#10B981] hover:text-[#FFFFFF] rounded-md hover:bg-[#10B981] font-semibold duration-300"
                    >
                      <button>
                        <span className="">Proceed to Checkout</span>
                      </button>
                      <LuMoveRight className="mx-2 " size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-error-500 font-semibold text-2xl">
                <div className="my-16">
                  <div className="avatar rounded-full">
                    <FaShoppingBag className=" text-[#10B981] flex justify-center items-center w-24 h-24  bg-emerald-100 rounded-full p-5" />
                  </div>
                  <h2 className="text-gray-500 font-semibold text-[28px]">
                    Your cart is empty
                  </h2>
                  <h6 className="text-sm font-semibold mt-1 text-orange-500">
                    No items added in your cart. Please add product to your cart
                    list.
                  </h6>
                </div>
                <Link
                  to={"/shop"}
                  className="w-full flex justify-center items-center gap-2 px-6 py-3 text-sm bg-gray-100 text-[#333] rounded-md hover:bg-gray-200 font-semibold duration-300"
                >
                  <IoReturnUpBack className="h-5 w-5" />
                  <span>Return to shop</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
