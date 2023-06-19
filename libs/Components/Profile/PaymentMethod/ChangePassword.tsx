import { changePassword } from '@/libs/Api';
import { useAuth } from '@/libs/Context/AuthProvider';
import styles from '@/styles/styles';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import SmallLoader from '../../SmallLoader/SmallLoader';
const ChangePassword = () => {
    const { currentUser, refresh } = useAuth();
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);

    const passwordChangeHandler = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');
        if (oldPassword === '') {
            setIsLoading(false);
            setErrorMessage('Please enter old password');
            return;
        }

        if (newPassword !== confirmPassword) {
            setIsLoading(false);
            setErrorMessage('Password are not same');
            return;
        }
        const data = { oldPassword, newPassword, newConfirmPassword: confirmPassword };

        try {
            const result = await changePassword(data, currentUser?._id);
            if (result.status === 200) {
                toast.success(result?.message);
                // Refresh the user data to fetch the updated information from the server
                refresh();
                setIsLoading(false);
            } else {
                setIsLoading(false);
                setErrorMessage(result?.message);
                toast.error(result.message);
            }
        } catch (error) {
            setIsLoading(false);
            toast.error('Failed to change password');
        }
    };
    return (
        <div className="shadow-md w-[90%] mx-auto rounded-md p-2">
            <div className="w-full px-5">
                <h1 className="block text-[25px] text-center font-[600] text-[#000000ba] pb-2">
                    Change Password
                </h1>
                <div className="w-full">
                    <form onSubmit={passwordChangeHandler} className="flex flex-col items-center">
                        <div className=" w-[100%] 800px:w-[50%] mt-5">
                            <label className="block pb-2">Enter your old password</label>
                            <input
                                type="password"
                                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                required
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                            />
                        </div>
                        <div className=" w-[100%] 800px:w-[50%] mt-2">
                            <label className="block pb-2">Enter your new password</label>
                            <input
                                type="password"
                                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                required
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>
                        <div className=" w-[100%] 800px:w-[50%] mt-2">
                            <label className="block pb-2">Enter your confirm password</label>
                            <input
                                type="password"
                                className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
                                required
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {errorMessage !== '' && (
                                <>
                                    <p className="text-md  text-red-600">{errorMessage}</p>
                                </>
                            )}
                            <button
                                className={`w-[95%] h-[40px]  text-center   text-white bg-black transition-all duration-500   rounded-[3px] mt-3 cursor-pointer`}
                                type="submit"
                            >
                                {isLoading ? (
                                    <>
                                        <SmallLoader />
                                    </>
                                ) : (
                                    'Update'
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
