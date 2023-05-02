import React from 'react';

const ProductDetails = ({ data }: any) => {
    console.log(data);
    return (
        <div>
            <p>{data?.name}</p>
        </div>
    );
};

export default ProductDetails;
