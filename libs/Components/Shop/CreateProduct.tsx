import { createProduct } from '@/libs/Api';
import { useSeller } from '@/libs/Context/sellerProvider';
import { categoriesData } from '@/libs/common/constant/Data';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import SmallLoader from '../SmallLoader/SmallLoader';
// import { createProduct } from '../../redux/actions/product';
// import { categoriesData } from '../../static/data';

const CreateProduct = () => {
    const { currentSeller, getSellerProducts } = useSeller();
    const router = useRouter();

    const [images, setImages] = useState<any>([]);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState('');
    const [originalPrice, setOriginalPrice] = useState<any>();
    const [discountPrice, setDiscountPrice] = useState<any>();
    const [stock, setStock] = useState<any>();
    const [isLoading, setIsLoading] = useState(false);

    const handleImageChange = (e: any) => {
        e.preventDefault();

        let files = Array.from(e.target.files);
        setImages((prevImages: any) => [...prevImages, ...files]);
    };

    const handleSubmit = async (e: any) => {
        setIsLoading(true);
        e.preventDefault();

        const newForm = new FormData();

        images.forEach((image: any) => {
            newForm.append('images', image);
        });
        newForm.append('name', name);
        newForm.append('description', description);
        newForm.append('category', category);
        newForm.append('tags', tags);
        newForm.append('originalPrice', originalPrice);
        newForm.append('discountPrice', discountPrice);
        newForm.append('stock', stock);
        newForm.append('shopId', currentSeller._id);

        const response = await createProduct(newForm);

        if (response.status !== 201) {
            toast.error(response?.message);
            setIsLoading(false);
            return;
        }
        toast.success(response?.message);
        getSellerProducts(currentSeller?._id);
        setIsLoading(false);
        router.push('/dashboard/products');
    };

    return (
        <div className="w-[90%] 800px:w-[50%] bg-white  shadow h-[80vh] rounded-[4px] p-3 overflow-y-scroll ">
            <h5 className="text-[30px] font-Poppins text-center">Create Product</h5>
            {/* create product form */}
            <form onSubmit={handleSubmit}>
                <br />
                <div>
                    <label className="pb-2">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your product name..."
                    />
                </div>
                <br />
                <div>
                    <label className="pb-2">
                        Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        cols={30}
                        required
                        rows={8}
                        name="description"
                        value={description}
                        className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter your product description..."
                    ></textarea>
                </div>
                <br />
                <div>
                    <label className="pb-2">
                        Category <span className="text-red-500">*</span>
                    </label>
                    <select
                        className="w-full mt-2 border h-[35px] rounded-[5px]"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="Choose a category">Choose a category</option>
                        {categoriesData &&
                            categoriesData.map((i) => (
                                <option value={i.title} key={i.title}>
                                    {i.title}
                                </option>
                            ))}
                    </select>
                </div>
                <br />
                <div>
                    <label className="pb-2">Tags</label>
                    <input
                        type="text"
                        name="tags"
                        value={tags}
                        className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="Enter your product tags..."
                    />
                </div>
                <br />
                <div>
                    <label className="pb-2">Original Price</label>
                    <input
                        type="number"
                        name="price"
                        value={originalPrice}
                        className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={(e) => setOriginalPrice(e.target.value)}
                        placeholder="Enter your product price..."
                    />
                </div>
                <br />
                <div>
                    <label className="pb-2">
                        Price (With Discount) <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        name="price"
                        value={discountPrice}
                        className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={(e) => setDiscountPrice(e.target.value)}
                        placeholder="Enter your product price with discount..."
                    />
                </div>
                <br />
                <div>
                    <label className="pb-2">
                        Product Stock <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        name="price"
                        value={stock}
                        className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={(e) => setStock(e.target.value)}
                        placeholder="Enter your product stock..."
                    />
                </div>
                <br />
                <div>
                    <label className="pb-2">
                        Upload Images <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="file"
                        name=""
                        id="upload"
                        className="hidden"
                        multiple
                        onChange={handleImageChange}
                    />
                    <div className="w-full flex items-center flex-wrap">
                        <label htmlFor="upload">
                            <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
                        </label>
                        {images &&
                            images.map((i: any, index: any) => (
                                <Image
                                    height={500}
                                    width={500}
                                    src={URL.createObjectURL(i)}
                                    key={index}
                                    alt=""
                                    className="h-32 w-32 object-cover m-2"
                                />
                            ))}
                    </div>
                    <br />
                    <div>
                        <button
                            type="submit"
                            className={`mt-2 appearance-none text-center block w-full px-3 h-[35px] border  sm:text-sm
                            
                            ${
                                isLoading
                                    ? ' bg-[#ff9900a0] text-white cursor-not-allowed'
                                    : 'bg-[#ff9900] text-white  cursor-pointer'
                            }
                            `}
                        >
                            {isLoading ? (
                                <>
                                    <SmallLoader />{' '}
                                </>
                            ) : (
                                <>Create</>
                            )}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateProduct;
