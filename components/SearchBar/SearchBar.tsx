import { useSeller } from '@/libs/Context/sellerProvider';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const SearchBar = () => {
    const { allProducts } = useSeller();
    const [searchTerm, setSearchTerm] = useState();
    const [searchData, setSearchData] = useState<any>(null);

    const handleSearchChange = (e: any) => {
        e.preventDefault();
        const term = e.target.value;
        setSearchTerm(term);
        if (term?.length === 0 || term === '') {
            setSearchData([]);
            return;
        }

        const filteredProducts =
            allProducts &&
            allProducts.filter((product: any) =>
                product.name.toLowerCase().includes(term.toLowerCase())
            );
        setSearchData(filteredProducts);
    };

    return (
        <div>
            <div className="navbar-center hidden lg:flex">
                <form className="w-[50vw]">
                    <div className="flex">
                        <div className="relative w-full">
                            <input
                                type="search"
                                id="search-dropdown"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="block p-[0.7rem] w-full z-20 text-sm text-gray-900  rounded-r-lg bg-gray-100 rounded-l-lg focus:border-none outline-none"
                                placeholder="Search products . . . "
                                required
                            />
                            <button
                                type="button"
                                className="absolute top-0 right-0 p-[0.66rem] text-sm font-medium text-white bg-[#ff9900] rounded-r-lg border border-[#ff9900]"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    ></path>
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                            {/* Search result dropdown */}
                            {searchData && searchData?.length !== 0 ? (
                                <div className="bg-gray-50 shadow-md absolute w-full rounded-b-md h-auto  max-h-80 overflow-y-auto  top-11 p-2 z-50">
                                    {/* top-11 p-2 z-50 */}
                                    {searchData &&
                                        searchData?.map((i: any, index: number) => {
                                            return (
                                                <Link
                                                    href={`/product/${i._id}`}
                                                    key={index}
                                                    onClick={() => setSearchData([])}
                                                >
                                                    <div className="w-full flex items-start py-2">
                                                        <Image
                                                            src={i?.images?.[0]}
                                                            alt=""
                                                            className="w-[40px] h-[40px] mr-[10px]"
                                                            height={100}
                                                            width={100}
                                                        />
                                                        <h1>{i.name}</h1>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;
