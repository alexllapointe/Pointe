import React, { useState } from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
    const [aboutOpen, setAboutOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false);
    const [downloadOpen, setDownloadOpen] = useState(false);
    const navigate = useNavigate();

    const handleIconClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <footer className="w-full bg-midnightBlack p-10">
            {/* 2XL Screen Size */}
            <div className="hidden 2xl:flex flex-col items-center">
                <div className="w-full flex justify-between items-start mb-4">
                    <div className="flex items-start space-x-60">
                        <div className='ml-60'>
                            <h1 className='text-trueGreen text-2xl font-bold cursor-pointer'>Pointe.</h1>
                        </div>
                        <div className="flex flex-row space-x-40">
                            <div className="flex flex-col items-start">
                                <a className="text-white text-xl font-semibold cursor-pointer">About</a>
                                <div className="flex flex-col mt-2 space-y-1 text-gray-400 text-sm">
                                    <a
                                        onClick={() => navigate('/')}
                                        className="hover:underline cursor-pointer">Company</a>
                                    <a
                                        onClick={() => navigate('/security-privacy')}
                                        className="hover:underline cursor-pointer">Security and Privacy</a>
                                </div>
                            </div>
                            <div className="flex flex-col items-start">
                                <a className="text-white text-xl font-semibold cursor-pointer">Get in Touch</a>
                                <div className="flex flex-col mt-2 space-y-1 text-gray-400 text-sm">
                                    <a onClick={() => navigate('/contact')}
                                        className="hover:underline cursor-pointer">Contact Us</a>
                                </div>
                            </div>
                            <div className="flex flex-col items-start">
                                <a className="text-white text-xl font-semibold cursor-pointer">Download</a>
                                <div className="flex flex-col mt-2 space-y-1 text-gray-400 text-sm">
                                    <a
                                        onClick={() => navigate('/beta')}
                                        className="hover:underline cursor-pointer">Mobile App for iOS</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-5/6 border-t border-gray-300 opacity-20 my-4"></div>
                <div className="flex justify-center space-x-6 mb-4">
                    <FaInstagram
                        size={32}
                        className="text-gray-400 hover:text-trueGreen cursor-pointer"
                        onClick={() => handleIconClick('https://www.instagram.com/gradmeet/')}
                    />
                    <FaLinkedin
                        size={32}
                        className="text-gray-400 hover:text-trueGreen cursor-pointer"
                        onClick={() => handleIconClick('https://www.linkedin.com/company/gradmeet/')}
                    />
                </div>
                <div className="text-sm text-gray-400">© 2024 Pointe, LLC. All rights reserved.</div>
            </div>

            {/* XL Desktop View */}
            <div className="hidden xl:flex 2xl:hidden flex-col items-center">
                <div className="w-full flex justify-between items-start mb-4">
                    <div className="flex items-start space-x-20 ml-20">
                        <div className='ml-20'>
                            <h1 className='text-trueGreen text-2xl font-bold'>Pointe.</h1>
                        </div>
                        <div className="flex flex-row space-x-20">
                            <div className="flex flex-col items-start">
                                <a className="text-white text-xl font-semibold cursor-pointer">About</a>
                                <div className="flex flex-col mt-2 space-y-1 text-gray-400 text-sm">
                                    <a
                                        onClick={() => navigate('/')}
                                        className="hover:underline cursor-pointer">Company</a>
                                    <a
                                        onClick={() => navigate('/security-privacy')}
                                        className="hover:underline cursor-pointer">Security and Privacy</a>
                                </div>
                            </div>
                            <div className="flex flex-col items-start">
                                <a className="text-white text-xl font-semibold cursor-pointer">Get in Touch</a>
                                <div className="flex flex-col mt-2 space-y-1 text-gray-400 text-sm">
                                    <a onClick={() => navigate('/contact')}
                                        className="hover:underline cursor-pointer">Contact Us</a>
                                </div>
                            </div>
                            <div className="flex flex-col items-start">
                                <a className="text-white text-xl font-semibold cursor-pointer">Download</a>
                                <div className="flex flex-col mt-2 space-y-1 text-gray-400 text-sm">
                                    <a
                                        onClick={() => navigate('/beta')}
                                        className="hover:underline cursor-pointer">Mobile App for iOS</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-5/6 border-t border-gray-300 opacity-20 my-4"></div>
                <div className="flex justify-center space-x-6 mb-4">
                    <FaInstagram
                        size={32}
                        className="text-gray-400 hover:text-trueGreen cursor-pointer"
                        onClick={() => handleIconClick('https://www.instagram.com/gradmeet/')}
                    />
                    <FaLinkedin
                        size={32}
                        className="text-gray-400 hover:text-trueGreen cursor-pointer"
                        onClick={() => handleIconClick('https://www.linkedin.com/company/gradmeet/')}
                    />
                </div>
                <div className="text-sm text-gray-400">© 2024 Pointe, LLC. All rights reserved.</div>
            </div>

            {/* Regular Desktop View */}
            <div className="hidden lg:flex xl:hidden flex-col items-center">
                <div className="w-full flex justify-between items-start mb-4">
                    <div className="flex items-start space-x-10 ml-10">
                        <div className='pl-20'>
                            <h1 className='text-trueGreen text-2xl font-bold'>Pointe.</h1>
                        </div>
                        <div className="flex flex-row space-x-10">
                            <div className="flex flex-col items-start">
                                <a className="text-white text-xl font-semibold cursor-pointer">About</a>
                                <div className="flex flex-col mt-2 space-y-1 text-gray-400 text-sm">
                                    <a
                                        onClick={() => navigate('/')}
                                        className="hover:underline cursor-pointer">Company</a>
                                    <a
                                        onClick={() => navigate('/security-privacy')}
                                        className="hover:underline cursor-pointer">Security and Privacy</a>
                                </div>
                            </div>
                            <div className="flex flex-col items-start">
                                <a className="text-white text-xl font-semibold cursor-pointer">Get in Touch</a>
                                <div className="flex flex-col mt-2 space-y-1 text-gray-400 text-sm">
                                    <a onClick={() => navigate('/contact')}
                                        className="hover:underline cursor-pointer">Contact Us</a>
                                </div>
                            </div>
                            <div className="flex flex-col items-start">
                                <a className="text-white text-xl font-semibold cursor-pointer">Download</a>
                                <div className="flex flex-col mt-2 space-y-1 text-gray-400 text-sm">
                                    <a
                                        onClick={() => navigate('/beta')}
                                        className="hover:underline cursor-pointer">Mobile App for iOS</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-5/6 border-t border-gray-300 opacity-20 my-4"></div>
                <div className="flex justify-center space-x-6 mb-4">
                    <FaInstagram
                        size={32}
                        className="text-gray-400 hover:text-trueGreen cursor-pointer"
                        onClick={() => handleIconClick('https://www.instagram.com/gradmeet/')}
                    />
                    <FaLinkedin
                        size={32}
                        className="text-gray-400 hover:text-trueGreen cursor-pointer"
                        onClick={() => handleIconClick('https://www.linkedin.com/company/gradmeet/')}
                    />
                </div>
                <div className="text-sm text-gray-400">© 2024 Pointe, LLC. All rights reserved.</div>
            </div>

            {/* Tablet View */}
            <div className="hidden md:flex lg:hidden flex-col items-center">
                <div className="w-full flex flex-col items-center mb-4">
                    <div className="flex items-center space-y-10">
                        <div className='md:mr-20 sm:ml-10'>
                            <h1 className='text-trueGreen text-2xl font-bold'>Pointe.</h1>
                        </div>
                    </div>
                    <div className="flex flex-row justify-around w-full mt-4 mr-10">
                        <div className="flex flex-col items-center">
                            <a className="mr-6 text-white text-xl font-semibold cursor-pointer">About</a>
                            <div className="flex flex-col mt-2 space-y-1 text-gray-400 text-sm">
                                <a
                                    onClick={() => navigate('/')}
                                    className="ml-14 hover:underline">Company</a>
                                <a className="ml-14 hover:underline">Security and Privacy</a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <a className="mr-4 text-white text-xl font-semibold cursor-pointer">Get in Touch</a>
                            <div className="flex flex-col mt-2 space-y-1 text-gray-400 text-sm">
                                <a onClick={() => navigate('/contact')}
                                    className="mr-16 hover:underline cursor-pointer">Contact Us</a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <a className="mr-6 text-white text-xl font-semibold cursor-pointer">Download</a>
                            <div className="flex flex-col mt-2 space-y-1 text-gray-400 text-sm">
                                <a
                                    onClick={() => navigate('/beta')}
                                    className="hover:underline cursor-pointer">Mobile App for iOS</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-5/6 border-t border-gray-300 opacity-20 my-4"></div>
                <div className="flex justify-center space-x-6 mb-4">
                    <FaInstagram
                        size={32}
                        className="text-gray-400 hover:text-trueGreen cursor-pointer"
                        onClick={() => handleIconClick('https://www.instagram.com/gradmeet/')}
                    />
                    <FaLinkedin
                        size={32}
                        className="text-gray-400 hover:text-trueGreen cursor-pointer"
                        onClick={() => handleIconClick('https://www.linkedin.com/company/gradmeet/')}
                    />
                </div>
                <div className="text-sm text-gray-400">© 2024 Pointe, LLC. All rights reserved.</div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col items-start">
                <h1 className='text-trueGreen text-2xl font-bold'>Pointe.</h1>
                <div className="w-full mb-4 mt-4">
                    <button
                        onClick={() => setAboutOpen(!aboutOpen)}
                        className="w-full flex justify-between items-center py-2"
                    >
                        <span className='text-white text-xl font-semibold'>About</span>
                        <span>{aboutOpen ? <ExpandLess style={{ fill: '#FFFFFF' }} /> : <ExpandMore style={{ fill: '#FFFFFF' }} />}</span>
                    </button>
                    {aboutOpen && (
                        <div className="flex flex-col space-y-2 text-gray-400 text-sm">
                            <a
                                onClick={() => navigate('/')}
                                className='hover:underline'
                            >Company</a>
                            <a
                                onClick={() => navigate('/security-privacy')}
                                className='hover:underline'
                            >Security and Privacy</a>
                        </div>
                    )}
                </div>
                <div className="w-full mb-4">
                    <button
                        onClick={() => setContactOpen(!contactOpen)}
                        className="w-full flex justify-between items-center py-2"
                    >
                        <span className='text-white text-xl font-semibold'>Get in Touch</span>
                        <span>{contactOpen ? <ExpandLess style={{ fill: '#FFFFFF	' }} /> : <ExpandMore style={{ fill: '#FFFFFF	' }} />}</span>
                    </button>
                    {contactOpen && (
                        <div className="flex flex-col space-y-2 text-gray-400 text-sm">
                            <a
                                onClick={() => navigate('/contact')}
                                className='hover:underline cusor-pointer'
                            >Contact Us</a>
                        </div>
                    )}
                </div>
                <div className="w-full mb-20">
                    <button
                        onClick={() => setDownloadOpen(!downloadOpen)}
                        className="w-full flex justify-between items-center py-2"
                    >
                        <span className='text-white text-xl font-semibold'>Download</span>
                        <span>{downloadOpen ? <ExpandLess style={{ fill: '#FFFFFF	' }} /> : <ExpandMore style={{ fill: '#FFFFFF	' }} />}</span>
                    </button>
                    {downloadOpen && (
                        <div className="flex flex-col space-y-2 text-gray-400 text-sm">
                            <a
                                onClick={() => navigate('/beta')}
                                className='hover:underline cusor-pointer'
                            >Mobile App for iOS</a>
                        </div>
                    )}
                </div>
                <div className="flex justify-center space-x-6 mb-10">
                    <FaInstagram
                        size={32}
                        className="text-gray-400 hover:text-trueGreen cursor-pointer"
                        onClick={() => handleIconClick('https://www.instagram.com/gradmeet/')}
                    />
                    <FaLinkedin
                        size={32}
                        className="text-gray-400 hover:text-trueGreen cursor-pointer"
                        onClick={() => handleIconClick('https://www.linkedin.com/company/gradmeet/')}
                    />
                </div>
                <div className="text-sm text-gray-400">© 2024 Pointe, LLC. All rights reserved.</div>
            </div>
        </footer>
    );
};

export default Footer;
