import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PUBLISHABLE_KEY);
const Payment = () => {
  return (
    <div className="ml-[150px] max-w-[450px] mt-28 space-y-6">
      <div>
        <h3 className="text-[40px] text-center">Payment</h3>
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};
export default Payment;
