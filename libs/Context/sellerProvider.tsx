import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axiosInstance from '../common/utils/axios';
interface IAuthContextValue {
    currentUser: any;
    isLoading: boolean;
    login: () => Promise<string | null>;
    logout: () => void;
}
interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<IAuthContextValue | undefined>(undefined);

export function useSeller() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export function SellerProvider({ children }: AuthProviderProps) {
    const tokenStoragePath = 'seller_Token';
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [currentSeller, setCurrentSeller] = useState<any>(null);
    const [sellerFetched, setSellerFetched] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem(tokenStoragePath);
        if (token && !sellerFetched) {
            setIsLoading(true);
            getUserData(token)
                .then((userData) => {
                    setSellerFetched(true);
                    setCurrentSeller(userData);
                    setIsLoading(false);
                })
                .catch((e) => {
                    setIsLoading(false);
                });
        }
    }, []);

    const sellerLogin = async (sellerData: any) => {
        try {
            const response = await axiosInstance.post(`/shop/login`, sellerData);
            if (response?.data && response?.data?.token) {
                localStorage.setItem(tokenStoragePath, response?.data?.token);
                setCurrentSeller(response?.data?.seller);
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
        try {
            const response = await axiosInstance.get(`/user/me`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response?.data?.user;
        } catch (e) {
            logout();
        }
    };

    const value: AuthContextValue = {
        currentUser,
        isLoading,
        login,
        logout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default sellerProvider;
