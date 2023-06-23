import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axiosInstance from '../common/utils/axios';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

interface AuthContextValue {
    currentUser: any;
    isLoading: boolean;
    // eslint-disable-next-line no-unused-vars
    login: (userData: any) => Promise<string | null>;
    logout: () => void;
    refresh: () => void;
    // eslint-disable-next-line no-unused-vars
    setCurrentUser: (data: any) => void;
    // eslint-disable-next-line no-unused-vars
    getUserData: (token: string) => void;

    refetch: () => void;
    profileData: any;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const tokenStoragePath = 'accessToken';
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [userFetched, setUserFetched] = useState(false);
    const [shouldRefresh, setShouldRefresh] = useState(false);
    const [accessToken, setAccessToken] = useState<string>('');
    const [profileData, setProfileData] = useState<any>();
    const [userOrders, setUsersOrders] = useState<any[]>([]);

    useEffect(() => {
        const token = localStorage.getItem(tokenStoragePath);
        setAccessToken(token as string);
        if (token && !userFetched) {
            setIsLoading(true);
            getUserData(token)
                .then((userData) => {
                    setUserFetched(true);
                    setCurrentUser(userData);
                    setIsLoading(false);
                })
                .catch(() => {
                    setIsLoading(false);
                });
        }
        refetch();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shouldRefresh]);

    const refresh = () => {
        setShouldRefresh(!shouldRefresh);
    };

    const login = async (userData: any) => {
        try {
            const response = await axiosInstance.post(`/auth/login`, userData);
            if (response?.data && response?.data?.token) {
                localStorage.setItem(tokenStoragePath, response?.data?.token);
                setCurrentUser(response?.data?.user);
                return null;
            } else {
                return 'Wrong Credential';
            }
        } catch (e: any) {
            if (e?.response) {
                return e?.response?.data?.message || 'Login failed. Please try again.';
            } else {
                return 'Login failed. Please try again.';
            }
        }
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem(tokenStoragePath);
    };

    // const tokenStoragePath = 'accessToken';
    const getUserData = async (token: string) => {
        try {
            const response = await axiosInstance.get(`/user/me`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response?.data?.user;
        } catch (e) {
            logout();
        }
    };

    const { data, refetch } = useQuery({
        queryKey: ['userData', accessToken],
        queryFn: async () => {
            try {
                const response = await axiosInstance.get(`/user/me`, {
                    headers: { Authorization: `Bearer ${accessToken}` }
                });
                setProfileData(response?.data?.user);
                return response?.data?.user;
            } catch (e) {}
        }
        // enabled: typeof window !== 'undefined'
    });

    const value: AuthContextValue = {
        currentUser,
        isLoading,
        login,
        logout,
        refresh,
        setCurrentUser,
        getUserData,
        profileData,
        refetch
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
