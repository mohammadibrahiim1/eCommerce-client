/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const CheckOutForm = ({ data }) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  // declare state for msg
  const [message, useMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const { price, _id, name, email } = data;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
    });
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);
    setPaymentSuccess("");
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name,
            email,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      console.log("card-info", card);
    }

    // store payment info in the database
    const payment = {
      transactionId: paymentIntent.id,
      name,
      email,
      price,
      orderId: _id,
    };
  };

  return (
    <div>
      <section className="max-w-screen-2xl mx-auto">payment</section>
    </div>
  );
};

export default CheckOutForm;
