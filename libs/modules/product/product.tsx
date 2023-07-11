import PROductCard from '@/libs/Components/ProductCard/PROUDCTcard';
// import ProductCard from '@/libs/Components/ProductCard/ProductCard';
import { useSeller } from '@/libs/Context/sellerProvider';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { FcFilledFilter } from 'react-icons/fc';
import { categoriesData } from '@/libs/common/constant/Data';

const Product = () => {
    const { allProducts, isProductLoading, page, setPage, allProductsTotalPage } = useSeller();
    const [searchValue, setSearchValue] = useState<string | null>(null);
    const [data, setData] = useState([]);
    const router = useRouter();
    const { query } = router;
    const categoryData = query?.category;

    useEffect(() => {
        if (categoryData && searchValue) {
            const filteredProducts = allProducts.filter((i: any) => i.category === categoryData);
            if (searchValue?.length === 0 || searchValue === '') {
                setData(filteredProducts);
                return;
            }
            const filteredProductsWithSearch =
                filteredProducts &&
                filteredProducts.filter((product: any) =>
                    product.name.toLowerCase().includes(searchValue.toLowerCase())
                );
            setData(filteredProductsWithSearch);
        } else if (categoryData) {
            const filteredProduct = allProducts.filter((i: any) => i.category === categoryData);
            setData(filteredProduct);
            // categoriesData;
        } else if (searchValue) {
            if (searchValue?.length === 0 || searchValue === '') {
                setData(allProducts);
                return;
            }
            const filteredProducts =
                allProducts &&
                allProducts.filter((product: any) =>
                    product.name.toLowerCase().includes(searchValue.toLowerCase())
                );
            setData(filteredProducts);
        } else {
            setData(allProducts);
        }
    }, [allProducts, categoryData, searchValue]);

    const handleNextPage = () => {
        // e.preventDefault();
        const newPage = page + 1;
        setPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const handleBackPage = () => {
        if (page === 1) {
            return;
        }
        const newPage = page - 1;
        setPage(newPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <HeaderAndFooter>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-3 ">
                        <div className="sidebar w-[90%] sticky top-20">
                            <div className="widget user_widget_search rounded-md shadow-md p-2">
                                <h2 className="text-center flex items-center justify-center">
                                    <span className="mr-1">
                                        {' '}
                                        <FcFilledFilter size={20} />{' '}
                                    </span>
                                    Filters
                                </h2>
                                <form
                                    id="user_wiget_search_form"
                                    className="user_wiget_search_form"
                                    method="GET"
                                >
                                    <div className="form-group mb-1">
                                        <label
                                            htmlFor="user_name"
                                            className=" mt-2 text-base font-semibold"
                                        >
                                            Product
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control border rounded-sm p-1"
                                            id="user_name"
                                            value={searchValue as string}
                                            onChange={(e) => setSearchValue(e.target.value)}
                                            placeholder="e.g Product name"
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label
                                            htmlFor="user_gender"
                                            className="text-base font-semibold"
                                        >
                                            Category
                                        </label>
                                        {categoriesData.map((category) => {
                                            return (
                                                <div key={category?.title}>
                                                    <label className="custom-control custom-checkbox">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            value={category?.title}
                                                        />
                                                        <span className="custom-control-indicator"></span>
                                                        <span className="custom-control-description ml-1 my-1">
                                                            {category?.title}
                                                        </span>
                                                    </label>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="form-group my-2">
                                        <p className="text-base font-semibold">Pagination</p>
                                        <div className="items-center space-y-2 text-xs sm:space-y-0 sm:space-x-3 sm:flex">
                                            <span className="block">
                                                Page {page} of {allProductsTotalPage}
                                            </span>
                                            <div className="space-x-1">
                                                <button
                                                    disabled={page === 1}
                                                    onClick={() => handleBackPage()}
                                                    title="previous"
                                                    type="button"
                                                    className={`inline-flex items-center justify-center w-8 h-8 py-0  rounded-md shadow ${
                                                        page === 1 &&
                                                        'cursor-not-allowed bg-slate-50'
                                                    }`}
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="w-4"
                                                    >
                                                        <polyline
                                                            className="text-[#ff9900]"
                                                            points="15 18 9 12 15 6"
                                                        ></polyline>
                                                    </svg>
                                                </button>
                                                <button
                                                    onClick={() => handleNextPage()}
                                                    disabled={page === allProductsTotalPage}
                                                    title="next"
                                                    type="button"
                                                    className={`inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow ${
                                                        page === allProductsTotalPage &&
                                                        'cursor-not-allowed bg-slate-50'
                                                    }`}
                                                >
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="w-4"
                                                    >
                                                        <polyline
                                                            className="text-[#ff9900]"
                                                            points="9 18 15 12 9 6"
                                                        ></polyline>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-9">
                        <div>
                            {isProductLoading ? (
                                <>
                                    <div className="flex items-center justify-center my-10">
                                        <ThreeCircles
                                            height="100"
                                            width="100"
                                            color="#ff9900"
                                            wrapperStyle={{}}
                                            // wrapperclassName=""
                                            visible={true}
                                            ariaLabel="three-circles-rotating"
                                            outerCircleColor=""
                                            innerCircleColor=""
                                            middleCircleColor=""
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    {data?.length === 0 ? (
                                        <>
                                            <div>
                                                <h1 className="text-center w-full font-mono font-bold text-5xl mb-40">
                                                    No products Found!
                                                </h1>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] mb-12">
                                                {data?.slice(0, 6)?.map((item: any, index: any) => {
                                                    return <PROductCard data={item} key={index} />;
                                                })}
                                            </div>
                                        </>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </HeaderAndFooter>
        </div>
    );
};

export default Product;
