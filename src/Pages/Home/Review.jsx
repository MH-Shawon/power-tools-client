import React, { useEffect, useState } from "react";

import { FaStar, FaStarHalfAlt } from "react-icons/fa";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/CSS/Review.css";
import Rating from "react-rating";

const Review = () => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    fetch("https://power-tools-server-nine.vercel.app/rating")
      .then((res) => res.json())
      .then((data) => setRatings(data));
  }, []);
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div>
      <div className="px-5 py-5 overflow-x-hidden text-black md:container md:mx-auto lg:px-0 md:py-16">
        <div className="text-center section-title mb-14">
          <h2 className="text-3xl font-semibold capitalize">
            Our customer reviews
          </h2>
          <span className="block h-1 mx-auto mt-3 w-28 bg-[#FBC42D]"></span>
          <span className="block w-20 h-1 mx-auto mt-1 bg-[#A61719]"></span>
        </div>
        <div className="grid grid-cols-6">
          <div className="col-span-4 col-start-2">
            <Slider {...settings}>
              {ratings.map((rating) => (
                <div key={rating._id}>
                  <div className="px-10 py-10 text-center border-2 single-review border-[#FBC42D] rounded-tl-3xl rounded-br-3xl">
                    <img
                      className="mx-auto mb-5 rounded-full w-28"
                      src={rating.img}
                      alt=""
                    />
                    <div className="review-text">
                      <div>
                        <Rating
                          emptySymbol={
                            <FaStarHalfAlt className="text-xl text-gray-600" />
                          }
                          fullSymbol={
                            <FaStar className="text-xl text-yellow-600" />
                          }
                          initialRating={`${rating.rating}`}
                          readonly
                        />
                      </div>
                      <h2 className="my-3 text-2xl font-semibold text-gray-800">
                        {rating.Name}
                      </h2>
                      <h4 className="mb-2 text-xl font-semibold capitalize">
                        {rating.designation}
                      </h4>
                      <p className="font-medium">{rating.Review}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
