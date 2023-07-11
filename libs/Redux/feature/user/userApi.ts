import { api } from '../../api/index';

export const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => ({
                url: `/user/me`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}` // Add your authorization header here
                }
            }),
            providesTags: ['user']
        })
    }),
    overrideExisting: false
});

export {};
