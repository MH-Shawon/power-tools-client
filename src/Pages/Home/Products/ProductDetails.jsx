import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const product = useLoaderData();

  const navigate = useNavigate();

  // const history = useHistory()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("quantity", data.quantity);
    if (data.quantity < 15) {
      return alert("Quantity must be 15 or bigger than 15");
    }
    data.quantity = product.quantity - data.quantity;
    fetch(`http://localhost:5000/product/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log()
        if (data.modifiedCount) {
          // navigate(`/checkOut/${product._id}`);
          reset();
        }
      });
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
              Model <span className="text-gray-600">{product.model}</span>
            </p>
            <p className="text-xl font-semibold">
              Quantity <span className="text-gray-600">{product.quantity}</span>
            </p>
            <p className="text-xl font-semibold">
              Price <span className="text-gray-600">${product.price}</span>
            </p>
            <p className="font-medium ">
              Product Details{" "}
              <span className="text-gray-600">{product.description}</span>
            </p>
            <p className="description">{product.body}</p>
            <div className="puchase-info-form">
              <h2 className="mt-3 mb-3 text-2xl text-center capitalize lg:mt-0">
                Enter Quantity to Continue
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="w-full py-2 pl-5 border-b-2 rounded-full outline-none border-"
                  {...register("quantity", { required: true })}
                  min="15"
                  max={product.quantity}
                  type="number"
                  placeholder={`Enter Min 15 Tools Or max ${product.quantity}`}
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
                  value="Purchase"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
