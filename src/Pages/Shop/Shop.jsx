import { Spinner } from "keep-react";
import { useGetProductsQuery } from "../../redux/features/api/productsApi/productsApi";

const Shop = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  console.log(data);

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

  return <div>shop</div>;
};

export default Shop;
