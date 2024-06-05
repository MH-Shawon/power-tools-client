import { RiDeleteBin5Line } from "react-icons/ri";
import SectionTitle from "../../../Components/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import axios from "axios";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();

  const totalPrice = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(1);
  const handleDelete = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {


        axios.delete(`https://bistro-boss-server-wine-omega.vercel.app/carts/${id}`)
          .then(res => {
            refetch()
            if (res.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });


  }
  return (
    <div className="bg-[#F6F6F6]">
      <SectionTitle
        heading="WANNA ADD MORE?"
        subHeading="my cart"
      ></SectionTitle>
      <div className="bg-[#FFF] w-[800px] min-h-screen ml-[130px] static top-0">
        <div className="font-cinzel flex justify-around pt-12 font-bold text-3xl text-[#151515]">
          <h4>TOTAL ORDERS:{cart.length}</h4>
          <h4>TOTAL price:${totalPrice}</h4>

          {
            cart.length ? <Link to='/dashboard/payment'>
              <button className="bg-[#D1A054] text-[20px] rounded-lg text-white pb-1 px-4">
                pay
              </button>
            </Link> :
              <button disabled className="bg-[#CCCCCC] text-[20px] rounded-lg text-white pb-1 px-4">
                pay
              </button>

          }


        </div>

        <div className=" rounded-lg overflow-x-auto mt-9 w-[740px] mx-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054] h-[72px] rounded-lg">
              <tr className="uppercase text-center text-white">
                <th></th>
                <th>item image</th>
                <th>item Name</th>
                <th>price</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {cart.map((item, index) => (
                <tr className="text-center" key={item._id}>
                  <th>{index + 1}</th>
                  <td className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt={item.name} />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td className="text-center">
                    <button onClick={() => handleDelete(item._id)} className="bg-[#B91C1C] text-white px-3 py-1 rounded w-[40px] h-[40px]">
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

export default Cart;
