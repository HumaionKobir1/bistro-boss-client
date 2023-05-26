import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import {Helmet} from "react-helmet";


const Home = () => {
    return (
        <div className="">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss || Home</title>
            </Helmet>

            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;