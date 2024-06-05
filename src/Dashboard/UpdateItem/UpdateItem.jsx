import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { GrUpdate } from "react-icons/gr";
import { useLoaderData } from "react-router-dom";

const UpdateItem = () => {
  const { _id, name, model, price, quantity, img, description } =
    useLoaderData();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const updateProduct = {
      name: data.name,
      model: data.model,

      description: data.description,
      price: parseFloat(data.price),
      quantity: data.quantity,
      
  }
    const res = await axios.put(
      `http://localhost:5000/products/${_id}`,
      updateProduct,{
        headers:{
          authorization:`Bearer ${localStorage.getItem('token')}`
        }
      }
    
    );
    

    if (res.data.modifiedCount > 0) {
      reset();
      toast.success(`${name} has been updated successfully`);
    }
  };
  return (
    <div className="mb-12 ">
      <h1 className="text-[40px] text-center mt-8 mb-8 uppercase">
        update item
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="w-[740px] mx-auto  ">
        <div className="col-span-1 px-12 py-6 bg-[#F3F3F3] rounded shadow-md space-y-6">
          <div className="flex w-full gap-6">
            <div className="w-1/2">
              <h2>Product Name*</h2>
              <input
                defaultValue={name}
                placeholder="Product name"
                {...register("name", { required: true })}
                className="w-full px-2 py-1 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
              />
              {errors.recipeName && (
                <span className="error">Product Name is required</span>
              )}
            </div>
            <div className="w-1/2">
              <h2>Product model*</h2>
              <input
                defaultValue={model}
                placeholder="Product model"
                {...register("model", { required: true })}
                className="w-full px-2 py-1 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
              />
              {errors.recipeName && (
                <span className="error">Recipe Name is required</span>
              )}
            </div>
          </div>

          <div className="flex w-full gap-6">
            <div className="w-1/2">
              <h2>Price*</h2>
              <input
                defaultValue={price}
                placeholder="Price"
                {...register("price", { required: true })}
                className="w-full px-2 py-1 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
              />
              {errors.price && <span className="error">Price is required</span>}
            </div>

            <div className="w-1/2">
              <h2>Quantity*</h2>
              <input
                defaultValue={quantity}
                placeholder="Quantity"
                {...register("quantity", { required: true })}
                className="w-full px-2 py-1 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
              />
              {errors.price && <span className="error">Price is required</span>}
            </div>
          </div>

          <h2>Product Details*</h2>
          <textarea
            defaultValue={description}
            placeholder="Product Details"
            {...register("description", { required: true })}
            className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1  mt-2 w-full h-[100px]"
          />
          {errors.recipeDetails && (
            <span className="error">Product Details are required</span>
          )}

          <input
            type="file"
            {...register("img", )}
            className="block w-full p-3 text-base font-normal text-gray-700 transition ease-in-out bg-white border-gray-300 rounded cursor-pointer bg-clip-border focus:outline-none file:mr-4 file:py-2 file:px-3 file:rounded-full file:bg-blue-500 file:text-white"
          />

          <button
            type="submit"
            className="flex gap-1 font-bold text-black rounded items-center justify-center w-full text-[20px] bg-[#FBC42D] px-4 py-1"
          >
            Update Product <GrUpdate />
          </button>
        </div>
      </form>
    </div>
  );
};
export default UpdateItem;
