import { useSeller } from '@/libs/Context/sellerProvider';
import { useRouter } from 'next/router';
import React from 'react';

const Shop = () => {
    const { currentSeller } = useSeller();
    const router = useRouter();

    React.useEffect((): any => {
        const tokenStoragePath = 'accessToken';
        const token = localStorage.getItem(tokenStoragePath);
        if (!token && !currentSeller) {
            router.push('/');
        }
    }, [currentSeller]);
    return <div>Shop</div>;
};

export default Shop;
