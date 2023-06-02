import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();


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
                axiosSecure.delete(`/menu/${item._id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        refetch();
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
        <div className="w-full max-h-full md:p-16">
            <SectionTitle
                subHeading={"Hurry up!"}
                heading={"Manage All Items"}
            ></SectionTitle>

            <div className="bg-white w-full p-5">
                
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
                            <th>Update</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            menu.map((item, index) => <tr
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

                                <td>
                                    <button><FaEdit></FaEdit> </button>
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

export default ManageItems;