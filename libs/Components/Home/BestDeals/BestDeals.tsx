import { productData } from '@/libs/common/constant/Data';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../ProductCard/ProductCard';
import styles from '@/styles/styles';

const BestDeals = () => {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        const d = productData && productData.sort((a, b) => b.total_sell - a.total_sell);
        const bestFive = d.slice(0, 5);
        setData(bestFive);
    }, []);

    return (
        <div>
            <div>
                <div className={`${styles.section}`}>
                    <div>
                        <h1 className="text-4xl text-center font-bold">Best Deals</h1>
                    </div>
                    <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
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
