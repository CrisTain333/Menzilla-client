import { useSeller } from '@/libs/Context/sellerProvider';
import ProductDetails from '@/libs/modules/product-details/product-details';
import { useRouter } from 'next/router';
import React from 'react';

const ProductDetailsPage = () => {
    const { allProducts } = useSeller();
    const router = useRouter();
    const productName = router?.query?.productId;
    const data = allProducts?.find((i: any) => i.name === productName);
    return (
        <div>
            {' '}
            <ProductDetails data={data} />{' '}
        </div>
    );
};

export default ProductDetailsPage;
