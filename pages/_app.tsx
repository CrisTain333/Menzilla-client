import { AuthProvider } from '@/libs/Context/AuthProvider';
import { CartProvider } from '@/libs/Context/CartProvider';
import SellerProvider from '@/libs/Context/sellerProvider';
import '@/styles/global.scss';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from '@/libs/Redux/store';
const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <AuthProvider>
                        <SellerProvider>
                            <CartProvider>
                                <Toaster
                                    position="top-right"
                                    containerStyle={{
                                        // Add space at the top
                                        marginTop: '55px'
                                    }}
                                    toastOptions={{
                                        duration: 4000,
                                        success: {
                                            iconTheme: {
                                                primary: '#4caf50',
                                                secondary: '#ffffff'
                                            }
                                        },
                                        error: {
                                            iconTheme: {
                                                primary: '#f44336',
                                                secondary: '#ffffff'
                                            }
                                        }
                                    }}
                                />
                                <Component {...pageProps} />
                            </CartProvider>
                        </SellerProvider>
                    </AuthProvider>
                </QueryClientProvider>
            </Provider>
        </>
    );
}
