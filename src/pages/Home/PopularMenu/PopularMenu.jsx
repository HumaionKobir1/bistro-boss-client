import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems);
        })
    }, [])
    return (
        <section className="md:my-10 my-7">
            <SectionTitle
                subHeading={"Check it out"}
                heading = {"FROM OUR MENU"}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-5 px-3 text-center">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;