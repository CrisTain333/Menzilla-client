import PROductCard from '@/libs/Components/ProductCard/PROUDCTcard';
import ProductCard from '@/libs/Components/ProductCard/ProductCard';
import { useSeller } from '@/libs/Context/sellerProvider';
import HeaderAndFooter from '@/libs/Layout/HeaderAndFooter/headerAndFooter';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const Product = () => {
    const { allProducts, isProductLoading } = useSeller();
    const [data, setData] = useState([]);
    const router = useRouter();
    const { query } = router;
    const categoryData = query?.category;

    useEffect(() => {
        if (categoryData) {
            const filteredProduct = allProducts.filter((i: any) => i.category === categoryData);
            setData(filteredProduct);
        } else {
            setData(allProducts);
        }
    }, [allProducts, categoryData]);

    // useEffect(() => {
    //     if (categoryData !== null) {
    //         const filteredProduct =
    //             allProducts && allProducts.filter((i: any) => i.category === categoryData);
    //         setData(filteredProduct);
    //     }
    //     //    window.scrollTo(0,0);
    // }, [allProducts]);

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
                    <div className="grid grid-cols-12">
                        <div className="col-span-3">
                            <div className="sidebar">
                                <div className="widget user_widget_search">
                                    <h2>Users search</h2>
                                    <form
                                        id="user_wiget_search_form"
                                        className="user_wiget_search_form"
                                        method="GET"
                                    >
                                        <div className="form-group">
                                            <label htmlFor="user_name">User name</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="user_name"
                                                placeholder="User name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="user_gender">Gender</label>
                                            <select
                                                className="form-control custom-select"
                                                id="user_gender"
                                            >
                                                <option></option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="user_age">Age</label>
                                            <div id="user_age">
                                                <div
                                                    id="user_age_handler_min"
                                                    className="ui-slider-handle"
                                                ></div>
                                                <div
                                                    id="user_age_handler_max"
                                                    className="ui-slider-handle"
                                                ></div>
                                            </div>
                                            <input
                                                type="hidden"
                                                id="user_age_min"
                                                name="user_age_min"
                                            />
                                            <input
                                                type="hidden"
                                                id="user_age_max"
                                                name="user_age_max"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="user_sort">Sort</label>
                                            <select
                                                className="form-control custom-select"
                                                id="user_sort"
                                            >
                                                <option>A-Z</option>
                                                <option>Z-A</option>
                                                <option>New users</option>
                                                <option>Most viewed</option>
                                                <option>Most liked</option>
                                                <option>Popular</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="user_filter">Filter</label>
                                            <select
                                                className="form-control custom-select"
                                                id="user_filter"
                                            >
                                                <option>All users</option>
                                                <option>My friends</option>
                                                <option>My network</option>
                                                <option>Featured</option>
                                                <option>Liked by me</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="custom-control custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                />
                                                <span className="custom-control-indicator"></span>
                                                <span className="custom-control-description">
                                                    With photo
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="custom-control custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                />
                                                <span className="custom-control-indicator"></span>
                                                <span className="custom-control-description">
                                                    Online
                                                </span>
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <button
                                                type="submit"
                                                className="btn btn-block btn-primary"
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
