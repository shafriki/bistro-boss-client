import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularItem = () => {

    const [menu, setMenu] = useState([]);
    useEffect( ()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const PopularItems = data.filter(item => item.category === 'popular');
            setMenu(PopularItems)
        })
    }, [])
    return (
        <div className='max-w-screen-lg mx-auto mb-10'>
            <SectionTitle heading={'Popular Menu'} subHeading={'Check It Out'}>
            </SectionTitle>
            <div  className='grid md:grid-cols-2 gap-4'>
                {
                    menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularItem;