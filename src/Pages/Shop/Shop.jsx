import { Spinner } from "keep-react";
import { useState } from "react";
import Categories from "../../Components/Categories/Categories";
// import PriceRangeSlider from "../../Components/PriceRangeSlider/PriceRangeSlider";
import Product from "../../Components/Product/Product";
import { useGetProductsQuery } from "../../redux/features/api/productsApi/productsApi";
import Brands from "../../Components/Brands/Brands";
import { useGetBrandsQuery } from "../../redux/features/api/brandApi/brandApi";
import CurrentTitle from "../../Components/CurrentTitle/CurrentTitle";
// import { MdHome, MdKeyboardArrowRight } from "react-icons/md";

// import { usePageTitle } from "../../hooks/usePageTitle/usePageTitle";

const Shop = () => {
  // const pageTitle = usePageTitle();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  // console.log(isChecked);

  const { data: brands } = useGetBrandsQuery();

  // console.log(brands?.data);

  const { data, error, isLoading } = useGetProductsQuery(selectedCategory);

  const products = data?.data;
  console.log(products);

  const handleCheckboxFilter = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    if (checked) {
      const filtered = products.filter((item) => item.brand === checked);
      return filtered;
    }
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
                isChecked={isChecked}
                handleCheckboxFilter={handleCheckboxFilter}
              ></Brands>
            </div>
          </div>

          <div className="col-span-5">
            <div className="flex justify-between items-center gap-5">
              <div>
                <CurrentTitle></CurrentTitle>
              </div>

              <div className="flex justify-end items-center gap-2">
                <h1 className="font-semibold mr-12">
                  <span className="text-sm">Total items : </span>
                  <span className="text-sm text-orange-500">{products?.length}</span>
                </h1>
                <h1 className=" text-sm capitalize font-semibold text-gray-500">
                  Sort by :
                </h1>
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn btn-sm m-1">
                    Dropdown
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>Most Popular</a>
                    </li>
                    <li>
                      <a>Price</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <hr />

            <div>
              {/* <div className="bg-[#F2F4F5] text-[#191C1F] font-semibold">
                {products.length}
                <span className="text-[#5F6C72]">Results found</span>
              </div> */}

              {products?.length ? (
                <div className="grid grid-cols-4 justify-center items-center my-3 gap-y-5">
                  {products?.slice(0, 12)?.map((product) => (
                    <Product product={product} key={product._id}></Product>
                  ))}
                </div>
              ) : (
                <div className="text-red-500 text-center mt-12 font-semibold text-xl">
                  No items found
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
