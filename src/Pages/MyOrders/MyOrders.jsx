/* eslint-disable no-unused-vars */
import React from "react";
import { useGetOrdersQuery } from "../../redux/features/api/orderApi/orderApi";
import { Spinner } from "keep-react";

const MyOrders = () => {
  const { data, isLoading, isError, error } = useGetOrdersQuery();
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

  if (isError) {
    return (
      <div className="text-red-500 text-center  py-12 font-semibold text-2xl">
        {/* Something went wrong! */}
        {error?.data?.message}
      </div>
    );
  }
  return (
    <div>
      <section className="max-w-4xl mx-auto">My orders</section>
    </div>
  );
};

export default MyOrders;
