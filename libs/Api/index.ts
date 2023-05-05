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
