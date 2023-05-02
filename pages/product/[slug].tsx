import ProductDetails from '@/libs/modules/product-details/product-details';
import { useRouter } from 'next/router';
import React from 'react';

const ProductDetailsPage = () => {
    const router = useRouter();
    const { slugId } = router.query;
    return (
        <div>
            <ProductDetails slugId={slugId} />
        </div>
    );
};

export default ProductDetailsPage;
