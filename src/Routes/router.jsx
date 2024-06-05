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
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/productDetails/:id",
        element: <ProductDetails />,
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`),
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
    element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    children:[
      {
        path:'/dashboard/addItems',
        element: <AdminRoute><AddItem /></AdminRoute>
      },
      {
        path:'/dashboard/manageProducts',
        element:<AdminRoute>
          <ManageProducts />
        </AdminRoute>
      },
      {
        path:'/dashboard/users',
        element: <AdminRoute><AllUsers /></AdminRoute>
      },
      {
        path:'/dashboard/updateItem/:id',
        element: <AdminRoute><UpdateItem /></AdminRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path: '/dashboard/admin-home',
      
          element: <AdminRoute > <AdminHome></AdminHome></AdminRoute>
      },

      {
        path:'/dashboard/user-home',
        element:<UserHome />
      },
      {
        path: "/dashboard/edit-user/:id",
        element: <EditUser />,
        loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`)
      }
      
    ]
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
