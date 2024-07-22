import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SquareRoundedIcon from '@mui/icons-material/SquareRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';


const DashboardSidebar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

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
        <div className={`fixed top-0 left-0 h-full w-20 bg-white border-r border-gray-100 transition-all duration-300 ${isScrolled ? 'opacity-95' : 'opacity-100'}`}>
            <div className="flex flex-col items-center justify-between h-full pt-4 pb-4">
                <div className="flex flex-col items-center">
                    <SquareRoundedIcon className="mb-4 text-midnightBlack" style={{ fontSize: '2.5rem' }} />
                    <hr className="border-gray-300 border-opacity-50 w-full mb-10" />
                    <div className="flex flex-col space-y-10">
                        <a
                            className={`cursor-pointer flex flex-col items-center p-2 rounded-lg ${location.pathname === '/dashboard' ? 'bg-gray-100 text-trueGreen' : 'text-midnightBlack hover:bg-gray-100'}`}
                            onClick={() => navigate('/dashboard')}
                        >
                            <HomeRoundedIcon />
                            <span className="text-xs mt-1">Home</span>
                        </a>
                        <a
                            className={`cursor-pointer flex flex-col items-center p-2 rounded-lg ${location.pathname === '/dashboard/boards' ? 'bg-gray-100 text-trueGreen' : 'text-midnightBlack hover:bg-gray-100'}`}
                            onClick={() => navigate('/dashboard/boards')}
                        >
                            <AssignmentRoundedIcon />
                            <span className="text-xs mt-1">Boards</span>
                        </a>
                        <a
                            className={`cursor-pointer flex flex-col items-center p-2 rounded-lg ${location.pathname === '/dashboard/team' ? 'bg-gray-100 text-trueGreen' : 'text-midnightBlack hover:bg-gray-100'}`}
                            onClick={() => navigate('/dashboard/team')}
                        >
                            <GroupRoundedIcon />
                            <span className="text-xs mt-1">Team</span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col items-center space-y-10">
                    <a
                        className={`cursor-pointer flex flex-col items-center p-2 rounded-lg ${location.pathname === '/dashboard/settings' ? 'bg-gray-100 text-trueGreen' : 'text-midnightBlack hover:bg-gray-100'}`}
                        onClick={() => navigate('/dashboard/settings')}
                    >
                        <SettingsRoundedIcon />
                        <span className="text-xs mt-1">Settings</span>
                    </a>
                    <a
                        className={`cursor-pointer flex flex-col items-center p-2 rounded-lg ${location.pathname === '/dashboard/account' ? 'bg-gray-100 text-trueGreen' : 'text-midnightBlack hover:bg-gray-100'}`}
                        onClick={() => navigate('/dashboard/account')}
                    >
                        <AccountCircleRoundedIcon />
                        <span className="text-xs mt-1">Account</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;
