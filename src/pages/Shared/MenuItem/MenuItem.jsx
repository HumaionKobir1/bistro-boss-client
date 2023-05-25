
const MenuItem = ({item}) => {
    const {image, price, name, recipe} = item;

    return (
        <div className="flex md:flex-row flex-col md:space-x-4 space-y-4 md:justify-start justify-center md:text-start text-center md:bg-white bg-slate-100 md:rounded-none rounded-lg md:p-0 p-2">
            <img className="w-[120px] mx-auto" style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
            <div>
                <h3 className="text-2xl">{name}<span className="md:block hidden">--------------------------------------</span></h3>
                <p>{recipe}</p>
            </div>
            <p className="text-amber-400">${price}</p>
        </div>
    );
};

export default MenuItem;