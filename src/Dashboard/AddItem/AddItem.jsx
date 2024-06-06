import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AiOutlineProduct } from "react-icons/ai";
import { FaUtensils } from "react-icons/fa";


const img_hosting_api_key = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;

const img_hosting_api_link = `https://api.imgbb.com/1/upload?key=${img_hosting_api_key}`;

const AddItem = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {

    const imageFile = { image: data.img[0] };
    const res = await axios.post(img_hosting_api_link, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        model: data.model,

        description: data.description,
        price: parseFloat(data.price),
        quantity: data.quantity,
        img: res.data.data.display_url,
      };
      const menuRes = await axios.post("http://localhost:5000/products", menuItem, {
        headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
      );
      if (menuRes.data.insertedId) {
        reset();
        toast.success(`${data.name} added to the menu`)

      }
    }
  };
  return (
    <div className="mb-12">

      <h4 className="my-5 text-3xl font-bold text-center underline">Add Product</h4>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[740px] mx-auto  "
      >
        <div className="col-span-1 px-12 py-6 bg-[#F3F3F3] rounded shadow-md space-y-6">
          <div className="flex w-full gap-6">
            <div className="w-1/2">
              <h2>Product Name*</h2>
              <input
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
                placeholder="Price"
                {...register("price", { required: true })}
                className="w-full px-2 py-1 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
              />
              {errors.price && <span className="error">Price is required</span>}
            </div>

            <div className="w-1/2">
              <h2>Quantity*</h2>
              <input
                placeholder="Quantity"
                {...register("quantity", { required: true })}
                className="w-full px-2 py-1 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
              />
              {errors.price && <span className="error">Price is required</span>}
            </div>
          </div>

          <h2>Product Details*</h2>
          <textarea
            placeholder="Product Details"
            {...register("description", { required: true })}
            className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1  mt-2 w-full h-[100px]"
          />
          {errors.recipeDetails && (
            <span className="error">Product Details are required</span>
          )}

          <input
            type="file"
            {...register("img", { required: true })}
            className="block w-full p-3 text-base font-normal text-gray-700 transition ease-in-out bg-white border-gray-300 rounded cursor-pointer bg-clip-border focus:outline-none file:mr-4 file:py-2 file:px-3 file:rounded-full file:bg-blue-500 file:text-white"
          />

          <button
            type="submit"
            className="flex gap-1 font-bold text-black rounded items-center justify-center w-full text-[20px] bg-[#FBC42D] px-4 py-1"
          >
            Add Product <AiOutlineProduct />
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddItem;
