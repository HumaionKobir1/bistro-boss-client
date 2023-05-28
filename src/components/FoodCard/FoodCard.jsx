import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodCard = ({item}) => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const {name, image, recipe, price } = item;

    const handleAddToCart = item => {
        console.log(item);
        if(user){
            fetch('http://localhost:5000/carts')
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                        // showClass: {
                        //   popup: 'animate__animated animate__fadeInDown'
                        // },
                        // hideClass: {
                        //   popup: 'animate__animated animate__fadeOutUp'
                        // }
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login');
                }
              })
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body">
                <h2 className="card-title text-center flex justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center mt-4">
                <button onClick={()=>handleAddToCart(item)} className="text-[#BB8506] border border-b-4 hover:bg-black px-7 py-3 bg-slate-200 shadow-lg border-[#BB8506] font-semibold rounded-lg">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;