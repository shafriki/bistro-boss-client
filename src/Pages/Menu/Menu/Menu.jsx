import React from 'react';
import { Helmet } from 'react-helmet';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Our Menu | Bistro Boss</title>
            </Helmet>
            <Cover image={menuImg} title="our menu"></Cover>
        </div>
    );
};

export default Menu;