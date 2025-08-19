import React from "react";
import logo from "../../assets/logo.png";
import {
    FaSearch,
    FaHome,
    FaBriefcase,
    FaBell,
    FaUserAlt,
} from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { BsGrid3X3GapFill } from "react-icons/bs";
import profile from "../../assets/profile.png"

const Header = () => {
    return (
        <header className="flex justify-between items-center px-4 md:px-6 py-2 shadow-md sticky top-0 bg-white z-50">
            {/* Left: Logo + Search */}
            <div className="flex items-center gap-3 md:gap-4">
                {/* Logo */}
                <img src={logo} alt="LinkedIn Logo" className="w-8 h-8 md:w-10 md:h-10" />

                {/* Search bar */}
                <div className="flex items-center bg-gray-100 px-2 md:px-3 py-1 rounded-full w-[150px] md:w-[280px]">
                    <FaSearch className="text-gray-500 text-sm md:text-base" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent outline-none px-1 md:px-2 text-xs md:text-sm w-full"
                    />
                </div>
            </div>

            {/* Middle: Navigation */}
            <div className="flex items-center gap-4 md:gap-8 text-gray-600">
                {/* Home */}
                <div className="flex flex-col items-center cursor-pointer hover:text-black">
                    <FaHome size={20} />
                    <span className="hidden md:block text-xs">Home</span>
                </div>

                {/* My Network */}
                <div className="flex flex-col items-center cursor-pointer hover:text-black">
                    <HiUserGroup size={20} />
                    <span className="hidden md:block text-xs">My Network</span>
                </div>

                {/* Jobs */}
                <div className="flex flex-col items-center cursor-pointer hover:text-black">
                    <FaBriefcase size={20} />
                    <span className="hidden md:block text-xs">Jobs</span>
                </div>

                {/* Messaging */}
                <div className="flex flex-col items-center cursor-pointer hover:text-black">
                    <MdMessage size={20} />
                    <span className="hidden md:block text-xs">Messaging</span>
                </div>

                {/* Notifications */}
                <div className="flex flex-col items-center cursor-pointer hover:text-black relative">
                    <FaBell size={20} />
                    <span className="absolute -top-1 right-2 bg-red-600 text-white text-[10px] px-1 rounded-full">
                        5
                    </span>
                    <span className="hidden md:block text-xs mt-1">Notifications</span>
                </div>

                {/* Profile */}
                <div className="flex flex-col items-center cursor-pointer hover:text-black">
                    <img
                        src={profile}
                        alt="Profile"
                        className="h-7 w-7 md:h-8 md:w-8 rounded-full object-cover"
                    />
                    <span className="hidden md:block text-xs">Me</span>
                </div>
            </div>

            {/* Right: Business & Premium (hidden on small devices) */}
            <div className="hidden md:flex items-center gap-8 text-gray-600">
                <div className="flex flex-col items-center cursor-pointer hover:text-black">
                    <BsGrid3X3GapFill size={20} />
                    <span className="text-xs">For Business</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer text-yellow-600 hover:text-yellow-700">
                    <span className="text-xs font-semibold">Try Premium for BDT 0</span>
                </div>
            </div>
        </header>
    );
};

export default Header;
