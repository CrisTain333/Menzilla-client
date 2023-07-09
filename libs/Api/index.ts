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

export const getShopProduct = async (seller_id: string, currentPage: any = 1) => {
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
export const getAllProduct = async () => {
    try {
        const response = await axiosInstance.get(`/product`);
        return response.data;
    } catch (error) {
        return { error };
    }
};

export const getShopPreviewProduct = async (shopId: string) => {
    try {
        const response = await axiosInstance.get(`/product/preview?shopID=${shopId}`);
        return response.data;
    } catch (error) {
        return { error };
    }
};

export const getSellerOnly = async (id: any) => {
    try {
        const response = await axiosInstance.get(`/shop/seller?shopId=${id}`);
        return response.data;
    } catch (error) {
        return { error };
    }
};

export const updateProfilePicture = async (profileImage: any, userId: string) => {
    try {
        const response = await axiosInstance.patch(
            `/user/update-profile-picture?userId=${userId}`,
            profileImage
        );
        return response.data;
    } catch (error) {
        return { error };
    }
};
export const updateProfile = async (userinfo: any, userId: string) => {
    try {
        const response = await axiosInstance.patch(
            `/user/update-profile?userId=${userId}`,
            userinfo
        );
        return response.data;
    } catch (error) {
        return { error };
    }
};
export const addAddress = async (address: any, userId: string) => {
    try {
        const response = await axiosInstance.patch(`/user/add-address?userId=${userId}`, address);
        return response.data;
    } catch (error) {
        return { error };
    }
};

export const deleteAddress = async (addressId: any, userId: string) => {
    try {
        const response = await axiosInstance.delete(
            `/user/delete-address?addressId=${addressId}&userId=${userId}`
        );
        return response.data;
    } catch (error) {
        return { error };
    }
};

export const changePassword = async (data: any, userId: string) => {
    try {
        const response = await axiosInstance.patch(`/user/change-password?userId=${userId}`, data);
        return response.data;
    } catch (error) {
        return { error };
    }
};

export const createPaymentIntent = async (data: any) => {
    try {
        const response = await axiosInstance.post(`/payment/process`, data);
        return response.data;
    } catch (error) {
        return { error };
    }
};
export const createUserOrder = async (data: any) => {
    try {
        const response = await axiosInstance.post(`/orders/create-order`, data);
        return response.data;
    } catch (error) {
        return { error };
    }
};
export const getUserOrder = async (userId: any, currentPage: any = 1) => {
    try {
        const response = await axiosInstance.get(`/orders/${userId}?&page=${currentPage}`);
        return response.data;
    } catch (error) {
        return { error };
    }
};

export const getShopOrders = async (shopId: any, currentPage: any = 1) => {
    try {
        const response = await axiosInstance.get(`/orders/shop/${shopId}?&page=${currentPage}`);
        return response.data;
    } catch (error) {
        return { error };
    }
};

export const getSingleOrder = async (orderId: any) => {
    try {
        const response = await axiosInstance.get(`/orders/details/${orderId}`);
        return response.data;
    } catch (error) {
        return { error };
    }
};

export const updateOrderStatus = async (orderId: any, status: string) => {
    try {
        const response = await axiosInstance.patch(`/orders/update-status/${orderId}`, { status });
        return response.data;
    } catch (error) {
        return { error };
    }
};
export const updateShop = async (shopId: any, Data: any) => {
    try {
        const response = await axiosInstance.put(`/shop/update-profile/${shopId}`, { Data });
        return response.data;
    } catch (error) {
        return { error };
    }
};

export const updateShopProfilePicture = async (profileImage: any, shopId: string) => {
    try {
        const response = await axiosInstance.patch(
            `/shop/change-shop-profile?shopId=${shopId}`,
            profileImage
        );
        return response.data;
    } catch (error) {
        return { error };
    }
};

export const createConversation = async (data: any) => {
    try {
        const response = await axiosInstance.post(`/chat/create-conversation`, data);
        return response.data;
    } catch (error) {
        return { error };
    }
};
