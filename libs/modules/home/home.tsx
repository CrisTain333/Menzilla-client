import Banner from '@/libs/Components/Banner/Banner';
import BestDeals from '@/libs/Components/Home/BestDeals/BestDeals';
import Categories from '@/libs/Components/Home/Category/Category';
import Sponsor from '@/libs/Components/Home/Sponser/Sponser';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import React from 'react';

const Home = () => {
    return (
        <div className="">
            <HeaderAndFooter>
                {/* MAIN DIV  */}
                <div className="main_div">
                    <Banner />
                    <Categories />
                    <BestDeals />
                    <Sponsor />
                </div>
            </HeaderAndFooter>
        </div>
    );
};

export default Home;
