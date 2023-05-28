import { Helmet } from "react-helmet";
import useCart from "../../hooks/useCart";

const MyCart = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item)=> item.price + sum, 0);
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss || My Cart</title>
            </Helmet>
            <div className="">
                <h3 className="text-3xl">Total Items: {cart.length}</h3>
                <h3 className="text-3xl">Total Price: ${total}</h3>
            </div>
        </div>
    );
};

export default MyCart;