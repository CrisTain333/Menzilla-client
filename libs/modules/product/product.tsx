import PROductCard from '@/libs/Components/ProductCard/PROUDCTcard';
import { useSeller } from '@/libs/Context/sellerProvider';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { FcFilledFilter } from 'react-icons/fc';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { categoriesData } from '@/libs/common/constant/Data';

const Product = () => {
    const { allProducts, isProductLoading } = useSeller();
    const [searchValue, setSearchValue] = useState<string | null>(null);
    const [data, setData] = useState<any[]>([]);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]); // Initial price range
    const router = useRouter();
    const { query, replace } = router;
    const categoryData: any = query?.category;
    const [shouldRefresh, setShouldRefresh] = useState(false);
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
                        product.discountPrice >= priceRange[0] &&
                        product.discountPrice <= priceRange[1]
                );
            }

            if (selectedCategories.length > 0 && !categoryData) {
                console.log('i am in ');
                filteredProducts = filteredProducts.filter((product: any) =>
                    selectedCategories.includes(product.category)
                );
            }

            setData(filteredProducts);
        };
        filterProducts();
    }, [allProducts, categoryData, searchValue, priceRange, shouldRefresh]);

    const refresh = () => {
        setShouldRefresh(!shouldRefresh);
    };

    const handleCategoryChange = (category: string) => {
        const updatedSelectedCategories = [...selectedCategories];
        const categoryIndex = updatedSelectedCategories.indexOf(category);

        if (categoryIndex > -1) {
            updatedSelectedCategories.splice(categoryIndex, 1);
        } else {
            updatedSelectedCategories.push(category);
        }

        setSelectedCategories(updatedSelectedCategories);

        if (updatedSelectedCategories.length === 0) {
            replace('/product');
        } else {
            const updatedCategoryData = updatedSelectedCategories.join(',');
            replace(`/product?category=${updatedCategoryData}`);
        }
        refresh();
    };

    console.log(selectedCategories);
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
                                    <div className="form-group mt-3 w-[80%] p-1">
                                        <label
                                            htmlFor="price_range"
                                            className="text-base font-semibold"
                                        >
                                            Price Range
                                        </label>
                                        <Slider
                                            range
                                            min={0}
                                            max={10000}
                                            step={10}
                                            value={priceRange}
                                            onChange={handlePriceChange}
                                        />
                                        <div className="flex justify-between">
                                            <span className="ml-2">${priceRange[0]}</span>
                                            <span className="ml-2">${priceRange[1]}</span>
                                        </div>
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
