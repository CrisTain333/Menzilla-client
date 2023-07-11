import Setting from '@/libs/Components/Setting/Setting';
import { useSeller } from '@/libs/Context/sellerProvider';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import { useRouter } from 'next/router';
import React from 'react';

const Settings = () => {
    const { currentSeller, isSeller, isLoading } = useSeller();
    const router = useRouter();

    React.useEffect((): any => {
        if (isLoading === false) {
            if (!currentSeller) {
                router.push('/auth/seller-login');
            }
        }
    }, [currentSeller, isSeller, router]);
    return (
        <div>
            <HeaderAndFooter>
                <Setting />
            </HeaderAndFooter>
        </div>
    );
};

export default Settings;
