import React from 'react';
import '../../assets/CSS/Features.css'

const Features = () => {
    return (
        <div className='grid p-20 feature-area lg:grid-cols-2 sm:grid-cols-1'>
            <div className="mb-10 text-feature lg:mb-0">
                <h2>Don’t Wait For<br /><span>anything. Buy it today!</span></h2>
                <p>consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexe rc itation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure.</p>
                <button className='mt-5 btn bg-[#FBC42D]'>Shop April Sale</button>
            </div>
            <div className="img-banner">
                < img src="https://i.ibb.co/nb5DJqT/feature.png" alt="tools" />
            </div>
        </div>
    );
};

export default Features;