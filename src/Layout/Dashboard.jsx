import { NavLink, Outlet } from "react-router-dom";
import { FaBars, FaBook, FaCalendar, FaFirstOrder, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();

    // TODO: load data from the server to have dynamic tis Admin base on
    const isAdmin = true;

    return (
        <div className="">
            
            <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div> 
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            isAdmin ? 
                            <>
                                <li><NavLink to="/dashboard/home"><FaHome></FaHome>Admin Home</NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaUtensils></FaUtensils> Add Items</NavLink></li>
                                <li><NavLink to="/dashboard/items"><FaWallet></FaWallet>Manage Items</NavLink></li>
                                <li><NavLink to="/dashboard/bookings"><FaBook></FaBook> Manage Bookings</NavLink></li>
                                <li><NavLink to="/dashboard/allUsers"><FaUsers></FaUsers> All Users</NavLink></li>
                                <div className="divider"></div>
                                <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                                <li><NavLink to='/menu'><FaBars></FaBars>Our Menu</NavLink></li>
                                <li><NavLink to='/order/salad'><FaFirstOrder></FaFirstOrder> Order Food</NavLink></li>
                                
                            </> 
                            : 
                            <>
                                <li><NavLink to="/dashboard/home"><FaHome></FaHome>Home</NavLink></li>
                                <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar>Reservations</NavLink></li>
                                <li><NavLink to="/dashboard/myCart"><FaShoppingCart></FaShoppingCart>My Cart
                                    <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                </NavLink></li>
                                <div className="divider"></div>
                                <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                                <li><NavLink to='/menu'><FaBars></FaBars>Our Menu</NavLink></li>
                                <li><NavLink to='/order/salad'><FaFirstOrder></FaFirstOrder> Order Food</NavLink></li>
                            </>
                        }
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default Dashboard;