import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.BACKEND_BASE_URL}`
    }),
    tagTypes: ['user'],
    endpoints: () => ({})
});
