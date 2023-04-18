import { createBrowserRouter } from "react-router-dom";
import Header from "../Component/Header/Header.jsx";
import Home from "../Component/Home/Home.jsx";
import Shop from "../Component/Shop/Shop.jsx";
import Order from "../Component/Order/Order.jsx";
import OrderReview from "../Component/OrderReview/OrderReview.jsx";
import Inventory from "../Component/Inventory/Inventory.jsx";
import Login from "../Component/Login/Login"
import productAndCartData from "../productAndCartData/productAndCartData.js";
import CheckOut from "../Component/Home/CheckOut/CheckOut.jsx";
import SignUp from "../Component/SignUp/SignUp.jsx";
import RequireAuth from "../RequireAuth/RequireAuth.jsx";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Header></Header>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/shop',
        element: <RequireAuth><Shop></Shop></RequireAuth>,
        loader: productAndCartData
      },
      {
        path: '/order',
        element: <Order></Order>,
        loader: productAndCartData
      },
      {
        path: '/orderReview',
        element: <OrderReview></OrderReview>,
      },
      {
        path: '/inventory',
        element: <Inventory></Inventory>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <SignUp></SignUp>,
      },
      {
        path: '/checkOut',
        element: <RequireAuth><CheckOut></CheckOut></RequireAuth>
      }
    ]
  }
])