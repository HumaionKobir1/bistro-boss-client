import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBer/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='min-h-[calc(100vh-220px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;