import ProductDetail from '@/libs/Components/ProductDetail/ProductDetail';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import React from 'react';

const ProductDetails = ({ data }: any) => {
    return (
        <div>
            <HeaderAndFooter>
                <ProductDetail data={data} />
            </HeaderAndFooter>
        </div>
    );
};

export default ProductDetails;
