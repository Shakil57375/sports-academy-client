import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";
import {loadStripe} from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PASSWORD_KEY)
const Payment = () => {
    return (
        <div>
            <SectionTitle title={"Payment"} subTitle={"Make your payment to enroll"}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>            
        </div>
    );
};

export default Payment;