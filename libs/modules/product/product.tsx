import { getAllProduct } from '@/libs/Api';
import ProductCard from '@/libs/Components/ProductCard/ProductCard';
import { useSeller } from '@/libs/Context/sellerProvider';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const Product = () => {
    const { allProducts, isProductLoading } = useSeller();
    console.log(allProducts);
    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { query } = router;
    const categoryData = query?.category;

    // const getProduct = async () => {
    //     setIsLoading(true);
    //     try {
    //         const result = await getAllProduct();
    //         setData(result?.data);
    //         setIsLoading(false);
    //     } catch (error) {
    //         setIsLoading(false);
    //         setData([]);
    //     }
    // };

    // useEffect(() => {
    //     getProduct();
    // }, []);

    // useEffect(() => {
    //     if (categoryData === null) {
    //         const d = productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    //         setData(d);
    //     } else {
    //         const d = productData && productData.filter((i) => i.category === categoryData);
    //         setData(d);
    //     }
    //     //    window.scrollTo(0,0);
    // }, [productData, categoryData]);
    // console.log(data);

    return (
        <div>
            <HeaderAndFooter>
                {isProductLoading ? (
                    <>
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
                    </>
                ) : (
                    <>
                        <div>
                            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px]  xl:gap-[30px] mb-12">
                                {allProducts &&
                                    allProducts?.map((i: any, index: any) => (
                                        <ProductCard data={i} key={index} />
                                    ))}
                            </div>
                            {allProducts && allProducts?.length === 0 ? (
                                <h1 className="text-center w-full font-mono font-bold text-5xl mb-40">
                                    No products Found!
                                </h1>
                            ) : null}
                        </div>
                    </>
                )}
            </HeaderAndFooter>
        </div>
    );
};

export default Product;
