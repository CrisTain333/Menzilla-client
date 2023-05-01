import ProductCard from '@/libs/Components/ProductCard/ProductCard';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import { productData } from '@/libs/common/constant/Data';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const Product = () => {
    const [data, setData] = useState<any>([]);
    const router = useRouter();
    const { query } = router;
    const categoryData = query?.category;

    useEffect(() => {
        if (categoryData === null) {
            const d = productData && productData.sort((a, b) => b.total_sell - a.total_sell);
            setData(d);
        } else {
            const d = productData && productData.filter((i) => i.category === categoryData);
            setData(d);
        }
        //    window.scrollTo(0,0);
    }, [productData, categoryData]);
    console.log(data);

    return (
        <div>
            <HeaderAndFooter>
                <div>
                    <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px]  xl:gap-[30px] mb-12">
                        {data &&
                            data.map((i: any, index: any) => <ProductCard data={i} key={index} />)}
                    </div>
                    {data && data.length === 0 ? (
                        <h1 className="text-center w-full font-mono font-bold text-5xl mb-40">
                            No products Found!
                        </h1>
                    ) : null}
                </div>
            </HeaderAndFooter>
        </div>
    );
};

export default Product;
