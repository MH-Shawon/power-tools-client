import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { FaUsers } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/users");
      
      return res?.data;
    },
  });

  const handleMakeAdmin = (user) => {
    axios.put(`http://localhost:5000/users/admin/${user._id}`).then((res) => {
      

      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDelete = (user) => {
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/users/${user._id}`).then((res) => {
          refetch();
          if (res.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="bg-[#F6F6F6]">
      
      <div className="bg-[#FFF] w-[800px] min-h-screen ml-[130px] static top-0">
        <h4 className="font-cinzel pl-8 pt-12 font-bold text-3xl text-[#151515]">
          TOTAL users:{users.length}
        </h4>

        <div className=" rounded-lg overflow-x-auto mt-9 w-[740px] mx-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] h-[72px] rounded-lg">
              <tr className="text-center text-white uppercase">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {users?.map((user, index) => (
                <tr className="text-center" key={user._id}>
                  <th>{index + 1}</th>

                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="text-white px-3 py-1 rounded w-[40px] h-[40px] bg-[#D1A054]"
                      >
                        <FaUsers></FaUsers>
                      </button>
                    )}
                  </td>

                  <td className="text-center">
                    <button
                      onClick={() => handleDelete(user)}
                      className="bg-[#B91C1C] text-white px-3 py-1 rounded w-[40px] h-[40px]"
                    >
                      <RiDeleteBin5Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AllUsers;
