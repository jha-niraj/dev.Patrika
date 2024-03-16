import { useState } from "react";
import logo from '../assets/dev..png'
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Icons that are used in the Project:
import { IoMdSearch} from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";

import '../index.css';

function Navbar() {
    const navigate = useNavigate();

    const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

    // Here, I have all the navigation part of the website for the Navbar to navigate to the different part:
    
    <img src={logo} className="h-16 rounded-full" />
    return (
        <>
        <nav className="z-10 sticky top-0 flex items-center gap-12 w-full h-[80px] border-b border-red bg-white">
            <Link to="/">    
            <p className="font-medium text-2xl font-serif">dev.Patrika</p>
            </Link>
            <div className={"absolute w-full left-0 mt-0.5 top-full py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:w-auto md:p-0 md:opacity-100 " + (searchBoxVisibility ? "block" : "hidden")}>
                <input 
                    type="text"
                    placeholder="Search..."
                    className="h-9 w-full md:w-auto p-4 pl-6 pr-[12%] md:pr-12 md:left-5 bg-gray-300 rounded-full top-full text-center text-black placeholder:text-gray-700"
                />
            </div>
            <div className="flex items-center gap-3 md:gap-6 ml-auto">
                <button className="md:hidden rounded-full bg-gray-300 h-10 w-10 flex justify-center items-center" onClick={() => setSearchBoxVisibility(currentVal => !currentVal)}>
                    <FaSearch className="text-xl" />
                </button>
                <Link to="/write" className="p-1.5 md:flex md:items-center justify-center hidden cursor-pointer hover:bg-gray-200 hover:rounded-md hover:transition-all" >
                    <FaPenToSquare />
                    <p className="p-2 text-lg font-semibold">Write</p>
                </Link>
                <Link to="/signin" className="bg-gray-500 hidden md:block text-white hover:bg-black font-bold py-2 px-4 rounded-full">
                    Sign In
                </Link>
                <Link to="/signup" className="bg-black hover:bg-green-300 text-white font-bold py-2 px-4 rounded-full">
                    Get Started
                </Link>
                
            </div>
        </nav>
        <Outlet />
        </>
    )
}

export default Navbar;