import axiosInstance from '../common/utils/axios';

export const registerUser = async (userData: any) => {
    try {
        const response = await axiosInstance.post(`/auth/register`, userData);
        return response.data;
    } catch (err) {
        return { err };
    }
};

// export const login = async (userData: any) => {
//     try {
//         const response = await axiosInstance.post(`/auth/login`, userData);
//         return response.data;
//     } catch (err) {
//         return { err };
//     }
// };
