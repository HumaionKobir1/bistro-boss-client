import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = ({price}) => {
    const {user} = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', {price})
        .then(res => {
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret);
        })
    }, [])

    const handleSubmit = async(event) => {
        event.preventDefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }

        const {error} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if(error){
            console.log('error', error);
            setCardError(error.message);
        }
        else{
            setCardError('');
        }

        setProcessing(true);

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  email: user?.email || 'unknown',
                  name: user?.displayName || 'anonymous'
                },
              },
            },
          );

          if(confirmError){
            console.log(confirmError);
          }

          setProcessing(false);
          if(paymentIntent.status === 'succeeded'){
            setTransactionId(paymentIntent.id)


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
            <button className="btn p-2 rounded-lg flex justify-center mt-5 btn-primary w-72 mx-auto" type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
            </form>
            {
                cardError && <p className="text-red-500 text-center mt-3">{cardError}</p>
            }
            {
                transactionId && <p className="text-green-500 text-center mt-3">Transaction complete with TransactionId: {transactionId}</p>
            }
        </div>
    );
};

export default CheckoutForm;