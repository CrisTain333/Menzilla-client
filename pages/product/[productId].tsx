import { productData } from '@/libs/common/constant/Data';
import ProductDetails from '@/libs/modules/product-details/product-details';
import { useRouter } from 'next/router';
import React from 'react';

const ProductDetailsPage = ({ productData }: any) => {
    return (
        <div>
            {' '}
            <ProductDetails data={productData} />{' '}
        </div>
    );
};

export function getServerSideProps(context: any) {
    // Fetch data based on the query parameters from the context object
    const { query } = context;
    const productNAME = query?.productId;
    const data = productData?.find((i) => i.name === productNAME);
    console.log(data);
    return {
        props: {
            productData: data
        }
    };
}

export default ProductDetailsPage;
