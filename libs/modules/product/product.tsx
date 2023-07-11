import PROductCard from '@/libs/Components/ProductCard/PROUDCTcard';
import ProductCard from '@/libs/Components/ProductCard/ProductCard';
import { useSeller } from '@/libs/Context/sellerProvider';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const Product = () => {
    const { allProducts, isProductLoading } = useSeller();
    const [data, setData] = useState([]);
    const router = useRouter();
    const { query } = router;
    const categoryData = query?.category;

    useEffect(() => {
        if (categoryData) {
            const filteredProduct = allProducts.filter((i: any) => i.category === categoryData);
            setData(filteredProduct);
        } else {
            setData(allProducts);
        }
    }, [allProducts, categoryData]);

    // useEffect(() => {
    //     if (categoryData !== null) {
    //         const filteredProduct =
    //             allProducts && allProducts.filter((i: any) => i.category === categoryData);
    //         setData(filteredProduct);
    //     }
    //     //    window.scrollTo(0,0);
    // }, [allProducts]);

    return (
        <div>
            <HeaderAndFooter>
                {isProductLoading ? (
                    <div className="flex items-center justify-center my-10">
                        <ThreeCircles
                            height="100"
                            width="100"
                            color="#ff9900"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel="three-circles-rotating"
                            outerCircleColor=""
                            innerCircleColor=""
                            middleCircleColor=""
                        />
                    </div>
                ) : (
                    <div className="grid grid-cols-12">
                        <div className="col-span-2"></div>
                        <div className="col-span-10">
                            <div>
                                {data?.length === 0 ? (
                                    <>
                                        <div>
                                            <h1 className="text-center w-full font-mono font-bold text-5xl mb-40">
                                                No products Found!
                                            </h1>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] mb-12">
                                            {data?.map((item: any, index: any) => {
                                                return <PROductCard data={item} key={index} />;
                                            })}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </HeaderAndFooter>
        </div>
    );
};

export default Product;
