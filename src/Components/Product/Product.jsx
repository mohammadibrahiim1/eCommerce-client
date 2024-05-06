/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import "./Product.css";
import { BsBagPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { title, thumbnail, price, _id, stock } = product;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <Link
        to={`/productDetails/${_id} `}
        className="card w-[240px] h-[350px] bg-gray-100 rounded-none p-2"
      >
        <button className="text-start text-sm p-1  font-semibold text-[#10B981]">
          In stock :<span className="text-orange-500 capitalize">{stock}</span>
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
      </Link>
    </div>
  );
};

export default Product;
