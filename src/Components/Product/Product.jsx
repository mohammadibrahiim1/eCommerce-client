/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
// import { addToWishList } from "../../redux/features/wishList/wishListSlice";
import "./Product.css";
// import { FaCartShopping } from "react-icons/fa6";
import { BsBagPlusFill } from "react-icons/bs";
// import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { title, thumbnail, price, _id, stock } = product;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  // const handleAddToWishList = () => {
  //   dispatch(addToWishList(product));
  // };

  return (
    <div>
      <div>
        <div className="card w-[250px] h-[288px] bg-base-100 shadow-xl rounded-none">
          <button className="text-start text-sm p-1  font-semibold text-[#10B981]">
            In stock :{" "}
            <span className="text-orange-500 capitalize">{stock}</span>
          </button>
          <Link to={`/productDetails/${_id} `}>
            <img
              className="w-[180px] h-[180px] mx-auto rounded-sm py-3"
              src={thumbnail}
              alt={title}
            />
          </Link>

          <div className="px-4">
            <h4 className="font-semibold text-[14px] text-[#10B981] duration-300">
              {title}...
            </h4>
            <div className="card-actions font-semibold justify-between items-center mt-3 flex  ">
              <div className=" text-sm text-orange-500">${price}</div>
              <div className="flex justify-between items-center gap-1">
                <div
                  onClick={handleAddToCart}
                  className="cursor-pointer border rounded p-2 text-[#10B981] hover:bg-[#10B981] hover:text-[#FFF] duration-300"
                >
                  <BsBagPlusFill className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
