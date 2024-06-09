import {
  FaBook,
  FaCalendarAlt,
  FaHome,
  FaList,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";

import {
  MdEditCalendar,
  MdEmail,
  MdOutlinePayment,
  MdProductionQuantityLimits,
  MdReviews,
} from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

import Loading from "../Components/Loading";

const DashboardLayout = () => {
    
  const [admin] = useAdmin();
  return (
    <div className="flex text-[#151515] font-cinzel  bg-[#F6F6F6]">
      <div className="bg-[#FBC42D] w-[280px] min-h-screen pl-8  font-medium">
        <div className="pl-6 mt-8 text-4xl font-black">
          <h2>DeWALT</h2>
        </div>
        <div className="divider w-[200px] pl-[18px]"></div>
        <ul className="mt-8 space-y-2 uppercase menu">
          {admin ? (
            <>
              <li>
                <NavLink to="/dashboard/admin-home">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <MdProductionQuantityLimits />
                  Add Product
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageProducts">
                  <FaList></FaList>
                  Manage Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook></FaBook>
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/user-home">
                  {" "}
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  {" "}
                  <FaCalendarAlt />
                  reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  {" "}
                  <MdOutlinePayment />
                  payment history
                </NavLink>
              </li>
              {/* <li>
                                    <NavLink to="/dashboard/cart">
                                        {" "}
                                        <FaCartShopping />
                                        My Cart({cart.length})
                                    </NavLink>
                                </li> */}
              <li>
                <NavLink to="/dashboard/review">
                  {" "}
                  <MdReviews />
                  add Review
                </NavLink>
              </li>
              <li>
                                  <NavLink to="/dashboard/my-booking">
                  {" "}
                  <MdEditCalendar />
                  my booking
                </NavLink>
              </li>
            </>
          )}

          <div className="w-[200px] pl-[18px] menu ">
            <p className="border "></p>
          </div>
        </ul>
        <ul className="space-y-2 uppercase menu">
          <li>
            <NavLink to="/">
              {" "}
              <FaHome />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/products">
              {" "}
              <GiShoppingBag />
              shop
            </NavLink>
          </li>
          <li>
            <NavLink to="dashboard/contact">
              {" "}
              <MdEmail />
              contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;
