import { getSellerOnly, getShopPreviewProduct } from '@/libs/Api';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ShopPreview = () => {
    const [sellerInfo, setSellerInfo] = useState<any>();
    const [products, setProducts] = useState([]);
    // const [products, setProducts] = useState([]);

    const router = useRouter();
    const shopId = router?.query?.shopId;
    // const products = useShopProducts(shopId as string);

    const getSellerDetails = async () => {
        const seller = await getSellerOnly(shopId);
        if (seller) {
            const shopProducts = await getShopPreviewProduct(shopId as string);
            setProducts(shopProducts?.data);
        }
        setSellerInfo(seller?.seller);
    };

    useEffect(() => {
        getSellerDetails();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
