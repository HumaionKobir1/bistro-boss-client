import Swal from "sweetalert2";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();

    const handleAddItem = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const category = form.category.value;
        const details = form.details.value;
        // Image Upload
        const image = form.img.files[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

        fetch(url, {
            method: 'POST',
            body: formData
        })

        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const newItem = {name, price: parseFloat(price), category, details, image: imgURL}
                axiosSecure.post('menu', newItem)
                .then(data => {
                    if(data.data.insertedId){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })

        
    }
    return (
        <div className="w-full">
            
            <SectionTitle
                subHeading={"What's New"}
                heading={"Add an Item"}
            ></SectionTitle>


            <div className="w-full md:w-5/6 mx-auto px-3 py-5 bg-gray-100">
                <h1 className="text-2xl font-bold my-4 text-center text-gray-600">Add A Toy</h1>
                <form onSubmit={handleAddItem} className="md:w-9/12 mx-auto rounded-lg bg-white shadow-lg p-8">
                    <div className="mb-4">
                        
                        <div className="w-full md:mb-0 mb-4">
                        <label htmlFor="Title" className="block font-medium">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="border border-gray-300 p-2 w-full"
                            required
                        />
                        </div>
                    </div>

                    

                    <div className="mb-4 md:flex gap-5">
                        <div className="w-full md:mb-0 mb-4">
                        <label htmlFor="category" className="block font-medium">Category:</label>
                        <select
                            id="category"
                            className="border border-gray-300 p-2 w-full"
                            name="category"
                            required
                        >
                            <option disabled selected>Pick one</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="salad">Salad</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                        </select>
                        </div>
                        <div className="w-full md:mb-0 mb-4">
                        <label htmlFor="price" className="block font-medium">Price:</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            className="border border-gray-300 p-2 w-full"
                            required
                        />
                        </div>
                    </div>
                    
                    
                    <div className=" md:mb-0 mb-4">
                    <label htmlFor="description" className="block font-medium">Detail Description:</label>
                    <textarea
                        id="description"
                        className="border border-gray-300 p-2 w-full h-24"
                        name="details"
                        required
                    ></textarea>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="file" className="block font-medium">
                        Choose File:
                        </label>
                        <input
                        type="file"
                        id="file"
                        name="img"
                        className="border border-gray-300 p-2 w-full"
                        onChange={' '}
                        />
                    </div>
                    <button type="submit" className="w-full bg-[#D1A054] hover:bg-[rgb(231,161,144)] text-gray-800 font-bold py-2 px-4 rounded">
                    Add Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;