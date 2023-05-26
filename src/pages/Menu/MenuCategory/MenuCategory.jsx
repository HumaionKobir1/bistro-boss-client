import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items, title, coverImg}) => {
    return (
        <div className="my-10">
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="md:my-10 my-7 max-w-screen-xl mx-auto mb-10">
                <div className="grid md:grid-cols-2 gap-5 px-3 text-center ">
                    {
                        items.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
                <div className="flex justify-center mt-8">
                <button className=" btn-outline w-56  mt-2 uppercase border-b-4 rounded-lg border-0 border-slate-700">ORDER YOUR FAVORITE FOOD</button>
                </div>
            </div>
        </div>
    );
};

export default MenuCategory;