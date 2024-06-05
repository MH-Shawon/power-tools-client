import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
     
        return res.data;
    },
  });
  return (
    <div className="">
      <SectionTitle
        subHeading={"At a glance!"}
        heading="payment history"
      ></SectionTitle>
      <div className="h-[600px] mb-[150px] mx-auto w-[850px] bg-[#FFFFFF] p-12">
        <h4 className="font-cinzel uppercase font-bold text-3xl">
          Total payments:{payments.length}
        </h4>
        <div className=" rounded-lg overflow-x-auto mt-9 w-[740px] mx-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] h-[72px] rounded-lg">
              <tr className="uppercase text-center text-white">
                <th></th>
                
                <th>price</th>
                <th>Transaction Id</th>
                <th>status</th>
                <th>payment date</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {payments.map((item, index) => (
                <tr className="text-center" key={item._id}>
                  <td>{index + 1}</td>
                  <td>${item.price.toFixed(2)}</td>
                      <td className="text-center">{item.transactionId}</td>
                  <td>{item.status}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default PaymentHistory;
