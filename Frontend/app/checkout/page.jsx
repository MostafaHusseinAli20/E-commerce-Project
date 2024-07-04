"use client"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./_components/CheckoutForm";
import { useSearchParams } from "next/navigation";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
function checkout() {
    const searchParam = useSearchParams()
    const options = {
        mode : 'payment',
        currency : 'usd',
        amount : Number(searchParam.get('amount'))
    }
    return ( 
        <>
            <Elements options={options} stripe={stripePromise}>
                <CheckoutForm amount={searchParam.get('amount')}/>
            </Elements>
        </>
     );
}

export default checkout;