import Banner from '@/libs/Components/Banner/Banner';
import Categories from '@/libs/Components/Home/Category/Category';
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
                </div>
            </HeaderAndFooter>
        </div>
    );
};

export default Home;
