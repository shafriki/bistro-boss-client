import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dImg from '../../../assets/menu/dessert-bg.jpeg';
import pImg from '../../../assets/menu/pizza-bg.jpg';
import PopularItem from '../../Home/Menu/PopularItem';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Our Menu | Bistro Boss</title>
            </Helmet>
            <Cover image={menuImg} title="our menu"></Cover>
            <div className='my-16'>
            <PopularItem></PopularItem>
            </div>

            <Cover image={dImg} title="our menu"></Cover>
            <div className='my-16'>
            <PopularItem></PopularItem>
            </div>

            <Cover image={pImg} title="our menu"></Cover>
            <div className='my-16'>
            <PopularItem></PopularItem>
            </div>
        </div>
    );
};

export default Menu;