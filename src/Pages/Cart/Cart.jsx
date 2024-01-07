import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const itemsInCart = useSelector((state) => state.cart.cartItems);
  console.log(itemsInCart);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    savedCart.forEach((item) => {
      dispatch(addToCart(item));
    });
  }, [dispatch]);

  return (
    <div>
      <div className="container">
        <div className=" px-4 sm:px-8">
          <div className="py-8">
            <div>
              <h2 className="text-xl font-semibold leading-tight text-red-500">
                Shopping Cart
              </h2>
            </div>

            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Products
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Quantity
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        Sub-total
                      </th>
                    </tr>
                  </thead>

                  {itemsInCart?.map(({ image, model, price, quantity }) => (
                    <>
                      <tbody>
                        <tr>
                          <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 w-16 h-16">
                                <img
                                  className="w-full h-full rounded"
                                  src={image}
                                  alt=""
                                />
                              </div>
                              <div className="ml-3">
                                <p className="text-gray-900 whitespace-no-wrap">
                                  {model}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {price}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {quantity}
                            </p>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                              <span
                                aria-hidden
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                              ></span>
                              <span className="relative">Activo</span>
                            </span>
                          </td>
                        </tr>
                      </tbody>{" "}
                    </>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
