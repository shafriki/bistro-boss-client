import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center w-3/4 md:w-3/12 mb-7'>
            <p className=' text-yellow-600 mb-1 text-sm md:text-lg'>---{subHeading}---</p>
            <p className='text-xl md:text-3xl font-semibold uppercase border-y-4 py-1 md:py-3'>{heading}</p>
        </div>
    );
};

export default SectionTitle;