import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
// import Register from '@/libs/modules/entrance/register';
import React, { useState } from 'react';
import Banner from '../../public/images/new_banner.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

const Register = () => {
    const [isVisible, setIsVisible] = useState(false);
    const loading = false;
    const handleShowPassword = () => {
        setIsVisible(!isVisible);
    };

    const handleRegister = async (e: any) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const password = form.password.value;

        if (name === '') {
            toast.error('Please enter your name', {
                position: 'top-left'
            });
            return;
        }

        // Validation for email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email address', {
                position: 'top-left'
            });
            return;
        }

        // Validation for phone (assuming a simple numeric phone number)
        if (isNaN(phone) || phone === '') {
            toast.error('Please enter a valid phone number', {
                position: 'top-left'
            });
            return;
        }

        // Validation for password (assuming a minimum length of 6 characters)
        if (password.length < 6) {
            toast.error('Please enter a password with at least 6 characters', {
                position: 'top-left'
            });
            return;
        }

        const data = {
            name,
            email,
            phone,
            password
        };

        console.log(data);
    };

    return (
        <div>
            {/* <Register /> */}
            <div className="flex flex-wrap">
                <div className="flex w-full flex-col md:w-1/2">
                    <div className="lg:w-[30rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
                        <form className="flex flex-col pt-8 md:pt-8" onSubmit={handleRegister}>
                            <div className="flex md:flex-row md:space-x-2 space-y-2 md:space-y-0 flex-col pt-4">
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        type="name"
                                        id="name"
                                        name="name"
                                        className="outline-none rounded-sm focus-within:border-white"
                                        placeholder="name"
                                    />
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input
                                        type="number"
                                        id="phone"
                                        name="phone"
                                        className="outline-none rounded-sm focus-within:border-white"
                                        placeholder="phone"
                                    />
                                </div>
                            </div>
                            <div className="flex  flex-col pt-2">
                                <div className="w-full flex flex-col pt-4">
                                    <div className="grid w-full  items-center gap-1.5">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            type="email"
                                            id="email"
                                            className="outline-none rounded-sm focus-within:border-white"
                                            placeholder="email address"
                                            name="email"
                                        />
                                    </div>
                                    <div className="mb-6   w-full flex flex-col pt-4">
                                        <div className="relative w-full ">
                                            <Label htmlFor="password">Password</Label>
                                            <Input
                                                type={isVisible ? 'text' : 'password'}
                                                id="password"
                                                name="password"
                                                className="outline-none rounded-sm focus-within:border-white"
                                                placeholder="password"
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
                                    </div>
                                </div>
                            </div>

                            <Button
                                // disabled={loading}
                                type="submit"
                                className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-sm font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Signing Up . . .
                                    </>
                                ) : (
                                    <>Sign up</>
                                )}
                            </Button>
                        </form>
                        <div className="py-12 text-center">
                            <p className="whitespace-nowrap text-gray-600">
                                All ready have an account ?
                                <Link
                                    href="/auth/login"
                                    className="underline-offset-4 font-semibold text-gray-900 underline ml-1"
                                >
                                    Log in.
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pointer-events-none relative hidden h-screen select-none bg-black md:block md:w-1/2">
                    <div className="absolute bottom-0 z-10 px-8 text-white opacity-100">
                        <Link
                            href="https://github.com/cristain333"
                            target="_blank"
                            className="mb-4 text-3xl font-semibold"
                        >
                            Sukanta Das
                        </Link>
                        <p className="">Founder Menzilla</p>
                        <p className="mb-7 text-sm opacity-70">Full Stack Developer</p>
                    </div>
                    <Image
                        className="-z-1 absolute top-0 h-full w-full object-cover opacity-70"
                        src={Banner}
                        height={500}
                        width={500}
                        alt="register_image"
                    />
                </div>
            </div>
        </div>
    );
};

export default Register;
