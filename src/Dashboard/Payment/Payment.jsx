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
    fetch(`https://power-tools-server-nine.vercel.app/payment/${id}`)
      .then((res) => res.json())
      .then((data) => setPayment(data));
  }, [id]);

  return (
    <div className="flex items-center justify-center ">
      <div className="container px-4 py-5 pt-20 mx-auto">
        <div className="flex justify-center">
          <div className="w-full p-8 bg-white rounded-lg shadow-md lg:w-2/3">
            <h2 className="mb-5 text-4xl font-semibold text-center capitalize">
              Confirm your payment
            </h2>
            <div>
              {payment?.price && (
                <Elements stripe={stripePromise}>
                  <CheckOutForm payment={payment} />
                </Elements>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
