import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [successRating, setSuccessRating] = useState(false);

  const onSubmit = (data) => {
    fetch("http://localhost:5000/rating", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccessRating(true);
          reset();
        } else {
          setSuccessRating(false);
        }
      });
  };
  return (
    <div className="ml-10 text-center">
      <h2 className="mb-5 text-4xl text-center">Review Our Service</h2>
      {successRating && (
        <p className="mb-3 font-semibold text-red-500">
          Rating Successfully added.
        </p>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-2/3 py-3 pl-5 mb-5 border-b-2 rounded-full outline-none border-secondary"
          type="name"
          {...register("Name", { required: true })}
          placeholder="Your Name"
        />{" "}
        <br />
        <input
          className="w-2/3 py-3 pl-5 mb-5 border-b-2 rounded-full outline-none border-secondary"
          type="designation"
          {...register("designation", { required: true })}
          placeholder="Your Job Title"
        />{" "}
        <br />
        <div>
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label key={i}>
                <input
                  {...register("rating", { required: true })}
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                />
                <FaStar
                  color={
                    ratingValue <= (hover || rating) ? "#ffc107" : "e4e5e9"
                  }
                  className="inline-block text-4xl star"
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(null)}
                ></FaStar>
              </label>
            );
          })}
        </div>
        <textarea
          className="w-2/3 py-3 pl-5 mt-5 mb-5 border-2 rounded-full outline-none border-secondary"
          {...register("Review")}
        />{" "}
        <br />
        <input
          type="url"
          className="w-2/3 py-3 pl-5 mb-5 border-b-2 rounded-full outline-none border-secondary"
          {...register("img", { required: true })}
          placeholder="Your Profile image url"
        />{" "}
        <br />
        <button
          type="submit"
          className="px-10 text-black bg-white border-2 rounded-full btn border-secondary"
        >
          Submit Rating
        </button>
      </form>
    </div>
  );
};

export default AddReview;
