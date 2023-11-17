import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFromLocalStorage } from '@/libs/common/Helper/localStorage';
import { IInitialState } from '@/libs/types/common';
import { authKey } from '@/libs/common/constant/storageKey';
import axiosInstance from '@/libs/common/utils/axios';

export const getUser = createAsyncThunk('auth/getUser', async () => {
    const response = await getUserProfile();
    return response;
});

const initialState: IInitialState = {
    user: null,
    token: getFromLocalStorage(authKey) as string,
    isLoading: true,
    error: false,
    errorMessage: ''
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem(authKey, action.payload);
        },
        logout: (state) => {
            state.user = null;
            state.token = '';
            localStorage.removeItem(authKey);
        },
        setLoadingFalse: (state, action) => {
            state.isLoading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.error = false;
                state.user = null;
                state.errorMessage = '';
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.user = action?.payload?.data;
                state.isLoading = false;
                state.error = false;
                state.errorMessage = '';
            })
            .addCase(getUser.rejected, (state, action) => {
                state.user = null;
                state.isLoading = false;
                state.error = true;
                state.errorMessage = action.error.message!;
                state.token = '';
                localStorage.removeItem(authKey);
            });
    }
});

export const { setUser, setToken, logout, setLoadingFalse } = authSlice.actions;

export default authSlice.reducer;

const getUserProfile = async () => {
    try {
        const response = await axiosInstance.get(`/user/me`);
        return response?.data;
    } catch (e: any) {
        throw new Error(e?.response?.data?.message);
        // return e;
    }
};
