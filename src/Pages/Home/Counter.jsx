import React from 'react';
import '../../assets/CSS/Counter.css'
import { FaUsersCog, FaRegIdCard, FaTools, FaDeezer } from "react-icons/fa";

const Counter = () => {
    return (
        <div style={{ backgroundImage: 'url(https://i.ibb.co/VVY98Bx/counter-bg.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
            className='grid grid-cols-1 gap-6 py-20 text-center lg:grid-cols-4'>
            <div className="counter">
                <FaUsersCog className='counter-icon' />
                <span>399+</span>
                <h2>we served</h2>
            </div>
            <div className="counter">
                <FaDeezer className='counter-icon' />
                <span>123M+</span>
                <h2>Anual revenue</h2>
            </div>
            <div className="counter">
                <FaRegIdCard className='counter-icon' />
                <span>83K+</span>
                <h2>customers Reviews</h2>
            </div>
            <div className="counter">
                <FaTools className='counter-icon' />
                <span>210+</span>
                <h2>our tools</h2>
            </div>
        </div>
    );
};

export default Counter;