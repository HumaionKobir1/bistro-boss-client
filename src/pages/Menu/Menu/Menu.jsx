import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
    return (
        <div className="">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <div>
                <Cover img={menuImg} title="Our Menu"></Cover>
                <PopularMenu></PopularMenu>

                <Cover img={menuImg} title="Our Menu"></Cover>
                <PopularMenu></PopularMenu>
                
                <Cover img={menuImg} title="Our Menu"></Cover>
                <PopularMenu></PopularMenu>
            </div>
        </div>
    );
};

export default Menu;