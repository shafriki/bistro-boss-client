import React from 'react';

const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item;

    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[104px]' src={image} alt="image" />
            <div>
                <h3 className='uppercase text-sm md:text-base'>{name}---------</h3>
                <p className='text-xs md:text-sm'>{recipe}</p>
            </div>
            <p className='text-amber-500'>${price}</p>
        </div>
    );
};

export default MenuItem;