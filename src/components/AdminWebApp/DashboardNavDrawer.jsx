import React from 'react';
import { useLocation } from 'react-router-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';

const DashboardNavDrawer = ({ isOpen, toggleDrawer, navigate }) => {
  const location = useLocation();

  return (
    <div className={`font-poppins fixed top-0 left-0 h-full w-2/6 bg-white opacity-95 shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-20`}>
      <div className="flex flex-col p-4 mt-20">
        <a
          className="flex flex-col items-center text-xl py-2 w-full text-left font-semibold text-midnightBlack cursor-pointer"
          onClick={() => { toggleDrawer(); navigate('/dashboard'); }}
        >
          <HomeRoundedIcon className={`mb-1 ${location.pathname === '/dashboard' ? 'text-trueGreen' : 'text-inherit'}`} />
          <span className={`text-xs ${location.pathname === '/dashboard' ? 'text-trueGreen' : 'text-midnightBlack'}`}>Home</span>
        </a>
        <hr className="border-gray-300 border-opacity-50 w-full my-2" />
        <a
          className="flex flex-col items-center text-xl py-2 w-full text-left font-semibold text-midnightBlack cursor-pointer"
          onClick={() => { toggleDrawer(); navigate('/dashboard/boards'); }}
        >
          <AssignmentRoundedIcon className={`mb-1 ${location.pathname === '/dashboard/boards' ? 'text-trueGreen' : 'text-inherit'}`} />
          <span className={`text-xs ${location.pathname === '/dashboard/boards' ? 'text-trueGreen' : 'text-midnightBlack'}`}>Boards</span>
        </a>
        <hr className="border-gray-300 border-opacity-50 w-full my-2" />
        <a
          className="flex flex-col items-center text-xl py-2 w-full text-left font-semibold text-midnightBlack cursor-pointer"
          onClick={() => { toggleDrawer(); navigate('/dashboard/team'); }}
        >
          <GroupRoundedIcon className={`mb-1 ${location.pathname === '/dashboard/team' ? 'text-trueGreen' : 'text-inherit'}`} />
          <span className={`text-xs ${location.pathname === '/dashboard/team' ? 'text-trueGreen' : 'text-midnightBlack'}`}>Team</span>
        </a>
      </div>
      <div className="flex flex-col p-4 mt-80">
        <a
          className="flex flex-col items-center text-xl py-2 w-full text-left font-semibold text-midnightBlack cursor-pointer"
          onClick={() => { toggleDrawer(); navigate('/dashboard/settings'); }}
        >
          <SettingsRoundedIcon className={`mb-1 ${location.pathname === '/dashboard/settings' ? 'text-trueGreen' : 'text-inherit'}`} />
          <span className={`text-xs ${location.pathname === '/dashboard/settings' ? 'text-trueGreen' : 'text-midnightBlack'}`}>Settings</span>
        </a>
        <hr className="border-gray-300 border-opacity-50 w-full my-2" />
        <a
          className="flex flex-col items-center text-xl py-2 w-full text-left font-semibold text-midnightBlack cursor-pointer"
          onClick={() => { toggleDrawer(); navigate('/dashboard/account'); }}
        >
          <AccountCircleRoundedIcon className={`mb-1 ${location.pathname === '/dashboard/account' ? 'text-trueGreen' : 'text-inherit'}`} />
          <span className={`text-xs ${location.pathname === '/dashboard/account' ? 'text-trueGreen' : 'text-midnightBlack'}`}>Account</span>
        </a>
      </div>
    </div>
  );
};

export default DashboardNavDrawer;
