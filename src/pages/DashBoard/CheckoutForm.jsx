import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');

    const handleSubmit = async(event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('error', error);
            setCardError(error.message);
        }
        else{
            setCardError(' ');
            console.log('payment method', paymentMethod);
        }

    }
    return (
        <div>
            <form className="w-2/5 mx-auto" onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            <button className="p-2 rounded-lg flex justify-center mt-5 btn-primary w-72 mx-auto" type="submit" disabled={!stripe}>
                Pay
            </button>
            </form>
            {
                cardError && <p className="text-red-500 text-center mt-3">{cardError}</p>
            }
        </div>
    );
};

export default CheckoutForm;