import { useEffect, useState } from "react";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const CheckOutForm = ({ payment }) => {

    const { name, price, _id } = payment;
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://power-tools-server-nine.vercel.app/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });
        if (error) {
            setError(error.message);
            setSuccess("");
            setProcessing(false);
            return;
        } else {
            setError("");
            console.log(paymentMethod);
        }
        // payment intent
        const { paymentIntent, error: intentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: user.email,
                    },
                },
            });
        if (intentError) {
            setError(intentError.message);
            setSuccess("");
            setProcessing(false);
            return;
        } else {
            setError("");
            setSuccess("Your payment was processed successfully");
            setProcessing(false);
            // save to database
            const paymentInfo = {
                paymentStatus: "Successful",
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                last4: paymentMethod.card.last4,
                transactionId: paymentIntent.id,
            };
            const url = `https://power-tools-server-nine.vercel.app/payment/${_id}`;
            fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(paymentInfo),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount) {
                        navigate("/order-success");
                    } else {
                        window.location.reload();
                    }
                });
        }
    };

    return (
        <div className="">
            <div className="flex flex-col items-center justify-center max-w-4xl p-6 bg-gray-100 rounded-lg shadow-md md:flex-row md:items-start md:space-x-8">
                <div className=" md:w-1/2">
                    <h2 className="mb-1 text-2xl font-semibold">Payment Details</h2>
                    <p className=""><strong>Product:</strong> {name}</p>
                    <p className=""><strong>Amount:</strong> ${price}</p>
                    <p className=""><strong>Order ID:</strong> {_id}</p>

                </div>
                <div className="mt-6 md:w-1/2 md:mt-0">
                    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md">
                        <div className="mb-4">
                            <CardElement
                                options={{
                                    style: {
                                        base: {
                                            fontSize: "16px",
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
                                className="p-3 border border-gray-300 rounded-lg"
                            />
                        </div>
                        {processing ? (
                            <p className="text-gray-500">Processing...</p>
                        ) : (
                            <button
                                className="w-full px-4 py-2 text-white transition-colors duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
                                type="submit"
                                disabled={!stripe || success}
                            >
                                Pay ${price}
                            </button>
                        )}
                    </form>
                    {error && <p className="mt-4 text-red-500">{error}</p>}
                    {success && <p className="mt-4 text-green-500">{success}</p>}
                </div>
            </div>
        </div>
    );
};
export default CheckOutForm;