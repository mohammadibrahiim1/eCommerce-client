import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop";
import Cart from "../Pages/Cart/Cart";
import WishList from "../Pages/WishList/WishList";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import TrackOrder from "../Pages/TrackOrder/TrackOrder";
import Compare from "../Pages/Compare/Compare";
import CustomerSupport from "../Pages/CustomerSupport/CustomerSupport";
import BillingDetails from "../Pages/BillingDetails/BillingDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import OrderInvoice from "../Pages/OrderInvoice/OrderInvoice";
import MyOrders from "../Pages/MyOrders/MyOrders";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";
import UserDashboard from "../Layout/UserDashboard/UserDashboard";
import OrderHistory from "../Pages/OrderHistory/OrderHistory";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/store",
        element: (
          <PrivateRoute>
            <Shop></Shop>
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "/wishList",
        element: <WishList></WishList>,
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/api/v1/products/${params.id}`),
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/trackOrder",
        element: <TrackOrder></TrackOrder>,
      },
      {
        path: "/compare",
        element: <Compare></Compare>,
      },
      // {
      //   path: "/myOrders",
      //   element: <MyOrders></MyOrders>,
      // },
      {
        path: "/billingDetails",
        element: <BillingDetails></BillingDetails>,
      },
      {
        path: "/orderInvoice",
        element: <OrderInvoice></OrderInvoice>,
      },

      {
        path: "/customerSupport",
        element: <CustomerSupport></CustomerSupport>,
      },
    ],
  },

  {
    path: "/admin",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/admin/orderHistory",
        element: <OrderHistory></OrderHistory>,
      },
    ],
  },
  {
    path: "/user",
    element: <UserDashboard></UserDashboard>,
    children: [
      {
        path: "/user/myOrders",
        element: <MyOrders></MyOrders>,
      },
    ],
  },
]);
