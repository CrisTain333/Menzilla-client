import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axiosInstance from '../common/utils/axios';
interface IAuthContextValue {
    currentSeller: any;
    isLoading: boolean;
    sellerLogin: (sellerData: any) => Promise<string | null>;
    sellerLogout: () => void;
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
            getSellerData(token)
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

    const sellerLogout = () => {
        setCurrentSeller(null);
        localStorage.removeItem(tokenStoragePath);
    };

    const getSellerData = async (token: string) => {
        try {
            const response = await axiosInstance.get(`/shop/seller`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response?.data?.user;
        } catch (e) {
            sellerLogout();
        }
    };

    const value: IAuthContextValue = {
        currentSeller,
        isLoading,
        sellerLogin,
        sellerLogout
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default SellerProvider;
