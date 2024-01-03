import React, { useState } from "react";
import YoutubeLogo from "../assets/logos/youtube-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isSearchVisible, setSearchVisibility] = useState(false);

    const toggleSearchVisibility = () => {
        setSearchVisibility(!isSearchVisible);
    };

    return (
        <nav className="grid grid-cols-12 w-[95%] h-[56px] mx-auto my-auto mb-4 ">
            <div className={`max-[768px]:col-span-6 col-span-2 flex flex-row my-auto ${isSearchVisible && 'max-[768px]:hidden'}`}>
                {/* Menu button */}
                <div className="basis-[20%] my-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                </div>

                {/* YouTube logo */}
                <div className="basis-[50%] flex flex-row gap-2 bg-transparent cursor-pointer">
                    <Link to='/'>
                        <img className="bg-white" src={YoutubeLogo} alt="YouTube Logo" />
                    </Link>
                </div>
            </div>

            {/* Search option */}
            <div className={`my-auto col-span-8 w-full ${isSearchVisible ? 'max-[768px]:col-span-12' : 'max-[768px]:col-span-1'}`}>
                <div className={`mx-auto flex w-[80%] ${isSearchVisible ? 'block' : 'max-[768px]:hidden'}`}>
                    {/* Input Field */}
                    <input type="text" className="w-full border border-gray-400 p-2 rounded-l-md focus:outline-none focus:border-[#3876BF]" placeholder="Search.." />

                    {/* Button */}
                    <button className="bg-gray-300 px-[20px] rounded-r-[20px] text-gray-800 focus:outline-none focus:ring focus:border-blue-300">
                        <svg className="w-[18px] mx-auto font-[100]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                    </button>
                </div>

                {!isSearchVisible && (
                    <button onClick={toggleSearchVisibility} className="max-[768px]:block hidden hover:border hover:p-1 hover:bg-gray-200 hover:rounded-full text-gray-800 border-none">
                        <svg className="w-[18px] mx-auto font-[100]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.3-4.3" />
                        </svg>
                    </button>
                )}
            </div>

            {/* Profile and bell options */}
            <div className={`right-side max-[768px]:col-span-5 col-span-2 flex flex-row gap-2 my-auto ${isSearchVisible && 'max-[768px]:hidden'}`}>
                <div className="flex ml-auto gap-3">
                    <div className="my-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        </svg>
                    </div>

                    {/* Sign in / Sign out */}
                    <div className="border border-gray-400 hover:bg-sky-200 text-sky-500 rounded-[20px] px-[25px] py-[5px]">
                        Sign In
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
