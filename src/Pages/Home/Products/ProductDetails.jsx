import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [showFullDescription, setShowFullDescription] = useState(false);

  const onSubmit = (data) => {
    localStorage.setItem("quantity", data.quantity);
    if (data.quantity < 15) {
      return alert("Quantity must be 15 or bigger than 15");
    }
    data.quantity = product.quantity - data.quantity;
    axios.put(`https://power-tools-server-nine.vercel.app/product/${product._id}`, data).then((response) => {
      if (response.data.acknowledged) {
        navigate(`/checkOut/${product._id}`);
        reset();
      }
    });
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const renderDescription = () => {
    const wordLimit = 50;
    const words = product.description.split(" ");
    if (words.length <= wordLimit) {
      return product.description;
    }
    if (showFullDescription) {
      return product.description;
    }
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div className="py-20">
      <div className="container px-5 mx-auto lg:px-0">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="car-details">
            <img style={{ width: "80%" }} src={product.img} alt="" />
          </div>
          <div>
            <h3 className="my-3 text-2xl font-semibold capitalize">
              {product.name}
            </h3>
            <p className="text-xl font-semibold">
              Model: <span className="text-gray-600">{product.model}</span>
            </p>
            <p className="text-xl font-semibold">
              Quantity: <span className="text-gray-600">{product.quantity}</span>
            </p>
            <p className="text-xl font-semibold">
              Price: <span className="text-gray-600">${product.price}</span>
            </p>
            <p className="font-medium">
              Product Details{" "}
              <span className="text-gray-600">{renderDescription()} </span>
              {product.description.split(" ").length > 50 && (
                <button onClick={toggleDescription} className="text-blue-500">
                  {showFullDescription ? "See Less" : "See More"}
                </button>
              )}
              {showFullDescription && (
                <div className="mt-4 full-details">
                  <p>{product.body}</p>
                </div>
              )}
            </p>

            {product.quantity == 0 ? (
              <p className="mt-3 mb-3 font-bold text-red-500">
                Product is out of stock
              </p>
            ) : (
              <div className="purchase-info-form">
                <h2 className="mt-3 mb-3 text-2xl text-center capitalize lg:mt-0">
                  Enter Quantity to Continue
                </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    className="w-full py-2 pl-5 border-b-2 rounded-full outline-none"
                    {...register("quantity", { required: true })}
                    min="15"
                    max={product.quantity}
                    type="number"
                    placeholder={`Enter Min 15 Tools Or max ${product.quantity}`}
                    disabled={product.quantity == 0}
                  />{" "}
                  <br />
                  {/* errors will return when field validation fails */}
                  {errors.quantity && (
                    <span className="pl-5 mb-3 font-semibold text-red-500">
                      Please enter a valid quantity!
                    </span>
                  )}
                  <input
                    className="block py-2 mx-auto mt-3 text-lg font-bold bg-white border-2 rounded-full cursor-pointer border-[#F2BB29] px-14"
                    type="submit"
                    value="Purchase"
                    disabled={product.quantity == 0}
                  />
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProductDetails;
