// import { useSeller } from '@/libs/Context/sellerProvider';
// import React from 'react';

// const Setting = () => {
//     const { currentSeller } = useSeller();
//     return (
//         <div className="w-full min-h-screen flex flex-col items-center">
//             <div className="flex w-full 800px:w-[80%] flex-col justify-center my-5">
//                 <div className="w-full flex items-center justify-center">
//                     <div className="relative">
//                         <img
//                             src={avatar ? avatar : `${currentSeller.avatar?.url}`}
//                             alt=""
//                             className="w-[200px] h-[200px] rounded-full cursor-pointer"
//                         />
//                         <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[10px] right-[15px]">
//                             <input
//                                 type="file"
//                                 id="image"
//                                 className="hidden"
//                                 onChange={handleImage}
//                             />
//                             <label htmlFor="image">
//                                 <AiOutlineCamera />
//                             </label>
//                         </div>
//                     </div>
//                 </div>

//                 {/* shop info */}
//                 <form
//                     aria-aria-required={true}
//                     className="flex flex-col items-center"
//                     onSubmit={updateHandler}
//                 >
//                     <div className="w-[100%] flex items-center flex-col 800px:w-[50%] mt-5">
//                         <div className="w-full pl-[3%]">
//                             <label className="block pb-2">Shop Name</label>
//                         </div>
//                         <input
//                             type="name"
//                             placeholder={`${currentSeller.name}`}
//                             // value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//                             required
//                         />
//                     </div>
//                     <div className="w-[100%] flex items-center flex-col 800px:w-[50%] mt-5">
//                         <div className="w-full pl-[3%]">
//                             <label className="block pb-2">Shop description</label>
//                         </div>
//                         <input
//                             type="name"
//                             placeholder={`${
//                                 currentSeller.description
//                                     ? currentSeller.description
//                                     : 'Enter your shop description'
//                             }`}
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                             className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//                         />
//                     </div>
//                     <div className="w-[100%] flex items-center flex-col 800px:w-[50%] mt-5">
//                         <div className="w-full pl-[3%]">
//                             <label className="block pb-2">Shop Address</label>
//                         </div>
//                         <input
//                             type="name"
//                             placeholder={currentSeller.address}
//                             value={address}
//                             onChange={(e) => setAddress(e.target.value)}
//                             className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//                             required
//                         />
//                     </div>

//                     <div className="w-[100%] flex items-center flex-col 800px:w-[50%] mt-5">
//                         <div className="w-full pl-[3%]">
//                             <label className="block pb-2">Shop Phone Number</label>
//                         </div>
//                         <input
//                             type="number"
//                             placeholder={currentSeller.phoneNumber}
//                             value={phoneNumber}
//                             onChange={(e) => setPhoneNumber(e.target.value)}
//                             className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//                             required
//                         />
//                     </div>

//                     <div className="w-[100%] flex items-center flex-col 800px:w-[50%] mt-5">
//                         <div className="w-full pl-[3%]">
//                             <label className="block pb-2">Shop Zip Code</label>
//                         </div>
//                         <input
//                             type="number"
//                             placeholder={currentSeller.zipCode}
//                             value={zipCode}
//                             onChange={(e) => setZipcode(e.target.value)}
//                             className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//                             required
//                         />
//                     </div>

//                     <div className="w-[100%] flex items-center flex-col 800px:w-[50%] mt-5">
//                         <input
//                             type="submit"
//                             value="Update Shop"
//                             className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
//                             required
//                             readOnly
//                         />
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Setting;
import React from 'react';

const Setting = () => {
    return (
        <div className="w-[80%] h-[80vh] shadow-md rounded-md mx-auto my-5">
            <div className=""></div>
        </div>
    );
};

export default Setting;
