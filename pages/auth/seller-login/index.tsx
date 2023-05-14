// import { useSeller } from '@/libs/Context/sellerProvider';
import SellerLogin from '@/libs/modules/entrance/seller-login';
// import { useRouter } from 'next/router';
import React from 'react';

const index = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // const { isSeller, currentSeller } = useSeller();
    // eslint-disable-next-line prettier/prettier, react-hooks/rules-of-hooks

    return (
        <div>
            <SellerLogin />
        </div>
    );
};

export default index;
