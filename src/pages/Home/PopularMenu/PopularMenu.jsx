import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    
    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems);
    //     })
    // }, [])


    return (
        <section className="md:my-10 my-7 max-w-screen-xl mx-auto">
            <SectionTitle
                subHeading={"Check it out"}
                heading = {"FROM OUR MENU"}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-5 px-3 text-center mb-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
                <button className="btn btn-outline w-40 mt-2 uppercase border-b-4 rounded-lg border-0 border-slate-700">SEE ALL MENU</button>
            </div>
        </section>
    );
};

export default PopularMenu;