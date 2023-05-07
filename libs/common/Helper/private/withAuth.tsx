import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAuth = <T extends object>(Component: React.ComponentType<T>) => {
    const Auth = (props: T) => {
        const router = useRouter();

        const token = typeof window !== 'undefined' && localStorage.getItem('accessToken');
        useEffect(() => {
            if (!token) {
                router.push('/auth/login');
            }
        }, [token]);

        if (!token) return null;

        return <Component {...props} />;
    };

    return Auth;
};

export default withAuth;
