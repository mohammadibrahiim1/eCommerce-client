import { Spinner } from "keep-react";
import { useState } from "react";
import Categories from "../../Components/Categories/Categories";
// import PriceRangeSlider from "../../Components/PriceRangeSlider/PriceRangeSlider";
import Product from "../../Components/Product/Product";
import { useGetProductsQuery } from "../../redux/features/api/productsApi/productsApi";
import Brands from "../../Components/Brands/Brands";
// import { MdHome, MdKeyboardArrowRight } from "react-icons/md";

// import { usePageTitle } from "../../hooks/usePageTitle/usePageTitle";

const Shop = () => {
  // const pageTitle = usePageTitle();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrands, setSelectedBrands] = useState("");
  console.log(selectedBrands);

  // const [priceRange, setPriceRange] = useState([0, 100]);

  const { data, error, isLoading } = useGetProductsQuery(selectedCategory);

  const products = data?.data;
  console.log(products);

  // const handleSliderChange = (e) => {
  //   setPriceRange([priceRange[0], parseInt(e.target.value, 10)]);
  // };

  // const products = products.filter((product) => {
  //   const productPrice = product.price;
  //   return productPrice >= priceRange[0] && productPrice <= priceRange[1];
  // });

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
    <div>
      <section>
        <div className=" grid grid-cols-6 items-started container mx-auto  gap-1">
          <div className="col-span-1">
            <h1 className="text-[#191C1F] font-semibold text-xl  pt-3 =">
              Categories
            </h1>
            <Categories
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            ></Categories>

            <hr className="my-5" />

            <div>
              <Brands
                setSelectedBrands={setSelectedBrands}
                selectedBrands={selectedBrands}
              ></Brands>
            </div>
          </div>

          <div className="col-span-5">
            <div className="flex justify-between items-center gap-5">
              <div>
                <h1 className="font-semibold text-red-500">
                  <span className="text-purple-600">{products.length}</span>{" "}
                  Results found
                </h1>
              </div>

              <div className="flex justify-end items-center gap-2">
                <h1 className="font-semibold text-gray-500">Sort by : </h1>
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

            <div>
              {products?.length ? (
                <div className="grid grid-cols-4 justify-center items-center gap-3 mt-2">
                  {products?.map((product) => (
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
