import React from 'react';
import '../../assets/CSS/Features.css'

const Features = () => {
    return (
        <div className='grid p-20 feature-area lg:grid-cols-2 sm:grid-cols-1'>
            <div className="mb-10 text-feature lg:mb-0">
                <h2>
                    Don’t Wait For<br />
                    <span>Anything. Buy It Today!</span>
                </h2>
                <p className='text-black'>
                    Discover our exclusive April Sale and elevate your experience with our top-quality products.
                    Enjoy special discounts and find the perfect items that fit your needs.
                    From cutting-edge gadgets to stylish accessories, now is the best time to shop and save.
                    Don’t miss out on these limited-time offers—shop today and transform your lifestyle!
                </p>
                <button className='mt-5 btn bg-[#FBC42D] text-white'>
                    Shop April Sale
                </button>
            </div>
            <div className="img-banner">
                <img src="https://i.ibb.co/nb5DJqT/feature.png" alt="Featured products" />
            </div>
        </div>
    );
};

export default Features;

