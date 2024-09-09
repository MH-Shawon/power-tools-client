import React from 'react';
import { FaPiggyBank, FaHeadset, FaShippingFast } from "react-icons/fa";

const Service = () => {
    return (
        <div className='grid grid-cols-1 gap-5 p-20 text-center text-black lg:grid-cols-3'>
            <div className="service">
                <FaPiggyBank className='inline-block mb-4 text-5xl text-center' />
                <h2 className='text-xl font-bold'>Big Savings</h2>
                <p>Get Big Discount Everyday</p>
            </div>
            <div className="service">
                <FaHeadset className='inline-block mb-4 text-5xl text-center' />
                <h2 className='text-xl font-bold'>24*7 Support</h2>
                <p>Awesome Support Everyday</p>
            </div>
            <div className="service">
                <FaShippingFast className='inline-block mb-4 text-5xl text-center' />
                <h2 className='text-xl font-bold'>Free Shipping</h2>
                <p>On Order Over $ 150.00</p>
            </div>
        </div>
    );
};

export default Service;