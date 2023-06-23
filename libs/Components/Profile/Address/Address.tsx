import { AiOutlineDelete } from 'react-icons/ai';
import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { Country, State } from 'country-state-city';
import { addressTypeData } from '@/libs/common/constant/Data';
import { toast } from 'react-hot-toast';
import { addAddress, deleteAddress } from '@/libs/Api';
import { useAuth } from '@/libs/Context/AuthProvider';

const Address = () => {
    const tokenStoragePath = 'accessToken';
    const { currentUser, refresh, getUserData, refetch, profileData } = useAuth();
    const [open, setOpen] = useState(false);
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState<any>();
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [addressType, setAddressType] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (addressType === '' || country === '' || city === '') {
            toast.error('Please fill all the fields!');
            return;
        }
        try {
            const result = await addAddress(
                { country, city, addressType, zipCode, address1, address2 },
                currentUser?._id
            );
            if (result.status === 200) {
                const token = localStorage.getItem(tokenStoragePath);
                toast.success(result?.message);
                setOpen(false);
                setCountry('');
                setCity('');
                setAddress1('');
                setAddress2('');
                setZipCode('');
                setAddressType('');
                // Refresh the user data to fetch the updated information from the server
                refresh();
                refetch();
                getUserData(token as string);
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            toast.error('Failed to add address');
        }
    };

    const handleDelete = async (item: any) => {
        const id = item._id;
        try {
            const result = await deleteAddress(id, currentUser?._id);
            if (result.status === 200) {
                const token = localStorage.getItem(tokenStoragePath);
                toast.success(result?.message);
                // Refresh the user data to fetch the updated information from the server
                refresh();
                getUserData(token as string);
                refetch();
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            toast.error('Failed to Delete address');
        }
    };

    return (
        <div className="shadow-md w-[90%] mx-auto">
            <div className="w-full px-5 pb-5">
                {open && (
                    <div className="fixed w-full h-screen bg-[#0000004b] top-0 left-0 flex items-center justify-center ">
                        <div className="w-[40%] h-[70vh] bg-white rounded shadow relative overflow-y-scroll">
                            <div className="w-full flex justify-end p-3">
                                <RxCross1
                                    size={30}
                                    className="cursor-pointer"
                                    onClick={() => setOpen(false)}
                                />
                            </div>
                            <h1 className="text-center text-[25px] font-Poppins">
                                Add New Address
                            </h1>
                            <div className="w-full">
                                <form onSubmit={handleSubmit} className="w-full">
                                    <div className="w-full block p-4">
                                        <div className="w-full flex items-center">
                                            <div className="w-1/2 pb-2">
                                                <label className="block pb-2 font-semibold">
                                                    Country
                                                </label>
                                                <select
                                                    name=""
                                                    id=""
                                                    value={country}
                                                    onChange={(e) => setCountry(e.target.value)}
                                                    className="w-[95%] border h-[40px] rounded-[5px]"
                                                >
                                                    <option value="" className="block border pb-2 ">
                                                        choose your country
                                                    </option>
                                                    {Country &&
                                                        Country.getAllCountries().map((item) => (
                                                            <option
                                                                className="block pb-2"
                                                                key={item.isoCode}
                                                                value={item.isoCode}
                                                            >
                                                                {item.name}
                                                            </option>
                                                        ))}
                                                </select>
                                            </div>
                                            <div className="w-1/2 pb-2">
                                                <label className="block pb-2 font-semibold">
                                                    Choose your City
                                                </label>
                                                <select
                                                    name=""
                                                    id=""
                                                    value={city}
                                                    onChange={(e) => setCity(e.target.value)}
                                                    className="w-[95%] border h-[40px] rounded-[5px]"
                                                >
                                                    <option value="" className="block border pb-2">
                                                        choose your city
                                                    </option>
                                                    {State &&
                                                        State.getStatesOfCountry(country).map(
                                                            (item) => (
                                                                <option
                                                                    className="block pb-2"
                                                                    key={item.isoCode}
                                                                    value={item.isoCode}
                                                                >
                                                                    {item.name}
                                                                </option>
                                                            )
                                                        )}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="w-full flex items-center">
                                            <div className="w-1/2 pb-2">
                                                <label className="block pb-2 font-semibold">
                                                    Address 1
                                                </label>
                                                <input
                                                    type="address"
                                                    className={`border p-2 w-[95%] rounded`}
                                                    required
                                                    value={address1}
                                                    onChange={(e) => setAddress1(e.target.value)}
                                                />
                                            </div>
                                            <div className="w-1/2 pb-2">
                                                <label className="block pb-2 font-semibold">
                                                    Address 2
                                                </label>
                                                <input
                                                    type="address"
                                                    className={`border p-2 w-[95%] rounded`}
                                                    required
                                                    value={address2}
                                                    onChange={(e) => setAddress2(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full flex items-center">
                                            <div className="w-1/2 pb-2">
                                                <label className="block pb-2 font-semibold">
                                                    Zip Code
                                                </label>
                                                <input
                                                    type="number"
                                                    className={`border p-2 w-[95%] rounded`}
                                                    required
                                                    value={zipCode}
                                                    onChange={(e: any) =>
                                                        setZipCode(e.target.value)
                                                    }
                                                />
                                            </div>

                                            <div className="w-1/2 pb-2">
                                                <label className="block pb-2 font-semibold">
                                                    Address Type
                                                </label>
                                                <select
                                                    name=""
                                                    id=""
                                                    value={addressType}
                                                    onChange={(e) => setAddressType(e.target.value)}
                                                    className="w-[95%] border h-[40px] rounded-[5px]"
                                                >
                                                    <option value="" className="block border pb-2">
                                                        Choose your Address Type
                                                    </option>
                                                    {addressTypeData &&
                                                        addressTypeData.map((item) => (
                                                            <option
                                                                className="block pb-2"
                                                                key={item.name}
                                                                value={item.name}
                                                            >
                                                                {item.name}
                                                            </option>
                                                        ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div className=" w-full pb-2 flex justify-center items-center">
                                            {/* <input
                                                type="submit"
                                                className={`${styles.input} mt-5 cursor-pointer`}
                                                required
                                                readOnly
                                            /> */}
                                            <button
                                                type="submit"
                                                className="mt-5 px-5 py-2 rounded-md text-white bg-[#ff9900] "
                                            >
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex-col flex md:flex-row w-full items-center justify-between">
                    <h1 className="text-[25px] font-[600] text-[#000000ba] pb-2">My Addresses</h1>
                    <div className={`!rounded-md cursor-pointer`}>
                        <span
                            className="text-[#fff] bg-black px-4 py-2 rounded-md"
                            onClick={() => setOpen(true)}
                        >
                            Add New
                        </span>
                    </div>
                </div>
                <br />

                {profileData &&
                    profileData?.addresses?.map((item: any, index: number) => (
                        <div
                            className="w-full bg-white h-auto md:h-[70px] rounded-[4px] flex    flex-col md:flex-row justify-start px-3 shadow md:justify-between md:items-center pr-10 my-5 space-y-3 md:space-y-0 p-1"
                            key={index}
                        >
                            <div className="flex items-center">
                                <h5 className="md:pl-5 font-[600]">{item.addressType}</h5>
                            </div>
                            <div className="md:pl-8 flex items-center">
                                <h6 className="text-[12px] 800px:text-[unset]">
                                    {item.address1} {item.address2}
                                </h6>
                            </div>
                            <div className="md:pl-8 flex items-center">
                                <h6 className="text-[12px] 800px:text-[unset]">
                                    {currentUser && currentUser.phone}
                                </h6>
                            </div>
                            <div className="min-w-[10%] flex items-center justify-between pl-8">
                                <AiOutlineDelete
                                    size={25}
                                    className="cursor-pointer"
                                    onClick={() => handleDelete(item)}
                                />
                            </div>
                        </div>
                    ))}

                {currentUser && currentUser?.addresses?.length === 0 && (
                    <h5 className="text-center pt-8 text-[18px]">
                        You not have any saved address!
                    </h5>
                )}
            </div>
        </div>
    );
};

export default Address;
