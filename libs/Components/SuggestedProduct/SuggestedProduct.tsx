/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
// import ProductCard from '../ProductCard/ProductCard';
import styles from '@/styles/styles';
// import { productData } from '@/libs/common/constant/Data';
import { useSeller } from '@/libs/Context/sellerProvider';
import PROductCard from '../ProductCard/PROUDCTcard';

const SuggestedProduct = ({ data }: any) => {
    const { allProducts } = useSeller();
    const [products, setProducts] = useState<any>(null);

    useEffect(() => {
        const d =
            allProducts &&
            allProducts.filter((i: any) => i?.category === data?.category)?.slice(0, 8);
        setProducts(d);
    }, []);

    return (
        <div>
            {data ? (
                <div className={`p-4 ${styles.section}`}>
                    <h2 className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}>
                        Related Product
                    </h2>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px]  mb-12">
                        {products &&
                            products.map((i: any, index: any) => (
                                <PROductCard data={i} key={index} />
                            ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default SuggestedProduct;
