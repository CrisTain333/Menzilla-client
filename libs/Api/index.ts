import axiosInstance from '../common/utils/axios';

export const registerUser = async (userData: any) => {
    try {
        const response = await axiosInstance.post(`/api/v1/auth/register`, userData);
        return response.data;
    } catch (err) {
        return { err };
    }
};
