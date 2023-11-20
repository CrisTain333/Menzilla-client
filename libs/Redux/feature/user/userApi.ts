import { api } from '../../api/index';

export const userApi: any = api.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => ({
                url: `/user/me`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}` // Add your authorization header here
                }
            }),
            providesTags: ['user']
        }),
        registerUser: builder.mutation({
            query: (data: any) => ({
                url: `/auth/register`,
                method: `POST`,
                body: data
            }),
            invalidatesTags: ['user']
        }),
        loginUser: builder.mutation({
            query: (credential: any) => ({
                url: '/auth/login',
                method: `POST`,
                body: credential
            })
        })
    }),
    overrideExisting: false
});

export const { useRegisterUserMutation, useLoginUserMutation } = userApi;
