import React from 'react';

const SimpleNav = () => {
    return (
        <div>
            <header className="p-5  bg-[#1C2B35] text-white">
                <div className="w-[90%] mx-auto">
                    <div className="container flex justify-start h-10 mx-auto  md:space-x-8">
                        <ul className="items-stretch hidden space-x-3 md:flex">
                            <li className="flex">
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                                >
                                    Link
                                </a>
                            </li>
                            <li className="flex">
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
                                >
                                    Link
                                </a>
                            </li>
                            <li className="flex">
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
                                >
                                    Link
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default SimpleNav;
