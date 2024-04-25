/* eslint-disable react/prop-types */
import { Spinner } from "keep-react";
// import { useState } from "react";
// import Categories from "../../Components/Categories/Categories";
import { useGetProductsQuery } from "../../redux/features/api/productsApi/productsApi";
import DeliveryBoy from "../../Components/DeliveryBoy/DeliveryBoy";
import Product from "../../Components/Product/Product";
// import Slider from "react-slick";
import { GiClothes, GiHealthCapsule } from "react-icons/gi";
import { CgSmartphoneChip } from "react-icons/cg";
import { PiHandSoapBold } from "react-icons/pi";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { BiSolidBed } from "react-icons/bi";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { FaList } from "react-icons/fa";
import CurrentTitle from "../../Components/CurrentTitle/CurrentTitle";

// function SampleNextArrow(props) {
//   console.log(props);
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "none", background: "red" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "none", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

const Shop = () => {
  // const [selectedCategory, setSelectedCategory] = useState("");

  const { data, error, isLoading } = useGetProductsQuery();
  // console.log(error);

  const products = data?.products;
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
        {error.status}
      </div>
    );
  }

  // const settings = {
  //   focusOnSelect: true,
  //   dots: false,
  //   infinite: true,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  // };

  return (
    <div className="">
      <div className="bg-[url('https://i.ibb.co/ZgKybFj/pexels-karolina-grabowska-5650023.jpg')] bg-cover bg-center  bg-no-repeat">
        <div className="py-36">
          <h1 className="text-center  font-bold  uppercase text-gray-900 text-4xl">
            Shop
          </h1>
          <CurrentTitle></CurrentTitle>
        </div>
      </div>

      <div className=" max-w-screen-2xl mx-auto my-12 flex items-center justify-between gap-1 ">
        <div className="flex items-center font-semibold gap-1  ">
          <CgSmartphoneChip className="w-8 h-8" />
          <h6 className="hover:text-green-500 duration-300">Electronics</h6>
        </div>
        <div className="flex items-center font-semibold gap-1">
          <GiClothes className="w-8 h-8" />
          <h6 className="hover:text-green-500 duration-300">Fashion</h6>
        </div>
        <div className="flex items-center font-semibold gap-1">
          <PiHandSoapBold className="w-7 h-7" />
          <h6 className="hover:text-green-500 duration-300">Beauty products</h6>
        </div>
        <div className="flex items-center font-semibold gap-1">
          <GiHealthCapsule className="w-7 h-7" />
          <h6 className="hover:text-green-500 duration-300">
            Health & Hygiene
          </h6>
        </div>
        <div className="flex items-center font-semibold gap-1">
          <MdOutlineEmojiFoodBeverage className="w-7 h-7" />
          <h6 className="hover:text-green-500 duration-300">Beverage</h6>
        </div>
        <div className="flex items-center font-semibold gap-1">
          <BiSolidBed className="w-7 h-7" />
          <h6 className="hover:text-green-500 duration-300">Furniture</h6>
        </div>
      </div>

      <section className="max-w-screen-2xl mx-auto  ">
        <div>
          <div className="flex justify-between items-center py-4 bg-gray-50 p-2">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 uppercase">
                Featured products
              </h1>
              <p className="text-sm text-gray-400 font-bold normal-case ">
                see our all products and search by category.
              </p>
            </div>

            <div>
              <form>
                <div className="flex ">
                  <input
                    type="text"
                    name="search"
                    placeholder="search..."
                    className="w-[350px] border  rounded-sm  input-sm  py-5 focus:outline-none "
                  />
                </div>
              </form>
            </div>

            <div>
              <p className="text-sm text-gray-400 font-bold normal-case ">
                {products.length} products found.
              </p>
            </div>
            <div>
              <div>
                <div className="flex items-center justify-between gap-7 m-1 border px-5 py-2 ">
                  <h1 className="font-semibold text-gray-900 ">View </h1>
                  <div className="flex items-center justify-between gap-3">
                    <TfiLayoutGrid3Alt className="w-4 h-4" />
                    <FaList className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn m-1">
                  Sort by price
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Price: low to high</a>
                  </li>
                  <li>
                    <a>Price : high to low</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-6 justify-between items-center gap-4 mt-5">
            {products.slice(0, 15)?.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </div>
      </section>
      <div className="mt-[70px]">
        <DeliveryBoy></DeliveryBoy>
      </div>
    </div>
  );
};

export default Shop;
