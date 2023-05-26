import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/home/chef-service.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div className="">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <div>
                <div>
                    <Cover img={menuImg} title="OUR MENU"></Cover>
                    <SectionTitle subHeading={"Don't Miss"} heading={"TODAY OFFER"}></SectionTitle>
                    <MenuCategory items={offered} btnName="See All Menu"></MenuCategory>
                </div>

                <div className="my-10">
                    <MenuCategory items={dessert} title="dessert" coverImg={dessertImg} btnName=""></MenuCategory>
                </div>

                <div>
                    <MenuCategory items={pizza} title="pizza" coverImg={pizzaImg}></MenuCategory>
                </div>

                <div>
                    <MenuCategory items={salad} title="salad" coverImg={saladImg}></MenuCategory>
                </div>

                <div>
                    <MenuCategory items={soup} title="soup" coverImg={soupImg}></MenuCategory>
                </div>
            </div>
        </div>
    );
};

export default Menu;