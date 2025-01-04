import React from 'react';
import chef from '../../../assets/home/chef-service.jpg';

const BistroSection = () => {
    return (
        <div className='relative max-w-screen-lg mx-auto mb-10 h-[14rem] md:h-[20rem]'>
            {/* Background Image */}
            <div
                className='absolute inset-0 bg-cover bg-center'
                style={{ backgroundImage: `url(${chef})` }}
            ></div>

            {/* Text Overlay */}
            <div className='absolute inset-0 flex items-center justify-center bg-black opacity-55 font-bold'>
            </div>
            <div className='absolute border-2 border-amber-500 top-14 right-11 w-3/4 md:w-3/5 text-center md:top-24 md:right-52 justify-center bg-white py-3 px-2 md:py-9 opacity-85 '>
            <h1 className='md:text-2xl font-bold'>Bistro Boss</h1>
            <h2 className='text-xs md:text-base'>Bistro Boss offers an unforgettable dining experience with delicious dishes, a cozy ambiance, and exceptional service for every guest.</h2>
            </div>
        </div>
    );
};

export default BistroSection;
