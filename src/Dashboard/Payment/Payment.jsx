import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51MqKGoCCiF9xmTvyyhaI20lttQRycwrTJ53Xul4BpMzuvV8TvYrxggvG7PdGwQgicO8sFiS4e6Ex1gr3EFZrpdbY00bypXU9BR"
);

const Payment = () => {
  const { id } = useParams();
  const [payment, setPayment] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/payment/${id}`)
      .then((res) => res.json())
      .then((data) => setPayment(data));
  }, [id]);
  return (
    <div>
      <div className="container py-10 mx-auto">
        <div className="grid grid-cols-2 gap0">
          <div className="payment-box">
            <h2 className="my-5 text-4xl font-semibold capitalize">
              Confirm your payment
            </h2>
            <p>Product Id: {id}</p>
            <p>
              Product is <span className="font-semibold">{payment.name}</span>
            </p>
            <h3 className="mb-5 text-2xl font-semibold">
              Price ${payment.price}
            </h3>
            {payment?.price && (
              <Elements stripe={stripePromise}>
                <CheckOutForm payment={payment} />
              </Elements>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
