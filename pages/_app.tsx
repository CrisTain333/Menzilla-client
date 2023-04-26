import '@/styles/global.scss';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Toaster
                position="top-right"
                containerStyle={
                    {
                        // Add space at the top
                        // marginTop: '50px'
                    }
                }
                toastOptions={{
                    duration: 2000,
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
            <Component {...pageProps} />;
        </>
    );
}
