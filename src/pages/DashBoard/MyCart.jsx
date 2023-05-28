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
            <div className="bg-white w-full p-8">
                <div className="uppercase flex justify-around md:gap-32 gap-4 py-3">
                    <h3 className="md:text-2xl ">Total Items: {cart.length}</h3>
                    <h3 className="md:text-2xl text-lg">Total Price: ${total}</h3>
                    <button className="btn btn-sm border-none bg-[#D1A054]">pay</button>
                </div>
            </div>
        </div>
    );
};

export default MyCart;