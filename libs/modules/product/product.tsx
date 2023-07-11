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
    const { allProducts, isProductLoading } = useSeller();
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

    return (
        <div>
            <HeaderAndFooter>
                {isProductLoading ? (
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
                ) : (
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
                                                className=" my-2 text-base font-semibold"
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
                                        <div className="form-group my-5">
                                            <button
                                                type="submit"
                                                className="px-3 py-1 text-white  bg-[#ff9900] rounded-sm"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-9">
                            <div>
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
                                            {data?.map((item: any, index: any) => {
                                                return <PROductCard data={item} key={index} />;
                                            })}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </HeaderAndFooter>
        </div>
    );
};

export default Product;
