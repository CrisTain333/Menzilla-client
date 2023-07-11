import { api } from '../../api';

export const userApi = api.injectEndpoints({
    endpoints: (build) => ({
        getUser: build.query({
            query: () => ({
                url: `/user/me`,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}` // Add your authorization header here
                }
            })
        })
    })
});
