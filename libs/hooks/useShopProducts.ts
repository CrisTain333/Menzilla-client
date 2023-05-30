import { useEffect, useState } from 'react';
import { getShopPreviewProduct } from '@/libs/Api';

const useShopProducts = (shopId: string) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchShopProducts = async () => {
            const shopProducts = await getShopPreviewProduct(shopId);
            const filteredProducts = shopProducts.filter(
                (product: any) => product?.shop?.id === shopId
            );
            setProducts(filteredProducts);
        };

        fetchShopProducts();
    }, [shopId]);

    return products;
};

export default useShopProducts;
