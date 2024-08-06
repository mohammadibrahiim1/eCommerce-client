/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import "./Product.css";
import { IoInformationCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { title, thumbnail, price, _id, brand, rating, category } = product;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <div className="grid__item card col-lg-4 col-md-6 col-sm-6 col-12 product-card border">
        <figure>
          <img
            src={thumbnail}
            alt={title}
            className=" w-[330px] h-[280px] p-5"
          />
        </figure>
        <div className="px-5">
          <div className="flex justify-between items-center gap-5">
            <h2 className="font-bold capitalize  text-xs text-[#095256]">
              rating: {rating}
            </h2>
            <h2 className="font-bold uppercase text-xs text-[#095256]">
              {brand}
            </h2>
          </div>
          <div className="capitalize font-semibold text-sm text-[#095256] flex items-center gap-2 my-2">
            <span>{title.slice(0, 18)}...</span>
            <Link
              className="tooltip"
              data-tip="details"
              to={`/productDetails/${_id} `}
            >
              <IoInformationCircle />
            </Link>
          </div>
          <div className="capitalize font-semibold text-sm text-[#095256] flex justify-between items-center">
            <span> ${price}</span>
            <span className="text-[#00A250]">{category}</span>
          </div>
          <div
            onClick={() => handleAddToCart(product)}
            className="card-actions justify-start"
          >
            <button className="border border-[#00A250] rounded-md font-semibold my-3 btn-sm px-10 hover:text-[#FFFFFF] hover:bg-[#00a251f1]  duration-500 bg-[#00A250] text-white flex items-center justify-center gap-2 w-full">
              <FaShoppingBag /> <span>Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
