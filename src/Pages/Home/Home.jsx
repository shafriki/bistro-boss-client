import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import BistroSection from './BistroSection/BistroSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroSection></BistroSection>
        </div>
    );
};

export default Home;