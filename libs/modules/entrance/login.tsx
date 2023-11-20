import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/libs/Context/AuthProvider';
import { Loader2 } from 'lucide-react';
// import Login from '@/libs/modules/entrance/login';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Login = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { currentUser, login } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (currentUser) {
            router.push('/');
        }
    }, [currentUser, router]);

    const handleShowPassword = () => {
        setIsVisible(!isVisible);
    };

    const handleLogin = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const data = {
            email,
            password
        };

        const loginError = await login(data);
        if (loginError) {
            toast.error(loginError);
            setError(loginError);
            setIsLoading(false);
        } else {
            toast.success('Logged in successfully');
            setIsLoading(false);
            router.push('/');
        }
    };

    return (
        <div>
            {/* <Login /> */}
            <div className="mx-auto w-full sm:w-2/3 sm:py-10 xl:w-1/3">
                <div className="space-y-8 rounded-md bg-white px-8 py-10 shadow">
                    <div className="flex justify-center">
                        {/* <Image src={Logo} width={200} height={50} alt="Talent Pro Logo" /> */}
                    </div>
                    <h2 className="mt-10 text-center text-3xl font-semibold tracking-tight ">
                        Sign In to Your Account
                    </h2>
                    <form className="space-y-4" onSubmit={handleLogin}>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@gmail.com"
                            />
                        </div>
                        <div>
                            <div className="relative w-full ">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    type={isVisible ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    className="outline-none rounded-sm focus-within:border-white"
                                    placeholder="min 6 password"
                                />
                                <span
                                    onClick={handleShowPassword}
                                    className="absolute top-11 right-3 -translate-y-1/2 cursor-pointer"
                                >
                                    {isVisible ? (
                                        <>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-5 h-5 text-gray-400"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                        </>
                                    ) : (
                                        <>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-5 h-5 text-gray-400"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                                />
                                            </svg>
                                        </>
                                    )}
                                </span>
                            </div>
                            {/* <p className="flex justify-end">
                                <Button variant="link" className="p-0 font-semibold">
                                    Forget Password
                                </Button>
                            </p> */}
                        </div>
                        {error && (
                            <p className="my-2 text-center text-[14px] text-red-600 font-semibold">
                                {error}
                            </p>
                        )}
                        <Button
                            disabled={isLoading}
                            type="submit"
                            className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-sm font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Signing in . . .
                                </>
                            ) : (
                                <>Sign in</>
                            )}
                        </Button>
                        <p className="text-center text-sm font-medium leading-none">
                            Don’t have an account?{' '}
                            <Link href={'/auth/register'}>
                                <Button variant="link" className="p-0 font-bold">
                                    Create Account
                                </Button>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
