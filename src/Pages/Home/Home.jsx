import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import BistroSection from './BistroSection/BistroSection';
import PopularItem from './Menu/PopularItem';
import Featured from './Featured/Featured';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Bistro Boss</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <BistroSection></BistroSection>
            <PopularItem></PopularItem>
            <Featured></Featured>
        </div>
    );
};

export default Home;