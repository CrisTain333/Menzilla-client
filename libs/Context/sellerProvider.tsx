import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axiosInstance from '../common/utils/axios';
interface IAuthContextValue {
    currentSeller: any;
    isLoading: boolean;
    // eslint-disable-next-line no-unused-vars
    sellerLogin: (sellerData: any) => Promise<string | null>;
    sellerLogout: () => void;
    isSeller: boolean;
    getSellerData: any;
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
    const tokenStoragePath = 'seller_Access_Token';
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [currentSeller, setCurrentSeller] = useState<any>(null);
    const [isSeller, setIsSeller] = useState(false);
    const [sellerFetched, setSellerFetched] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem(tokenStoragePath);
        if (token && !sellerFetched) {
            setIsLoading(true);
            getSellerData(token)
                .then((userData) => {
                    setSellerFetched(true);
                    setCurrentSeller(userData);
                    setIsSeller(true);
                    setIsLoading(false);
                })
                .catch(() => {
                    setIsLoading(false);
                });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const sellerLogin = async (sellerData: any) => {
        try {
            const response = await axiosInstance.post(`/shop/login`, sellerData);
            if (response?.data && response?.data?.token) {
                localStorage.setItem(tokenStoragePath, response?.data?.token);
                setCurrentSeller(response?.data?.seller);
                setIsSeller(true);
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
        setIsSeller(false);
        localStorage.removeItem(tokenStoragePath);
    };

    const getSellerData = async (token: string) => {
        try {
            const response = await axiosInstance.get(`/shop/seller`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            return response?.data?.seller;
        } catch (e) {
            sellerLogout();
        }
    };

    const value: IAuthContextValue = {
        isSeller,
        currentSeller,
        isLoading,
        sellerLogin,
        sellerLogout,
        getSellerData
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default SellerProvider;