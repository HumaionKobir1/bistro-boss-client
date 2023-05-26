
const FoodCard = ({item}) => {
    const {name, image, recipe, price } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body">
                <h2 className="card-title text-center flex justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center mt-4">
                <button className="text-[#BB8506] border border-b-4 hover:bg-black px-7 py-3 bg-slate-200 shadow-lg border-[#BB8506] font-semibold rounded-lg">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;