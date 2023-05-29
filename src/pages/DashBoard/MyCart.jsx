import { Helmet } from "react-helmet";
import useCart from "../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item)=> item.price + sum, 0);

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE',
                    
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                            ) 
                    }
                })
                
        }
})
    }
    return (
        <div className="w-10/12">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss || My Cart</title>
            </Helmet>
            <div className="bg-white w-full p-8">
                <div className="uppercase flex justify-evenly md:gap-32 gap-4 py-3">
                    <h3 className="md:text-2xl ">Total Items: {cart.length}</h3>
                    <h3 className="md:text-2xl text-lg">Total Price: ${total}</h3>
                    <button className="btn btn-sm border-none bg-[#D1A054]">pay</button>
                </div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                        <tr>
                            <th>
                            <label>
                                #
                            </label>
                            </th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} />
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    {item.name}
                                </td>
                                <td className="text-start">
                                    ${item.price}
                                </td>
                                <th>
                                <button onClick={()=>handleDelete(item)} className="btn btn-ghost btn-sm bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }
                        


                        </tbody>
                        
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;