import { Dropdown, Spinner } from "keep-react";
import { useGetProductsQuery } from "../../redux/features/api/productsApi/productsApi";

const Shop = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  console.log(data);

  const products = data?.data;
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
        Something went wrong!
      </div>
    );
  }

  return (
    <div className="flex items-start  container mx-auto">
      <div className="w-[25%]">
        <h1>Category</h1>
      </div>
      <div>
        <div className="flex justify-end items-center gap-2">
          <h1 className="font-semibold text-gray-500">Sort by : </h1>
          <Dropdown
            label="Dropdown button"
            size="xs"
            type="secondary"
            dismissOnClick={true}
            className="border"
          >
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Shop;
