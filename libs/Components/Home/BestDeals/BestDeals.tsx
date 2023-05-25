import React, { useEffect, useState } from 'react';
import ProductCard from '../../ProductCard/ProductCard';
import { getAllProduct } from '@/libs/Api';

import { ThreeCircles } from 'react-loader-spinner';

const BestDeals = () => {
    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState(false);

    const getProduct = async () => {
        setIsLoading(true);
        try {
            const result = await getAllProduct();
            const d =
                result?.data && result?.data.sort((a: any, b: any) => b.sold_out - a.sold_out);
            const bestFive = d.slice(0, 8);
            setData(bestFive);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setData([]);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    if (isLoading) {
        return (
            <>
                <div className="flex items-center justify-center">
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
        );
    }

    return (
        <div>
            <div>
                <div>
                    <div>
                        <h1 className="text-4xl text-center font-bold">Best Deals</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-5  mb-12 border-0">
                        {data && data.length !== 0 && (
                            <>
                                {data &&
                                    data.map((i: any, index: any) => (
                                        <ProductCard data={i} key={index} />
                                    ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestDeals;
