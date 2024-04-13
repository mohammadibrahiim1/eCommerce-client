/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import { useLoaderData } from "react-router-dom";

// stripe payment pk test
const stripePromise = loadStripe(
  // process.env.REACT_APP_STRIPE_PK_KEY

  "pk_test_51MlpzGLrYWLOOZ8UljA5X1ANJMi0EXPD3KZWZmLIjyuv5DQgLe3I2dZvA4TPFfa4n0opSlz0POZ3wbxzcy27Necr005pDnWQh8"
);
const PaymentCard = () => {
  const order = useLoaderData();
  // console.log(order);

  return (
    <div>
      <section className="max-w-screen-2xl mx-auto">
        <Elements stripe={stripePromise}>
          <CheckOutForm order={order}></CheckOutForm>
        </Elements>
      </section>
    </div>
  );
};

export default PaymentCard;
