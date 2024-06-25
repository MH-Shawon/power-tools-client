import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import useOrder from "../../Hooks/useOrder";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyBookings = () => {
  //   const [orders, setorders] = useState([]);
  //   const [isDelete, setIsDelete] = useState(null);
  //   const { user } = useAuth();

  //   useEffect(() => {
  //     fetch(`https://power-tools-server-nine.vercel.app/orders?email=${user.email}`)
  //       .then((res) => res.json())
  //       .then((data) => setorders(data));
  //   }, [user.email]);
  const [orders, refetch] = useOrder()

  const handleDeleteOrder = (order) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axios.delete(
          `https://power-tools-server-nine.vercel.app/delete-order/${order._id}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
        );
        if (res.data.deletedCount > 0) {
          refetch()
          toast.success(`${order.name} is successfully deleted from DB`);


        }
      }
    });
  };
  return (
    <div className="container w-[1050px] py-10 mx-auto text-center">
      <h5 className="mb-2 text-2xl font-black text-start">Total Orders:{orders.length}</h5>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase "
                    >
                      order Name
                    </th>
                    <th
                      scope="col"
                      className="py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase "
                    >
                      Order Id
                    </th>
                    <th
                      scope="col"
                      className="py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase "
                    >
                      Quantity
                    </th>
                    {/* <th
                      scope="col"
                                          className="py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase "
                    >
                      Address
                    </th> */}
                    <th
                      scope="col"
                      className="py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase "
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase "
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map((order) => (
                    <tr key={order._id}>
                      <td className="py-4 whitespace-nowrap">
                        <div className="">
                          <div className="text-sm font-medium text-gray-900 capitalize">
                            {order.name}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order._id}
                        </div>
                      </td>
                      <td className="py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.quantity}
                        </div>
                      </td>
                      {/* <td className="py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.address}
                        </div>
                      </td> */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                          {order.status}
                        </span>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDeleteOrder(order)}
                          className="text-2xl font-black text-center hover:text-red-400"
                        >
                          <MdDeleteOutline />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
