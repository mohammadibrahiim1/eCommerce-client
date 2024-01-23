/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { addToWishList } from "../../redux/features/wishList/wishListSlice";
import "./Product.css";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { model, image, price } = product;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleAddToWishList = () => {
    dispatch(addToWishList(product));
  };

  return (
    <div>
      <div>
        {/* <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div> */}
        {/* <Card
          className="max-w-[320px] overflow-hidden rounded-md"
          imgSrc={image}
          imgSize="md"
          imgStyle="p-5"
        >
          <Card.Container className="absolute right-3.5 top-3.5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#1b629262] bg-[#1b629262]">
            <Heart
              onClick={handleAddToWishList}
              size={20}
              weight="bold"
              color="white"
            />
          </Card.Container>
          <Card.Container className="p-6">
            <Card.Container className="flex items-center justify-between">
              <Badge
                size="xs"
                colorType="light"
                color="success"
                className="flex gap-3"
              >
                <span>{status}</span>
                <span>
                  {stock ? <span className="text-xs"> : {stock} </span> : null}
                </span>
              </Badge>
              <Card.Title className="!text-sm  text-[#191C1F]">
                ${price}
              </Card.Title>
            </Card.Container>
            <Card.Container className="my-3">
              <Tooltip
                content="View details"
                trigger="hover"
                placement="top"
                animation="duration-300"
                style="dark"
                size="xs"
              >
                <Card.Title className="!text-xs text-[#191C1F] capitalize hover:text-red-500 duration-300 cursor-pointer">
                  {model ? model?.slice(0, 35) : name.slice(0, 35)}...
                </Card.Title>
              </Tooltip>
            </Card.Container>
            <Card.Container className="flex items-center justify-start gap-5">
              <Button
                onClick={handleAddToCart}
                size="xs"
                type="outlineGray"
                color={"error"}
              >
                <span className="pr-2 ">
                  <ShoppingCart size={18} />
                </span>
                Add To Cart
              </Button>
            </Card.Container>
          </Card.Container>
        </Card> */}

        <div className="card w-[248px] h-[296px] bg-base-100 shadow-xl rounded-none">
          <img
            className="w-[216px] h-[188px] mx-auto rounded-sm py-3"
            src={image}
            alt={model}
          />

          <div className="px-4 py-1">
            <p className="font-semibold text-[14px]">
              If a dog chews shoes whose shoes does he choose?
            </p>
            <div className="card-actions font-semibold justify-between items-center mt-2 flex  ">
              <div className="badge badge-outline text-[#2DA5F3]">${price}</div>
              <div className="flex justify-between items-center gap-1">
                <div
                  onClick={handleAddToWishList}
                  className="btn btn-sm text-[#2DA5F3] px-3"
                >
                  <FaHeart />
                </div>
                <div
                  onClick={handleAddToCart}
                  className="btn btn-sm text-[#2DA5F3] px-3"
                >
                  <FaCartShopping />
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
