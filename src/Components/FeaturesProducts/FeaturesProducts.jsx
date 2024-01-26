/* eslint-disable no-unused-vars */
import React from "react";
import { useGetProductsQuery } from "../../redux/features/api/productsApi/productsApi";
import { FaArrowRightLong, FaCartShopping } from "react-icons/fa6";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { Spinner } from "keep-react";

const FeaturesProducts = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetProductsQuery("");

  const products = data?.data;
  console.log(products);

  if (isLoading) {
    return (
      <Spinner
        className="flex justify-center items-center mx-auto my-12"
        color="failure"
        size="lg"
      />
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center  py-12 font-semibold text-2xl">
        Something went wrong!
      </div>
    );
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <section className="flex justify-center gap-5 mt-[72px]">
        <div>
          <div className="bg-[#F3DE6D] flex flex-col justify-center items-center gap-2 py-5">
            <h2 className="text-[#BE4646] font-semibold text-xs ">
              COMPUTER & ACCESSORIES
            </h2>
            <h1 className="text-[#191C1F] text-[32px] font-semibold ">
              32% Discount
            </h1>
            <h4 className="text-[#475156] font-semibold text-xs">
              For all ellectronics products
            </h4>
            <h4 className="mt-3">
              <span className="text-sm font-semibold me-1">
                Offers ends in:
              </span>
              <span className="bg-white font-semibold text-sm p-2 uppercase">
                ENDS OF Eid-ul-fitre{" "}
              </span>
            </h4>

            <button className="flex items-center gap-2 bg-[#FA8232] text-[#FFFFFF] font-semibold px-3 py-2 my-3">
              <span>Shop now</span>
              <span className="mt-1">
                <FaArrowRightLong />
              </span>
            </button>
          </div>
          <div>
            <img src="https://i.ibb.co/GdcLrWZ/Image.jpg" alt="" srcSet="" />
          </div>
        </div>

        <div>
          <div>
            <div className="flex justify-between items-center gap-1 ">
              <h1 className="text-[#191C1F] font-semibold text-[24px] ">
                Features Product
              </h1>

              <div className="flex justify-center items-center gap-5">
                <h1 className="font-semibold text-sm text-[#191C1F]">
                  All products
                </h1>
                <h1 className="font-semibold text-sm text-[#191C1F]">
                  Smart phones
                </h1>
                <h1 className="font-semibold text-sm text-[#191C1F]">
                  Laptops
                </h1>
                <h1 className="font-semibold text-sm text-[#191C1F]">TV</h1>
                <h1 className="font-semibold text-sm text-[#191C1F]">
                  HeadPhones
                </h1>
                <div className="font-semibold text-sm text-[#191C1F] flex items-center gap-1">
                  <span> Browse All Products</span>
                  <FaArrowRightLong />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 justify-between items-center gap-3 mt-[24px]">
              {products?.slice(6, 14)?.map((product) => (
                <>
                  <div className="card w-[248px] h-[296px] bg-base-100 shadow-xl rounded-none">
                    <img
                      className="w-[216px] h-[188px] mx-auto rounded-sm py-3"
                      src={product.image}
                      alt={product.model}
                    />

                    <div className="px-4 py-1">
                      <p className="font-semibold text-[14px]">
                        If a dog chews shoes whose shoes does he choose?
                      </p>
                      <div className="card-actions font-semibold justify-between items-center mt-2 flex  ">
                        <div className="badge badge-outline text-[#2DA5F3]">
                          ${product?.price}
                        </div>
                        <div
                          onClick={() => handleAddToCart(product)}
                          className="btn btn-sm text-[#2DA5F3] px-3"
                        >
                          <FaCartShopping />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesProducts;
