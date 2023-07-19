import Banner from '@/libs/Components/Banner/Banner';
import BestDeals from '@/libs/Components/Home/BestDeals/BestDeals';
import Categories from '@/libs/Components/Home/Category/Category';
import Sponsor from '@/libs/Components/Home/Sponser/Sponser';
// import useOnScreen from '@/libs/Hooks/useOnScreen';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import Head from 'next/head';
import React from 'react';

const Home = () => {
    // const categoriesRef: any = useRef();
    // const bestDealsRef: any = useRef();
    // const categoriesRefValue = useOnScreen(categoriesRef);
    // const bestDealsRefValue = useOnScreen(bestDealsRef);
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
                    {/* <div ref={categoriesRef}>{categoriesRefValue && <Categories />}</div>
                    <div ref={bestDealsRef}>{bestDealsRefValue && <BestDeals />}</div> */}
                    <Categories />
                    <BestDeals />
                    <Sponsor />
                </div>
            </HeaderAndFooter>
        </div>
    );
};

export default Home;
