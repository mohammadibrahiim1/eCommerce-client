/* eslint-disable react/prop-types */
import { Spinner } from "keep-react";
import DeliveryBoy from "../../Components/DeliveryBoy/DeliveryBoy";
import Product from "../../Components/Product/Product";
import { GiClothes, GiHealthCapsule } from "react-icons/gi";
import { CgSmartphoneChip } from "react-icons/cg";
import { PiHandSoapBold } from "react-icons/pi";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { BiSolidBed } from "react-icons/bi";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { FaList } from "react-icons/fa";
import CurrentTitle from "../../Components/CurrentTitle/CurrentTitle";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectProducts,
} from "../../redux/features/products/productSlice";

const Store = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(selectProducts);

  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCategory = (category) => {
    dispatch(fetchProducts(category));
    console.log(category);
    setTimeout(() => {
      navigate(`/store/${category}`);
    }, 1000);
  };

  if (loading) {
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

  return (
    <div className="">
      <div className="bg-[url('https://i.ibb.co/ZgKybFj/pexels-karolina-grabowska-5650023.jpg')] bg-cover bg-center  bg-no-repeat">
        <div className="py-36">
          <h1 className="text-center  font-bold  uppercase text-gray-900 text-4xl">
            Store
          </h1>
          <CurrentTitle></CurrentTitle>
        </div>
      </div>

      <div className="bg-[#F9FAFB] py-12">
        <div className="max-w-screen-2xl mx-auto">
          <h1 className="text-xl font-semibold mb-5 underline">
            Popular Categories
          </h1>
          <div className=" flex items-center justify-between gap-1">
            <div
              // to={"/store/electronics"}
              onClick={() => handleCategory("electronics")}
              className="flex items-center font-semibold gap-1  "
            >
              <CgSmartphoneChip className="w-8 h-8" />
              <h6 className="hover:text-green-500 duration-300">Electronics</h6>
            </div>
            <div
              onClick={() => handleCategory("fashion")}
              className="flex items-center font-semibold gap-1"
            >
              <GiClothes className="w-8 h-8" />
              <h6 className="hover:text-green-500 duration-300">Fashion</h6>
            </div>
            <div
              onClick={() => handleCategory("beauty_product")}
              className="flex items-center font-semibold gap-1"
            >
              <PiHandSoapBold className="w-7 h-7" />
              <h6 className="hover:text-green-500 duration-300">
                Beauty products
              </h6>
            </div>
            <div
              onClick={() => handleCategory("health&hygiene")}
              className="flex items-center font-semibold gap-1"
            >
              <GiHealthCapsule className="w-7 h-7" />
              <h6 className="hover:text-green-500 duration-300">
                Health & Hygiene
              </h6>
            </div>
            <div
              onClick={() => handleCategory("beverage")}
              className="flex items-center font-semibold gap-1"
            >
              <MdOutlineEmojiFoodBeverage className="w-7 h-7" />
              <h6 className="hover:text-green-500 duration-300">Beverage</h6>
            </div>
            <div
              onClick={() => handleCategory("furniture")}
              className="flex items-center font-semibold gap-1"
            >
              <BiSolidBed className="w-7 h-7" />
              <h6 className="hover:text-green-500 duration-300">Furniture</h6>
            </div>
          </div>
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
                <span className="text-error"> {products?.length}</span> products
                found.
                {/* {category ? (
                  <span className="text-green-500">
                    (<span className="text-error">category:</span> {category})
                  </span>
                ) : null} */}
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
            {products?.length ? (
              products
                ?.slice(0, 15)
                ?.map((product) => (
                  <Product key={product?._id} product={product}></Product>
                ))
            ) : (
              <span className="w-50 mx-auto text-error font-semibold text-2xl">
                No products found
              </span>
            )}
          </div>
        </div>
      </section>
      <div className="mt-[70px]">
        <DeliveryBoy></DeliveryBoy>
      </div>
    </div>
  );
};

export default Store;
