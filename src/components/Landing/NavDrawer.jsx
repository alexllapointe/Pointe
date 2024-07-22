import React from 'react';

const NavDrawer = ({ isOpen, toggleDrawer, navigate }) => {
    return (
        <div className={`font-poppins fixed top-0 right-0 h-full w-3/4 bg-white opacity-95 shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 z-20`}>
            <div className="flex flex-col p-4 mt-40"> {/* Adjusted margin to place drawer content below the navbar */}
                {/* <a
                    className="text-2xl py-2 w-full text-right font-semibold hover:underline hover:text-lightOrange text-midnightBlack"
                    onClick={() => { toggleDrawer(); navigate('/company'); }}
                >
                    Company
                </a>
                <hr className="border-gray-300 border-opacity-50 w-full my-2" /> */}
                <a
                    className="text-2xl py-2 w-full text-right font-semibold hover:underline hover:text-trueGreen text-midnightBlack cursor-pointer"
                    onClick={() => { toggleDrawer(); navigate('/blog'); }}
                >
                    Blog
                </a>
                <hr className="border-gray-300 border-opacity-50 w-full my-2" />
                <a
                    className="text-2xl py-2 w-full text-right font-semibold hover:underline hover:text-trueGreen text-midnightBlack cursor-pointer"
                    onClick={() => { toggleDrawer(); navigate('/blog'); }}
                >
                    How it works
                </a>
                <hr className="border-gray-300 border-opacity-50 w-full my-2" />
                <a
                    className="text-2xl py-2 w-full text-right font-semibold hover:underline hover:text-trueGreen text-midnightBlack cursor-pointer"
                    onClick={() => { toggleDrawer(); navigate('/pricing'); }}
                >
                    Pricing
                </a>
                <hr className="border-gray-300 border-opacity-50 w-full my-2" />
                <a
                    className="text-2xl font-semibold py-2 w-full text-right hover:underline hover:text-trueGreen text-midnightBlack cursor-pointer"
                    onClick={() => { toggleDrawer(); navigate('/login'); }}
                >
                    Login
                </a>
            </div>
        </div>
    );
};

export default NavDrawer;
