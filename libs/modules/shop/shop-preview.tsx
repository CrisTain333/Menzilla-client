import { getSellerOnly } from '@/libs/Api';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const ShopPreview = () => {
    const [sellerInfo, setSellerInfo] = useState<any>();
    const [currentPage, setCurrentPage] = useState(1);
    const router = useRouter();
    const shopId = router?.query?.shopId;

    const getSellerDetails = async () => {
        const seller = await getSellerOnly(shopId);
        setSellerInfo(seller?.seller);
    };

    useEffect(() => {
        getSellerDetails();
    }, []);

    return <div>Preview :{shopId}</div>;
};

export default ShopPreview;
