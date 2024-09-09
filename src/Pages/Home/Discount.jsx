import React from 'react';
import { Link } from 'react-router-dom';

const Discount = () => {
    return (
        <div style={{ marginTop: '60px', backgroundImage: 'url(https://i.ibb.co/WKvbd5Q/Offer-banner.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }}>
            <div className='grid grid-cols-1 p-20 md:grid-cols-2'>
                <div className='text-white'>
                    <h2 className='text-3xl font-bold'>Magnetic Drill machine</h2>
                    <p className='my-5'>Now In All Color Variant Avaiable Grab This Offer Now...</p>
                    <Link to={"/products"}>

                        <button className='btn btn-neutral hover:bg-[#FBC22B] hover:text-white'>Shop Now</button>
                    </Link>
                    
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Discount;