import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import BistroSection from './BistroSection/BistroSection';
import PopularItem from './Menu/PopularItem';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroSection></BistroSection>
            <PopularItem></PopularItem>
        </div>
    );
};

export default Home;