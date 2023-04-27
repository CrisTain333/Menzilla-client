import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BACKEND_BASE_URL } from '../Config/const';
import axiosInstance from '../common/utils/axios';

interface AuthContextValue {
    currentUser: any;
    isLoading: boolean;
    login: (userData: any) => Promise<string | null>;
    logout: () => void;
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

    useEffect(() => {
        const token = localStorage.getItem(tokenStoragePath);
        if (token && !userFetched) {
            setIsLoading(true);
            getUserData(token)
                .then((userData) => {
                    setUserFetched(true);
                    setCurrentUser(userData);
                    setIsLoading(false);
                })
                .catch((e) => {
                    setIsLoading(false);
                    // console.log('error', e);
                });
        }
    }, []);

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

    const getUserData = async (token: string) => {
        // try {
        //     const response = await axios.get(`${BACKEND_BASE_URL}/auth/user`, {
        //         headers: { Authorization: `Bearer ${token}` }
        //     });
        //     // console.log(response.data);
        //     return response.data.data;
        // } catch (e) {
        //     logout();
        // }
    };

    const value: AuthContextValue = {
        currentUser,
        isLoading,
        login,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
