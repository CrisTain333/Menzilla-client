import ShopInfo from '@/libs/Components/Shop/ShopInfo';
import ShopProfileData from '@/libs/Components/Shop/ShopProfileData';
import { useSeller } from '@/libs/Context/sellerProvider';
import { useRouter } from 'next/router';
import React from 'react';

const Shop = () => {
    const { currentSeller, isSeller } = useSeller();
    const router = useRouter();

    React.useEffect((): any => {
        if (!currentSeller && !isSeller) {
            router.push('/auth/seller-login');
        }
    }, [currentSeller, isSeller, router]);
    return (
        <div>
            <div className="px-10 mx-auto">
                <div className="w-full flex py-10 justify-between">
                    <div className="w-[25%] bg-slate-50 rounded-[4px] shadow-sm overflow-y-scroll h-[90vh] sticky top-10 left-0 z-10">
                        <ShopInfo isOwner={true} />
                    </div>
                    <div className="w-[72%] rounded-[4px]">
                        <ShopProfileData isOwner={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
