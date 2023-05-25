import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axiosInstance from '../common/utils/axios';
import { getAllProduct, getShopProduct } from '../Api';
interface IAuthContextValue {
    currentSeller: any;
    isLoading: boolean;
    // eslint-disable-next-line no-unused-vars
    sellerLogin: (sellerData: any) => Promise<string | null>;
    sellerLogout: () => void;
    isSeller: boolean;
    getSellerData: any;
    products: any;
    getSellerProducts: any;
    refresh: () => void;
    totalPages: any;
    setTotalPages: any;
    isProductLoading: any;
    allProducts: any;
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
    const [products, setProducts] = useState([]);
    const [shouldRefresh, setShouldRefresh] = useState(false);
    const [isProductLoading, setIsProductLoading] = useState(false);
    const [allProducts, setAllProducts] = useState<any>([]);
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        const token = localStorage.getItem(tokenStoragePath);
        if (token && !sellerFetched) {
            setIsLoading(true);
            getSellerData(token)
                .then((userData) => {
                    setSellerFetched(true);
                    setCurrentSeller(userData);
                    getSellerProducts(userData?._id, 1);
                    setIsSeller(true);
                    setIsLoading(false);
                })
                .catch(() => {
                    setIsLoading(false);
                });
        }
        getProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [shouldRefresh]);

    const refresh = () => {
        setShouldRefresh(!shouldRefresh);
    };

    const sellerLogin = async (sellerData: any) => {
        try {
            const response = await axiosInstance.post(`/shop/login`, sellerData);
            if (response?.data && response?.data?.token) {
                localStorage.setItem(tokenStoragePath, response?.data?.token);
                setCurrentSeller(response?.data?.seller);
                getSellerProducts(response?.data?.seller?._id, 1);
                setIsSeller(true);
                return response;
            } else {
                return null;
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
            if (response?.data?.status === 500) {
                sellerLogout();
                return;
            }
            return response?.data?.seller;
        } catch (e) {
            sellerLogout();
        }
    };

    const getSellerProducts = async (_id: string, page: any) => {
        try {
            const response = await getShopProduct(_id, page);
            setProducts(response?.data);
            setTotalPages(response?.totalPages);
        } catch (e) {
            sellerLogout();
        }
    };

    const getProduct = async () => {
        setIsProductLoading(true);
        try {
            const result = await getAllProduct();
            setAllProducts(result?.data);
            setIsProductLoading(false);
        } catch (error) {
            setIsProductLoading(false);
            setAllProducts([]);
        }
    };

    const value: IAuthContextValue = {
        isSeller,
        currentSeller,
        isLoading,
        sellerLogin,
        sellerLogout,
        getSellerData,
        products,
        getSellerProducts,
        refresh,
        totalPages,
        setTotalPages,
        allProducts,
        isProductLoading
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default SellerProvider;
