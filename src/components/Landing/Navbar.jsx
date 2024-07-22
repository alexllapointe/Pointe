import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import NavDrawer from './NavDrawer.jsx';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`font-poppins bg-white w-full flex items-center px-4 fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${isScrolled ? 'opacity-95 border-b border-gray-100' : ''}`}>
                <div className="flex items-center flex-grow">
                    <div className='2xl:ml-60 xl:ml-40 lg:ml-20 md:ml-10 sm:ml-4'>
                        <h1
                            onClick={() => navigate('/')}
                            className='text-trueGreen text-2xl font-bold p-6 cursor-pointer'>Pointe.</h1>
                    </div>
                </div>
                <div className="hidden md:flex space-x-4 ml-auto 2xl:mr-60 xl:mr-40 lg:mr-20 md:mr-10 sm:mr-4">
                    <div className='space-x-4 pt-2'>
                        <a
                            className="text-midnightBlack font-semibold text-md hover:underline hover:text-trueGreen cursor-pointer transition-all duration-200 ease-in-out"
                            onClick={() => navigate('/blog')}
                        >
                            Blog
                        </a>
                        <a
                            className="text-midnightBlack font-semibold text-md hover:underline hover:text-trueGreen cursor-pointer transition-all duration-200 ease-in-out"
                            onClick={() => navigate('/how-it-works')}
                        >
                            How it works
                        </a>
                        <a
                            className="text-midnightBlack font-semibold text-md hover:underline hover:text-trueGreen cursor-pointer transition-all duration-200 ease-in-out"
                            onClick={() => navigate('/pricing')}
                        >
                            Pricing
                        </a>
                    </div>
                    <a
                        className="bg-trueGreen text-white font-semibold text-md py-2 px-6 rounded-full cursor-pointer hover:bg-green-200 transition-all duration-300 ease-in-out"
                        onClick={() => navigate('/login')}
                    >
                        Login
                    </a>
                </div>
                <button
                    className="md:hidden ml-auto text-midnightBlack z-40"
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? (
                        <CloseIcon style={{ fontSize: '2rem' }} />
                    ) : (
                        <MenuIcon style={{ fontSize: '2rem' }} />
                    )}
                </button>
            </nav>
            <NavDrawer isOpen={isMobileMenuOpen} toggleDrawer={toggleMobileMenu} navigate={navigate} />
        </>
    );
};

export default Navbar;
