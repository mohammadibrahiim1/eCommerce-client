import { Spinner } from "keep-react";
import { useState } from "react";
import Categories from "../../Components/Categories/Categories";
import { useGetProductsQuery } from "../../redux/features/api/productsApi/productsApi";
import DeliveryBoy from "../../Components/DeliveryBoy/DeliveryBoy";
import Product from "../../Components/Product/Product";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const { data, error, isLoading } = useGetProductsQuery();
  // console.log(error);

  const products = data?.products;
  // console.log(products);

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

  return (
    <div className="">
      <section className="max-w-screen-2xl mx-auto ">
        <div className="">
          <h1 className="text-[#10B981] font-semibold text-[22px]  pt-3 pb-1 mx-auto capitalize text-center my-5">
            Shop by Categories
          </h1>
          <Categories
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          ></Categories>
        </div>

        <div>
          <div className="grid grid-cols-6 justify-between items-center gap-2">
            {products?.map((product) => (
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
