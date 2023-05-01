import Banner from '@/libs/Components/Banner/Banner';
import Cart from '@/libs/Components/Cart/Cart';
import SimpleNav from '@/libs/Components/Header/SimpleNav';
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
                    <Cart />
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
