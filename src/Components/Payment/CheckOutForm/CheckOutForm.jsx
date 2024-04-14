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
  // const dispatch = useDispatch();

  // declare state for msg
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  // const navigate = useNavigate();

  /* 
  1.stripe install
  2. card loadStripe
  3.card elements
  4.stripe,elements
  5.check card error and display error
  6.collect card information

  
  */
  //  destructure order information
  const { price, _id, name, email, items, createdAt } = order;
  console.log(order);

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
        // navigate("/user/dashboard/myOrders");
        // window.location.reload();
      } catch (error) {
        console.log("Failed to submit payment", error);
        toast.error(error.message);
      }
    }
    setProcessing(false);

    // console.log("paymentIntent", paymentIntent);
  };

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }
  return (
    <div>
      <section className="max-w-md ms-[120px]">
        <div>
          <h4 className="text-start text-md text-white bg-[#FA8232] py-2 px-2 uppercase">
            Please pay
            <strong className="text-black px-1">${price}</strong>
            for your order.
          </h4>
        </div>

        <form
          className="payment-card bg-[#F2F4F5] pt-12 mt-3.5 pb-3  px-3 rounded-lg"
          onSubmit={handleSubmit}
        >
          <CardElement
            options={{
              style: {
                base: {
                  iconColor: "#00935F",
                  color: "#5DBF9D",
                  fontWeight: "500",
                  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                  fontSize: "16px",
                  fontSmoothing: "antialiased",
                  ":-webkit-autofill": {
                    color: "#5DBF9D",
                  },
                  "::placeholder": {
                    color: "#00935F",
                  },
                },
                invalid: {
                  iconColor: "#EF4C53",
                  color: "#EF4C53",
                },
              },
            }}
          />
          <div className="flex items-center justify-start gap-1 mt-12">
            <button
              type="submit"
              className=" btn btn-info px-7 text-white"
              disabled={!stripe || !clientSecret || processing}
            >
              Pay
            </button>
            <p className="text-error">{cardError}</p>
            {paymentSuccess && (
              <div className="py-1">
                <p className="text-success font-semibold text-sm">
                  {paymentSuccess}
                </p>
                <p className="text-success font-semibold text-sm ">
                  <span className="capitalize text-error"> transactionId</span>{" "}
                  : {transactionId}
                </p>
              </div>
            )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default CheckOutForm;
