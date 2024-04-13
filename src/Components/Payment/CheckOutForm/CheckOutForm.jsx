/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { usePostPaymentMutation } from "../../../redux/features/api/payment/paymentApi";
// import { createPaymentIntent } from "../../../redux/features/api/payment/paymentSlice";
import {
  // useCreatePaymentIntentMutation,
  useSubmitPaymentMutation,
} from "../../../redux/features/api/payment/paymentApi";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";

const CheckOutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  // declare state for msg
  const [message, useMessage] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();

  /* 
  1.stripe install
  2. card loadStripe
  3.card elements
  4.stripe,elements
  5.check card error and display error
  6.collect card information

  
  */
  //  destructure order information
  const { price, _id, name, email } = order;

  const [submitPayment, { isLoading, isError, error }] =
    useSubmitPaymentMutation();
  // console.log(submitPayment);

  useEffect(() => {
    // create payment intents as soon as the page loads
    fetch("http://localhost:5000/api/v1/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        price,
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    // block native form submission
    event.preventDefault();
    if (!stripe || !elements) {
      // stripe.js hasn't yet loaded
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    //
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    console.log(paymentMethod);

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);
    setPaymentSuccess("");
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(
        clientSecret,

        {
          payment_method: {
            card: card,
            billing_details: {
              name: name,
              email: email,
            },
          },
        }
      );
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }

    console.log("paymentIntent", paymentIntent);

    if (paymentIntent.status === "succeeded") {
      setPaymentSuccess("Congrats! your payment completed");
      setTransactionId(paymentIntent.id);

      // store payment info in the database
      const payment = {
        name,
        email,
        price,
        orderId: _id,
        transactionId: paymentIntent.id,
      };

      try {
        await submitPayment(payment);
        toast.success("Payment submitted successfully");
      } catch (error) {
        console.log("Failed to submit payment", error);
      }
    }
    setProcessing(false);
    // console.log("paymentIntent", paymentIntent);
  };

  return (
    <div>
      <section className="max-w-screen-2xl mx-auto">
        <h4 className="text-center text-primary mt-3 mb-5">
          Please,make your payment here
        </h4>
        <form className="payment-card" onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "15px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
          <button
            type="submit"
            className="mt-4 btn btn-primary"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
          <p className="text-error">{cardError}</p>
          {paymentSuccess && (
            <div>
              <p className="text-success">{paymentSuccess}</p>
              <p className="text-success">
                {" "}
                your transactionId : {transactionId}
              </p>
            </div>
          )}
        </form>
      </section>
    </div>
  );
};

export default CheckOutForm;
