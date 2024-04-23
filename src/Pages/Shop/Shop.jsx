import { Spinner } from "keep-react";
import { useState } from "react";
import Categories from "../../Components/Categories/Categories";
// import PriceRangeSlider from "../../Components/PriceRangeSlider/PriceRangeSlider";
import Product from "../../Components/Product/Product";
import { useGetProductsQuery } from "../../redux/features/api/productsApi/productsApi";
import Brands from "../../Components/Brands/Brands";
import { useGetBrandsQuery } from "../../redux/features/api/brandApi/brandApi";
import CurrentTitle from "../../Components/CurrentTitle/CurrentTitle";
import ListProduct from "../../Components/ListProduct/ListProduct";
import { LuLayoutList } from "react-icons/lu";
import { IoGrid } from "react-icons/io5";
import DeliveryBoy from "../../Components/DeliveryBoy/DeliveryBoy";
// import { MdHome, MdKeyboardArrowRight } from "react-icons/md";

// import { usePageTitle } from "../../hooks/usePageTitle/usePageTitle";

const Shop = () => {
  // const pageTitle = usePageTitle();
  const [layout, setLayout] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("");
  // const [isChecked, setIsChecked] = useState(false);
  const [selected, setSelected] = useState([]);
  console.log(selected);
  const [showMore, setShowMore] = useState(15);

  // console.log(showMore);

  const { data: brands } = useGetBrandsQuery();

  const { data, error, isLoading } = useGetProductsQuery(
    selectedCategory,
    selected
  );

  const products = data?.data;
  // console.log(products);

  const handleCheckboxFilter = (e, index) => {
    console.log(e.target.value);
    const activeData = document.getElementById(index).checked;
    if (activeData === true) {
      setSelected((oldData) => [...oldData, e.target.value]);
    } else {
      setSelected(selected.filter((values) => values !== e.target.value));
    }

    console.log(activeData, "activeData");
  };

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

  const showLayout = (layoutOption) => {
    setLayout(layoutOption);
  };

  const handleShowMore = () => {
    setShowMore((preValue) => preValue + 2);
  };

  const handleShowLess = () => {
    setShowMore(showMore - 2);
  };
  return (
    <div className="bg-[#F9FAFB]">
      <section className="max-w-screen-2xl mx-auto ">
        <div className=" grid grid-cols-6 items-started container mx-auto gap-5">
          <div className="col-span-1">
            <h1 className="text-[#10B981] font-semibold text-md  pt-3 pb-1 ">
              Categories
            </h1>
            <hr />
            <Categories
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            ></Categories>

            <hr className="my-3" />

            <div>
              <Brands
                brands={brands}
                // isChecked={isChecked}
                handleCheckboxFilter={handleCheckboxFilter}
              ></Brands>
            </div>
          </div>

          <div className="col-span-5 mt-4">
            <div className="flex justify-between items-center gap-5">
              <div>
                <CurrentTitle></CurrentTitle>
              </div>

              <div className="flex justify-end items-center gap-2">
                <h1 className="font-semibold mr-12">
                  <span className="text-sm">Total items : </span>
                  <span className="text-sm text-orange-500">
                    {products?.length}
                  </span>
                </h1>
                <h1 className=" text-sm capitalize font-semibold text-gray-500">
                  view :
                </h1>
                <div className="flex items-center justify-between gap-3">
                  <LuLayoutList
                    className="w-5 cursor-pointer"
                    onClick={() => showLayout("list")}
                  />
                  <IoGrid
                    className="w-5 cursor-pointer"
                    onClick={() => showLayout("grid")}
                  />
                </div>
              </div>
            </div>

            <hr />

            <div>
              {products?.length ? (
                <>
                  {layout === "grid" && (
                    <div className="grid grid-cols-5 justify-center items-center my-3 gap-y-1">
                      {products?.slice(0, showMore)?.map((product) => (
                        <Product product={product} key={product._id}></Product>
                      ))}
                    </div>
                  )}

                  {layout === "list" && (
                    <div className="grid grid-cols-2 justify-center items-center my-3 gap-2">
                      {products?.slice(0, showMore)?.map((product) => (
                        <ListProduct
                          product={product}
                          key={product._id}
                        ></ListProduct>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="text-red-500 text-center mt-12 font-semibold text-xl">
                  No items found
                </div>
              )}
            </div>

            <div className="flex justify-center items-center my-5">
              <button
                onClick={handleShowMore}
                className="btn btn-md capitalize bg-green-500 hover:bg-green-600 duration-300 text-white "
              >
                show more
              </button>
              <button
                onClick={handleShowLess}
                className="btn btn-md capitalize bg-green-500 hover:bg-green-600 duration-300 text-white "
              >
                show less
              </button>
            </div>
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
