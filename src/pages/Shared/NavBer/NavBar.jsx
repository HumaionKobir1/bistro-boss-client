import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";


const NavBar = () => {
    const {user, logOut} = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    const handleLogOut = () => {
        logOut()
        .then(()=> { })
        .catch(error => console.log(error))
    }
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        <li><Link to={isAdmin ? '/dashboard/adminHome' : '/dashboard/userHome'}>Dashboard</Link></li>
        <li>
            <Link to='/dashboard/myCart'>
                <button className="btn gap-2">
                    <FaShoppingCart className="w-4 h-4"></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li>
        
    </>
    return (
        <>
          <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content bg-black mt-3 p-2 shadow  rounded-box w-52">
                    {navOptions}
                </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <span><img className="w-10 h-10 rounded-full mr-4" src={user?.photoURL} title={user?.displayName} alt="" /></span>
                        <button onClick={handleLogOut} className="btn btn-outline text-white mr-5">LogOut</button>

                    </> : <>
                        <li className="btn btn-outline text-white mr-5"><Link to='/login'>Login</Link></li>
                    </>
                }
            </div>
          </div>   
        </>
    );
};

export default NavBar;