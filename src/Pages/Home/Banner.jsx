import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/CSS/Banner.css'
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos';


Aos.init()

const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        arrows: false,
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
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };
    // data-aos="zoom-in" data-aos-duration="2000" data-aos-delay='300'
    return (
        <div>
            <Slider {...settings}>
                <div className='bg-black bg-opacity-50 slider-bg slide-1 slider-box bg-blend-overlay'>
                    <div className="mb-5 text-center hero-text md:mb-0">
                        <h2 className='mb-5 text-3xl font-medium text-white capitalize lg:text-6xl'>Best power tools and sales available</h2>
                        <p className='mb-5 text-white'>Our power tools are made to live on the jobsite. That’s where they’re tested. And if there’s a problem, it’s where we solve it. The result is tools that we can stand behind.</p>
                        <Link to='/explore-cars'>
                            <button className='px-8 py-2 mb-1 mr-3 text-white duration-300 border-2 border-transparent rounded-full bg-[#A61719] focus:ring-2 ring-offset-2 ring-red-500 md:font-medium hover:border-red-500 hover:bg-white hover:text-red-500 md:text-lg'>Explore Tools</button>
                        </Link>
                        <Link to='/about'>
                            <button className='px-8 py-2 mr-3 text-black duration-300 border-2 border-transparent rounded-full bg-[#FBC42D] focus:ring-2 ring-offset-2 ring-red-500 md:font-medium hover:border-red-500 hover:bg-white hover:text-red-500 md:text-lg'>About Us</button>
                        </Link>
                    </div>
                </div>
                <div className='bg-black bg-opacity-50 slider-bg slide-2 slider-box bg-blend-overlay'>
                    <div className="mb-5 text-center hero-text md:mb-0">
                        <h2 className='mb-5 text-4xl font-medium text-white capitalize lg:text-6xl'>New Collections and reparing</h2>
                        <p className='mb-5 text-white'>Our power tools are made to live on the jobsite. That’s where they’re tested. And if there’s a problem, it’s where we solve it. The result is tools that we can stand behind.</p>
                        <Link to='/explore-cars'>
                            <button className='px-8 py-2 mr-3 text-black duration-300 border-2 border-transparent rounded-full bg-[#FBC42D] focus:ring-2 ring-offset-2 ring-red-500 md:font-medium hover:border-secondary hover:bg-white hover:text-black md:text-lg'>Explore Tools</button>
                        </Link>
                    </div>
                </div>
                <div className='bg-black bg-opacity-50 slider-bg slide-3 slider-box bg-blend-overlay'>
                    <div className="mb-5 text-center hero-text md:mb-0">
                        <h2 className='mb-5 text-4xl font-medium text-white capitalize lg:text-6xl'>Want to Look Dewalt Tools</h2>
                        <p className='mb-5 text-white'>Our power tools are made to live on the jobsite. That’s where they’re tested. And if there’s a problem, it’s where we solve it. The result is tools that we can stand behind.</p>
                        <Link to='/explore-cars'>
                            <button className='px-8 py-2 mr-3 text-black duration-300 border-2 border-transparent rounded-full bg-[#FBC42D] focus:ring-2 ring-offset-2 ring-red-500 md:font-medium hover:border-secondary hover:bg-white hover:text-black md:text-lg'>Explore Tools</button>
                        </Link>
                    </div>
                </div>
            </Slider>
            {/* <div className="items-center px-5 py-10 overflow-x-hidden md:container md:mx-auto lg:px-0">
                <div className="grid items-center grid-cols-1 gap-4 lg:grid-cols-2">
                    <div className="mb-5 hero-text md:mb-0" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay='300'>
                        <h2 className='mb-5 text-4xl font-medium text-gray-700 capitalize lg:text-6xl'>Best car solution <br /> and sales available</h2>
                        <p className='mb-5 md:font-medium'>We are a company who sales latest brand car from direct car company.A lot of car collection is available at our showroom.We are a renowned company all over the world for car wholesale.</p>
                        <Link to='/explore-cars'>
                            <button className='px-8 py-2 mr-3 text-white duration-300 bg-red-500 border-2 border-transparent rounded-full focus:ring-2 ring-offset-2 ring-red-500 md:font-medium hover:border-red-500 hover:bg-white hover:text-red-500 md:text-lg'>Explore Cars</button>
                        </Link>
                        <Link to='/about'>
                            <button className='px-8 py-2 mr-3 text-white duration-300 bg-red-500 border-2 border-transparent rounded-full focus:ring-2 ring-offset-2 ring-red-500 md:font-medium hover:border-red-500 hover:bg-white hover:text-red-500 md:text-lg'>About Us</button>
                        </Link>
                    </div>
                    <div className="overflow-hidden rounded-md hero-img" data-aos="fade-left" data-aos-duration="2000" data-aos-delay='300'>
                        <img className='z-0 transition-all duration-300 transform rounded-md hover:scale-105' src="https://image.freepik.com/free-photo/woman-sitting-red-car-receiving-keys_1303-14094.jpg" alt="" />
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Banner;