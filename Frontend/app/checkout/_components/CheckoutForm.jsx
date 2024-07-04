"use client"
import React, { useEffect, useState } from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
import {
    useStripe,
    useElements,
  } from "@stripe/react-stripe-js";
import { CartContext } from "../../_context/CartContext";
import { useContext } from "react";
import { useUser } from "@clerk/nextjs";
import OrderApis from "../../_utils/OrderApis"
import CartApis from "../../_utils/CartApis";
function CheckoutForm({amount}) {
  const stripe = useStripe();
  const elements = useElements();

  const {cart , setCart} = useContext(CartContext)
  const {user} = useUser();

  const [loading , setLoading] = useState(false)
  const [errorMessage , setErrorMessage] = useState()

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    
    const handleError = (error) => {
        setLoading(false);
        setErrorMessage(error.message);
      }
      
      // Create an Order
      createOrder();
      // Send an Email
      sendEmail();

    // Trigger form validation and wallet collection
    const {error: submitError} = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }
    const res = await fetch('api/create-intent', {
        method: 'POST',
        body: JSON.stringify({
            amount : amount
        })
    })

    const clientSecret = await res.json()

    const { error } = stripe.confirmPayment({
        clientSecret,
        elements,
        confirmParams: {
        return_url: 'http://localhost:3000/payment-confirm',
        },
    });

    // if (error.type === "card_error" || error.type === "validation_error") {
    //   setMessage(error.message);
    // } else {
    //   setMessage("An unexpected error occurred.");
    // }

    setIsLoading(false);
  };

  // Create An Order
  const createOrder = () => {
    let productIds = [];
    cart.forEach(el => {
      productIds.push(el?.product?.id)
    })
    const data = {
      data : {
        email : user.primaryEmailAddress.emailAddress,
        usename : user.fullName,
        amount,
        products : productIds
      }
    }
    OrderApis.createOrder(data).then((res) => {
      if(res) {
        cart.forEach(el => {
          CartApis.deleteUserCartItems(el?.id).then((result) => {
            
          })
        })
      }
    })
  }

  // Send Email
  const sendEmail = async () => {
    const res = await fetch('api/send-email', {
      method: 'POST',
  })
  }

  return (
    <>
      <form className="my-16" onSubmit={handleSubmit}>
        <div className="mx-24 md:mx-[220px] lg:mx-[350px]">
          <PaymentElement />
          <button type="submit"
            className="hover:bg-teal-500 bg-teal-600 mb-3
                    w-full mt-4 text-white p-2 rounded-lg"
          >
            Submit
          </button>
          {errorMessage && <div>{errorMessage}</div>}
        </div>
      </form>
    </>
  );
}

export default CheckoutForm;
