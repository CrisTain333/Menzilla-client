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

    return <div>Shop {currentSeller?.name}</div>;
};

// export function getServerSideProps(context: any) {
//     // Fetch data based on the query parameters from the context object
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const { currentSeller } = useSeller();
//     return {
//         props: {
//             currentSeller: currentSeller
//         }
//     };
// }

export default Shop;
