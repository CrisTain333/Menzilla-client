import { getSellerOnly, getShopProduct } from '@/libs/Api';
import { useSeller } from '@/libs/Context/sellerProvider';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ShopPreview = () => {
    const { allProducts } = useSeller();
    const [sellerInfo, setSellerInfo] = useState<any>();
    const [products, setProducts] = useState([]);

    const router = useRouter();
    const shopId = router?.query?.shopId;

    const getSellerDetails = async () => {
        const seller = await getSellerOnly(shopId);
        if (seller) {
            setSellerInfo(seller?.seller);
            const shopProducts = allProducts?.filter(
                (e: any) => e?.shop?.name === seller?.seller?.name
            );
            setProducts(shopProducts);
        }
    };

    useEffect(() => {
        getSellerDetails();
    }, [shopId]);

    return (
        <div>
            Preview: {sellerInfo?.name}
            <div>
                {products?.map((e: any, i: any) => {
                    return <p key={i}>{e.name}</p>;
                })}
            </div>
        </div>
    );
};

export default ShopPreview;
