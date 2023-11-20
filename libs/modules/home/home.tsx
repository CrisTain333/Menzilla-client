/* eslint-disable prettier/prettier */

import Banner from '@/libs/Components/Banner/Banner';
import BestDeals from '@/libs/Components/Home/BestDeals/BestDeals';
import Categories from '@/libs/Components/Home/Category/Category';
import Steps from '@/libs/Components/Home/Steps/Steps';
// import useOnScreen from '@/libs/Hooks/useOnScreen';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import Head from 'next/head';
import React from 'react';

const Home = ({ data }: any) => {
    return (
        <div className="">
            <Head>
                <title>Menzilla</title>
                <meta name="description" content={'Menzilla Home Page '} />
            </Head>
            <HeaderAndFooter>
                {/* MAIN DIV  */}
                <div className="main_div">
                    <Banner />
                    <Categories />
                    <BestDeals data={data} />
                    <Steps />
                </div>
            </HeaderAndFooter>
        </div>
    );
};

export default Home;
