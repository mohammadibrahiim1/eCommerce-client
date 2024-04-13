/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useCreatePaymentIntentMutation,
  usePostPaymentMutation,
} from "../../../redux/features/api/paymentApi/paymentApi";
import { data } from "autoprefixer";

const CheckOutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  // declare state for msg
  const [message, useMessage] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  console.log(clientSecret);
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();
  // const [paymentIntentClientSecret, setPaymentIntentClientSecret] =
  //   useState(null);

  const { price, _id, name, email } = order;

  const [postPayment, { isLoading, error }] = usePostPaymentMutation();
  console.log(data);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price,
        currency: "usd",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClientSecret(data.client_secret);
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

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
        // '{PAYMENT_INTENT_CLIENT_SECRET}',
        {
          payment_method: {
            card: card,
            billing_details: {
              name,
              email,
            },
          },
        }
      );
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      console.log("card info", card);
      // store payment info in the database
      const payment = {
        name,
        email,
        price,
        orderId: _id,
        transactionId: paymentIntent.id,
      };

      dispatch(await postPayment(payment));
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
          <p className="text-danger">{cardError}</p>
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
