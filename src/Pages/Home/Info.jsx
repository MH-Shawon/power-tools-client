import React from 'react';

const Info = () => {
    return (
        <div className='grid gap-5 px-20 text-center lg:grid-cols-2 sm:grid-cols-1'>
            <div className="card card-compact bg- shadow-xl p-3 bg-[#2E2E2E]">
                <div className="block p-5 lg:flex lg:flex-row lg:justify-between lg:items-center">
                    <div className='text-white '>
                        <p className='uppercase'>From, Bestelliers</p>
                        <h2 className="flex justify-center my-3 text-2xl card-title">WORX Tools</h2>
                        <button className="btn btn-sm bg-[#FBC42D] mt-4">Buy Now</button>
                    </div>
                    <div className='justify-end'>
                        <img style={{ width: 200 }} src="https://i.ibb.co/K56fVps/drill.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="card card-compact bg- shadow-xl p-3 bg-[#FE9116]">
                <div className="block p-5 lg:flex lg:flex-row lg:justify-between lg:items-center">
                    <div className='text-white'>
                        <p className='uppercase'>From, Bestelliers</p>
                        <h2 className="flex justify-center my-3 text-2xl card-title">WORX Tools</h2>
                        <button className="mt-4 btn btn-sm btn-neutral">Buy Now</button>
                    </div>
                    <div className='justify-end'>
                        <img style={{ width: 250 }} src="https://i.ibb.co/Hdgf9Fz/gun.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;