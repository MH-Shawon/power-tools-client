
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const CheckOut = () => {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  // buy now
  const onSubmit = (data) => {
    data.name = product.name;
    data.price = product.price;
    data.quantity = localStorage.getItem("quantity");
    data.status = "pending";
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          navigate(`/payment/${data.insertedId}`);
          reset();
          localStorage.removeItem("quantity");
        }
      });
  };
  return (
    <div className="p-20">
      <div className="grid grid-cols-6 gap-5">
        <div className="col-span-4 col-start-2 puchase-info-form">
          <h2 className="mt-10 mb-10 text-3xl text-center capitalize lg:mt-0">
            Fill up the form to buy
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="w-full py-3 pl-5 mb-5 border-b-2 rounded-full outline-none border-"
              {...register("name", { required: true })}
              placeholder="Your Name"
            />{" "}
            <br />
            <input
              className="w-full py-3 pl-5 mb-5 border-b-2 rounded-full outline-none border-"
              {...register("email", { required: true })}
              placeholder="Email"
            />{" "}
            <br />
            <input
              className="w-full py-3 pl-5 mb-5 border-b-2 rounded-full outline-none border-"
              {...register("address", { required: true })}
              placeholder="Your Address"
            />{" "}
            <br />
            <input
              className="w-full py-3 pl-5 mb-5 border-b-2 rounded-full outline-none border-"
              {...register("city", { required: true })}
              placeholder="City"
            />{" "}
            <br />
            <input
              className="w-full py-3 pl-5 mb-5 border-b-2 rounded-full outline-none border-"
              {...register("phone", { required: true })}
              type="number"
              placeholder="Your Phone Number"
            />{" "}
            <br />
            {/* errors will return when field validation fails  */}
            {errors.name ||
              errors.email ||
              errors.address ||
              errors.city ||
              errors.phone ? (
              <span className="pl-5 mb-3 font-semibold text-red-500">
                Please fill all the input correctly!
              </span>
            ) : (
              ""
            )}
            <input
              className="block py-2 mx-auto mt-3 text-lg bg-white border-2 rounded-full cursor-pointer border-secondary px-14"
              type="submit"
              value="Continue Payment"
            />
          </form>
          <div>
            <p className="px-10 mt-10 text-red-500">
              {" "}
              {`/*`} Please use the demo card number{" "}
              <span className="font-semibold">4242 4242 4242 4242</span> then
              you can use any future date and in cvc type 5 digit {`*/`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
