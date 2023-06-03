import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useCart from "../../hooks/useCart";

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))

    const stripePromise = loadStripe('pk_test_51NETPuB9B9Ycv5F9H1vLDTjnKJ9Emytr1V98rYnGg7nlqLHt6QySQli0UEUJaxb3uINN40E9JS9fpL71cTMlX6aR00d6K6182B')
    return (
        <div className="w-full md:p-20 p-5">
            <SectionTitle
                subHeading={"Please process"}
                heading={"Payment"}
            ></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm cart={cart} price={price} ></CheckoutForm>
            </Elements>
        </div>
        
    );
};

export default Payment;