import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.BACKEND_BASE_URL}`
    }),
    endpoints: () => ({})
});
