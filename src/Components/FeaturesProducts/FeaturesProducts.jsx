/* eslint-disable no-unused-vars */
import React from "react";
import { useGetProductsQuery } from "../../redux/features/api/productsApi/productsApi";
import { FaArrowRightLong } from "react-icons/fa6";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { Spinner } from "keep-react";
import { Link } from "react-router-dom";

const FeaturesProducts = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetProductsQuery("");

  const products = data?.products;
  console.log(products);

  if (isLoading) {
    return (
      <Spinner
        className=" flex justify-center items-center mx-auto my-12"
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
      <section className=" max-w-screen-2xl mx-auto flex justify-between gap-5 mt-[72px] ">
        <div>
          <div className="bg-[#F3DE6D] flex flex-col justify-center items-center gap-2 py-5">
            <h2 className="text-[#BE4646] font-semibold text-xs ">
              COMPUTER & ACCESSORIES
            </h2>
            <h1 className="text-[#00A2C9] text-[32px] font-semibold ">
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
            <img
              src="https://i.ibb.co/GdcLrWZ/thumbnail.jpg"
              alt=""
              srcSet=""
            />
          </div>
        </div>

        <div>
          <div>
            <div className="flex justify-between items-center gap-1 ">
              <h1 className="text-[#00A2C9] font-semibold text-[24px] ">
                Features Product
              </h1>

              <div className="flex justify-center items-center gap-5">
                <Link
                  to={"/store"}
                  className="font-semibold text-sm text-[#00A2C9]"
                >
                  All products
                </Link>
                <Link
                  to={"/store"}
                  className="font-semibold text-sm text-[#00A2C9]"
                >
                  Smart phones
                </Link>
                <Link
                  to={"/store"}
                  className="font-semibold text-sm text-[#00A2C9]"
                >
                  Laptops
                </Link>
                <Link
                  to={"/store"}
                  className="font-semibold text-sm text-[#00A2C9]"
                >
                  HeadPhones
                </Link>
                <Link
                  to={"/store"}
                  className="font-semibold text-sm text-[#00A2C9]"
                >
                  TV
                </Link>
                <Link
                  to={"/store"}
                  className="font-semibold text-sm text-[#00A2C9] flex items-center gap-1"
                >
                  <span> Browse All Products</span>
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-5 justify-between items-center gap-3 mt-[24px]">
              {products
                ?.slice(6, 14)
                ?.map(({ _id, stock, thumbnail, title, price }) => (
                  <div key={_id}>
                    <Link
                      to={`/productDetails/${_id} `}
                      className="card w-[240px] h-[350px] bg-gray-100 rounded-none p-2"
                    >
                      <button className="text-start text-sm p-1  font-semibold text-[#10B981]">
                        In stock :
                        <span className="text-orange-500 capitalize">
                          {stock}
                        </span>
                      </button>
                      <div>
                        <img
                          className="w-[219px] h-[190px] mx-auto rounded-sm p-5"
                          src={thumbnail}
                          alt={title}
                        />
                      </div>

                      <div className="mt-[45px]">
                        <h4 className="font-semibold text-[14px] uppercase text-[#10B981] duration-300">
                          {title}
                        </h4>
                        <div className="card-actions font-semibold justify-between items-center flex pt-1 ">
                          <div className=" text-sm text-orange-500">
                            ${price}
                          </div>
                          {/* <div className="flex justify-between items-center gap-1">
                <div
                  onClick={handleAddToCart}
                  className="cursor-pointer border rounded p-2 text-[#10B981] hover:bg-[#10B981] hover:text-[#FFF] duration-300"
                >
                  <BsBagPlusFill className="h-4 w-4" />
                </div>
              </div> */}
                        </div>
                      </div>
                    </Link>
                    {/* <div className="card w-[290px] h-[305px] bg-base-100 shadow-xl rounded-none">
                    <button className="text-start p-1  font-semibold text-[#10B981]">
                      In stock :{" "}
                      <span className="text-orange-500">{product?.stock}</span>
                    </button>
                    <Link to={`/productDetails/${product?._id} `}>
                      <img
                        className="w-[160px] h-[180px] mx-auto rounded-sm py-3"
                        src={product?.thumbnail}
                        alt={product?.title}
                      />
                    </Link>

                    <div className="px-4 py-1">
                      <h4 className="font-semibold text-[14px] text-[#10B981] duration-300">
                        {product?.title}...
                      </h4>
                      <div className="card-actions font-semibold justify-between items-center mt-5 flex  ">
                        <div className=" text-lg text-orange-500">
                          ${product?.price}
                        </div>
                        <div className="flex justify-between items-center gap-1">
                          <div
                            onClick={() => handleAddToCart(product)}
                            className="cursor-pointer border rounded p-2 text-[#10B981] hover:bg-[#10B981] hover:text-[#FFF] duration-300"
                          >
                            <BsBagPlusFill className="h-6 w-6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesProducts;
