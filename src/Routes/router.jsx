import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Error/NotFound";
import AllProducts from "../Pages/Home/Products/AllProducts/AllProducts";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import DashboardLayout from "../Layouts/DashboardLayout";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/signUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddItem from "../Dashboard/AddItem/AddItem";
import AllUsers from "../Layouts/AllUsers/AllUsers";
import ManageProducts from "../Dashboard/ManageProducts/ManageProducts";
import UpdateItem from "../Dashboard/UpdateItem/UpdateItem";
import AdminHome from "../Dashboard/AdminHome/AdminHome";
import UserHome from "../Dashboard/UserHome/UserHome";

import ProductDetails from "../Pages/Home/Products/ProductDetails";
import AdminRoute from "./AdminRoute";
import EditUser from "../Dashboard/EditUser/EditUser";
import CheckOut from "../Dashboard/Payment/CheckOut/CheckOut";
import Payment from "../Dashboard/Payment/Payment";
import OrderSuccess from "../Dashboard/Payment/OrderSuccess/OrderSuccess";
import MyBookings from "../Dashboard/MyBookings/MyBookings";
import AddReview from "../Dashboard/AddReview/AddReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <AllProducts />,
        loader: () => fetch("https://power-tools-server-nine.vercel.app/products"),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://power-tools-server-nine.vercel.app/products/${params.id}`),
      },
      {
        path: "/checkOut/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/:id",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "/order-success",
        element: (
          <PrivateRoute>
            <OrderSuccess />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/addItems",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/manageProducts",
        element: (
          <AdminRoute>
            <ManageProducts />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://power-tools-server-nine.vercel.app/products/${params.id}`),
      },
      {
        path: "/dashboard/admin-home",

        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },

      // user route

      {
        path: "/dashboard/user-home",
        element: <UserHome />,
      },
      {
        path: "/dashboard/edit-user/:id",
        element: <EditUser />,
        loader: ({ params }) =>
          fetch(`https://power-tools-server-nine.vercel.app/user/${params.id}`),
      },
      {
        path: "/dashboard/my-booking",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/review",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
