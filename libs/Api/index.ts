import axiosInstance from '../common/utils/axios';

export const registerUser = async (userData: any) => {
    try {
        const response = await axiosInstance.post(`/auth/register`, userData);
        return response.data;
    } catch (err) {
        return { err };
    }
};

export const shopRegister = async (shopData: object) => {
    try {
        const response = await axiosInstance.post(`/shop/register`, shopData);
        return response.data;
    } catch (error) {
        return { error };
    }
};
export const shopLogin = async (loginDetails: object) => {
    try {
        const response = await axiosInstance.post(`/shop/login`, loginDetails);
        return response.data;
    } catch (error) {
        return { error };
    }
};

export const createProduct = async (ProductData: object) => {
    try {
        const response = await axiosInstance.post(`/product/create-product`, ProductData);
        return response.data;
    } catch (error) {
        return { error };
    }
};

export const getShopProduct = async (seller_id: string, currentPage: any) => {
    try {
        const response = await axiosInstance.get(
            `/product/shop-products?sellerId=${seller_id}&page=${currentPage}`
        );
        return response.data;
    } catch (error) {
        return { error };
    }
};
export const deleteShopProduct = async (product_id: string) => {
    try {
        const response = await axiosInstance.delete(
            `/product/delete-product?productId=${product_id}`
        );
        return response.data;
    } catch (error) {
        return { error };
    }
};
