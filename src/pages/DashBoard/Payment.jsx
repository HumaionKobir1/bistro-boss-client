import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useCart from "../../hooks/useCart";

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))

    const stripePromise = loadStripe(process.meta.env.VITE_Payment_Gateway_pk)
    return (
        <div className="w-full md:p-20 p-5">
            <SectionTitle
                subHeading={"Please process"}
                heading={"Payment"}
            ></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price}></CheckoutForm>
            </Elements>
        </div>
        
    );
};

export default Payment;