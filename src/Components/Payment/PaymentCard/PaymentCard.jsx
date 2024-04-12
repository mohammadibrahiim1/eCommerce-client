/* eslint-disable no-unused-vars */
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import { useLoaderData } from "react-router-dom";

// stripe payment
const stripePromise = loadStripe(
  "pk_test_51MlpzGLrYWLOOZ8UljA5X1ANJMi0EXPD3KZWZmLIjyuv5DQgLe3I2dZvA4TPFfa4n0opSlz0POZ3wbxzcy27Necr005pDnWQh8"
);
const PaymentCard = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <section className="max-w-screen-2xl mx-auto">
        <Elements stripe={stripePromise}>
          <CheckOutForm data={data}></CheckOutForm>
        </Elements>
      </section>
    </div>
  );
};

export default PaymentCard;
