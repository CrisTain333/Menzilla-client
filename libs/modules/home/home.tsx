/* eslint-disable prettier/prettier */
import { Button } from '@/components/ui/button';
import { getAllProduct } from '@/libs/Api';
import Banner from '@/libs/Components/Banner/Banner';
import BestDeals from '@/libs/Components/Home/BestDeals/BestDeals';
import Categories from '@/libs/Components/Home/Category/Category';
import Sponsor from '@/libs/Components/Home/Sponser/Sponser';
import Steps from '@/libs/Components/Home/Steps/Steps';
// import useOnScreen from '@/libs/Hooks/useOnScreen';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import axiosInstance from '@/libs/common/utils/axios';
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
                    <Button>Click me</Button>
                    <Categories />
                    <BestDeals data={data} />
                    <Steps />
                </div>
            </HeaderAndFooter>
        </div>
    );
};

export default Home;
