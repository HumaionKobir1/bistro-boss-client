import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/DashBoard/MyCart";
import AllUser from "../pages/DashBoard/AllUser";
import AddItem from "../pages/DashBoard/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/DashBoard/ManageItems";
import Payment from "../pages/DashBoard/Payment";
import UserHome from "../pages/DashBoard/UserHome";
import AdminHome from "../pages/DashBoard/AdminHome";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/menu',
          element: <Menu></Menu>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
      children: [
        {
          path: 'userHome',
          element: <UserHome></UserHome>
        },
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        }, 
        {
          path: 'myCart',
          element: <MyCart></MyCart>
        },
        
        {
          path: 'payment',
          element: <Payment></Payment>
        },

        // admin route
        {
          path: 'allUsers',
          element: <AdminRoute><AllUser></AllUser></AdminRoute>
        },
        {
          path: 'addItem',
          element: <AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path: 'items',
          element: <AdminRoute><ManageItems></ManageItems> </AdminRoute>
        }
      ]
    }
  ]);

  export default router;