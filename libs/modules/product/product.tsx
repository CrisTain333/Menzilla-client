import PROductCard from '@/libs/Components/ProductCard/PROUDCTcard';
import { useSeller } from '@/libs/Context/sellerProvider';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { FcFilledFilter } from 'react-icons/fc';
import 'rc-slider/assets/index.css';
import { categoriesData } from '@/libs/common/constant/Data';
import { Slider } from '@/components/ui/slider';

const Product = () => {
    const { allProducts, isProductLoading } = useSeller();
    console.log(allProducts);
    const [searchValue, setSearchValue] = useState<string | null>(null);
    const [data, setData] = useState<any[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<any>(0); // Initial price range
    console.log(priceRange);
    const router = useRouter();
    const { query } = router;
    const categoryData: any = query?.category;

    useEffect(() => {
        const filterProducts = () => {
            let filteredProducts = allProducts;

            if (categoryData) {
                const categories = categoryData.split(',');
                setSelectedCategories(categories);
                filteredProducts = filteredProducts.filter((product: any) =>
                    categories.includes(product.category)
                );
            }

            if (searchValue) {
                filteredProducts = filteredProducts.filter((product: any) =>
                    product.name.toLowerCase().includes(searchValue.toLowerCase())
                );
            }

            if (priceRange[0] !== 0 || priceRange[1] !== 10000) {
                filteredProducts = filteredProducts.filter(
                    (product: any) =>
                        product.price >= priceRange[0] && product.price <= priceRange[1]
                );
            }

            setData(filteredProducts);
        };
        filterProducts();
    }, [allProducts, categoryData, searchValue, selectedCategories, priceRange]);

    const handleCategoryChange = (category: string) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories((prevSelected) =>
                prevSelected.filter((selected) => selected !== category)
            );
        } else {
            setSelectedCategories((prevSelected) => [...prevSelected, category]);
        }
    };

    const handlePriceChange = (value: any) => {
        setPriceRange(value);
    };

    // const handleNextPage = () => {
    //     const newPage = page + 1;
    //     setPage(newPage);
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    // };

    // const handleBackPage = () => {
    //     if (page === 1) {
    //         return;
    //     }
    //     const newPage = page - 1;
    //     setPage(newPage);
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    // };

    return (
        <div>
            <HeaderAndFooter>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 md:col-span-3">
                        <div className="sidebar w-[90%] sticky top-20">
                            <div className="widget user_widget_search rounded-md shadow-md p-2">
                                <h2 className="text-center flex items-center justify-center">
                                    <span className="mr-1">
                                        <FcFilledFilter size={20} />
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
                                            className="mt-2 text-base font-semibold"
                                        >
                                            Product
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            className="w-[80%] border rounded-sm p-1 text-sm"
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
                                        {categoriesData.map((category) => (
                                            <div key={category?.title}>
                                                <label className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        value={category?.title}
                                                        checked={selectedCategories.includes(
                                                            category?.title
                                                        )}
                                                        onChange={() =>
                                                            handleCategoryChange(category?.title)
                                                        }
                                                    />
                                                    <span className="custom-control-indicator"></span>
                                                    <span className="custom-control-description ml-1 my-1">
                                                        {category?.title}
                                                    </span>
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="form-group mt-3">
                                        <label
                                            htmlFor="price_range"
                                            className="text-base font-semibold"
                                        >
                                            Price Range
                                        </label>
                                        <div className="mt-2">
                                            <Slider
                                                range
                                                min={0}
                                                max={10000}
                                                step={10}
                                                value={priceRange}
                                                onChange={handlePriceChange}
                                            />
                                        </div>
                                        <fieldset className="space-y-1 sm:w-60 text-black">
                                            <input
                                                type="range"
                                                className="w-full text-[#68d284]"
                                                min="1"
                                                max="10000"
                                                value={priceRange}
                                                onChange={handlePriceChange}
                                            />
                                            <div
                                                aria-hidden="true"
                                                className="flex justify-between px-1"
                                            >
                                                <span>$0</span>

                                                <span>$10000</span>
                                            </div>
                                        </fieldset>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-9">
                        <div>
                            {isProductLoading ? (
                                <div className="flex items-center justify-center my-10">
                                    <ThreeCircles
                                        height="100"
                                        width="100"
                                        color="#ff9900"
                                        wrapperStyle={{}}
                                        visible={true}
                                        ariaLabel="three-circles-rotating"
                                        outerCircleColor=""
                                        innerCircleColor=""
                                        middleCircleColor=""
                                    />
                                </div>
                            ) : (
                                <>
                                    {data?.length === 0 ? (
                                        <div>
                                            <h1 className="text-center w-full font-mono font-bold text-5xl mb-40">
                                                No products Found!
                                            </h1>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] mb-12">
                                            {data?.map((item: any, index: any) => (
                                                <PROductCard data={item} key={index} />
                                            ))}
                                        </div>
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
