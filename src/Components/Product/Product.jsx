/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import "./Product.css";
// import { BsBagPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { title, thumbnail, price, _id, brand, rating } = product;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <Link
        to={`/productDetails/${_id} `}
        className="grid__item card col-lg-4 col-md-6 col-sm-6 col-12 product-card border"
      >
        <figure>
          <img
            src={thumbnail}
            alt="Shoes"
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
          <div className="uppercase font-semibold text-lg text-[#095256] py-1">
            {title.slice(0, 24)}
          </div>
          <div className="uppercase font-semibold text-lg text-[#095256]">
            ${price}
          </div>
          <div
            onClick={() => handleAddToCart(product)}
            className="card-actions justify-start"
          >
            <button className="border  border-[#095256] font-semibold my-3 btn-sm px-10 text-[#095256] hover:text-[#FFFFFF] hover:bg-[#095256]  duration-500">
              Buy Now
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
