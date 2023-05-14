import { useSeller } from '@/libs/Context/sellerProvider';
import { useRouter } from 'next/router';
import React from 'react';

const Shop = () => {
    const { currentSeller, isSeller } = useSeller();
    const router = useRouter();

    React.useEffect((): any => {
        const tokenStoragePath = 'accessToken';
        const token = localStorage.getItem(tokenStoragePath);
        if (!token && !currentSeller && !isSeller) {
            router.push('/auth/seller-login');
        }
    }, [currentSeller, isSeller, router]);

    return <div>Shop {currentSeller?.name}</div>;
};

export default Shop;
