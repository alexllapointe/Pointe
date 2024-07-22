import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import DashboardNavDrawer from './DashboardNavDrawer';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import ShareAlert from './helpers/ShareAlert';

const DashboardNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSubnavOpen, setIsSubnavOpen] = useState(false);
  const [selectedSubnav, setSelectedSubnav] = useState(null);
  const [isShareAlertOpen, setIsShareAlertOpen] = useState(false); // State for ShareAlert

  const navigate = useNavigate();
  const location = useLocation();
  const navbarRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubnav = () => {
    setIsSubnavOpen(!isSubnavOpen);
  };

  const openShareAlert = () => {
    setIsShareAlertOpen(true);
  };

  const closeShareAlert = () => {
    setIsShareAlertOpen(false);
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

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Dashboard for Alex';
      case '/dashboard/boards':
        return 'Boards for Alex';
      case '/dashboard/team':
        return 'Team';
      default:
        return 'Dashboard for Alex';
    }
  };

  const handleSubnavClick = (item) => {
    if (selectedSubnav === item) {
      setSelectedSubnav(null);
    } else {
      setSelectedSubnav(item);
    }
  };

  const renderRightIcons = () => {
    switch (location.pathname) {
      case '/dashboard':
        return (
          <button
            className="md:flex hidden items-center bg-trueGreen text-sm text-white py-2 px-2 mr-2 rounded-md shadow hover:bg-green-200 transition-all duration-300 ease-in-out"
            onClick={() => navigate('/home-settings')}
          >
            <TuneRoundedIcon style={{ fontSize: '1.5rem' }} />
          </button>
        );
      case '/dashboard/team':
        return (
          <button
            className="md:flex hidden items-center bg-trueGreen text-sm text-white py-2 px-2 mr-2 rounded-md shadow hover:bg-green-200 transition-all duration-300 ease-in-out"
            onClick={() => navigate('/explore-settings')}
          >
            <PersonAddRoundedIcon style={{ fontSize: '1.5rem' }} />
          </button>
        );
      case '/dashboard/boards':
        return (
          <>
            <button
              className="hidden md:flex items-center bg-trueGreen text-sm text-white py-2 px-2 rounded-md shadow hover:bg-green-200 transition-all duration-300 ease-in-out"
              onClick={() => navigate('/add-board')}
            >
              <AddCircleRoundedIcon style={{ fontSize: '1.5rem', backgroundColor: 'trueGreen', color: 'white', borderRadius: '50%' }} />
            </button>
            <button
              className="hidden md:flex items-center bg-trueGreen text-sm text-white py-2 px-2 rounded-md shadow hover:bg-green-200 transition-all duration-300 ease-in-out"
              onClick={openShareAlert}
            >
              <IosShareOutlinedIcon style={{ fontSize: '1.5rem' }} />
            </button>
            <button
              className="hidden md:flex items-center bg-trueGreen text-sm text-white py-2 px-2 rounded-md shadow hover:bg-green-200 transition-all duration-300 ease-in-out"
              onClick={() => navigate('/more-options')}
            >
              <MoreVertRoundedIcon style={{ fontSize: '1.5rem' }} />
            </button>
          </>
        );
      default:
        return null;
    }
  };

  const renderMobileRightIcons = () => {
    switch (location.pathname) {
      case '/dashboard':
        return (
          <button
            className="md:hidden z-40 mt-2 text-white text-sm bg-trueGreen py-2 px-2 rounded-md shadow"
            onClick={() => navigate('/home-settings')}
          >
            <TuneRoundedIcon style={{ fontSize: '1.25rem' }} />
          </button>
        );
      case '/dashboard/team':
        return (
          <button
            className="md:hidden z-40 mt-2 text-white text-sm bg-trueGreen py-2 px-2 rounded-md shadow"
            onClick={() => navigate('/explore-settings')}
          >
            <PersonAddRoundedIcon style={{ fontSize: '1.25rem' }} />
          </button>
        );
      case '/dashboard/boards':
        return (
          <>
            <div className='space-x-2'>
              <button
                className="md:hidden mt-2 text-white text-sm bg-trueGreen py-2 px-2 rounded-md shadow"
                onClick={() => navigate('/add-board')}
              >
                <AddCircleRoundedIcon style={{ fontSize: '1.25rem', backgroundColor: 'trueGreen', color: 'white', borderRadius: '50%' }} />
              </button>
              <button
                className="md:hidden z-40 mt-2 text-white text-sm bg-trueGreen py-2 px-2 rounded-md shadow"
                onClick={openShareAlert}
              >
                <IosShareOutlinedIcon style={{ fontSize: '1.25rem' }} />
              </button>
              <button
                className="md:hidden z-40 mt-2 text-white text-sm bg-trueGreen py-2 px-2 rounded-md shadow"
                onClick={() => navigate('/add')}
              >
                <MoreVertRoundedIcon style={{ fontSize: '1.25rem' }} />
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className={`font-poppins bg-white w-full flex items-center px-4 fixed top-0 left-0 z-30 transition-all duration-300 border-b border-gray-100 ${isScrolled ? 'opacity-95' : 'opacity-100'} ${isMobileMenuOpen ? '' : 'md:ml-20'}`}
      >
        <div className="flex items-center flex-grow">
          <button
            className="md:hidden text-midnightBlack pt-2 z-40"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <CloseIcon style={{ fontSize: '1.5rem' }} />
            ) : (
              <MenuIcon style={{ fontSize: '1.5rem' }} />
            )}
          </button>
          <div className="flex items-center relative">
            <h1 className="text-midnightBlack text-xl md:text-2xl pt-6 pb-4 pl-2 cursor-pointer">
              {getPageTitle()}
              {isSubnavOpen ? (
                <ExpandLessIcon
                  style={{ fontSize: '1.5rem' }}
                  className="pb-1 cursor-pointer"
                  onClick={toggleSubnav}
                />
              ) : (
                <ExpandMoreIcon
                  style={{ fontSize: '1.5rem' }}
                  className="pb-1 cursor-pointer"
                  onClick={toggleSubnav}
                />
              )}
            </h1>
          </div>
        </div>
        <div className="flex items-center ml-auto 2xl:mr-40 xl:mr-20 lg:mr-20 md:mr-20 space-x-2">
          {renderRightIcons()}
          {renderMobileRightIcons()}
        </div>
      </nav>
      {isSubnavOpen && (
        <div className="bg-white w-full fixed top-16 z-20 border-b border-l border-gray-100">
          <div className="flex items-start md:space-x-8 ml-4 space-x-4 py-4 overflow-x-auto">
            {['GradMeet', 'Pointe Consulting'].map((item, index) => (
              <span
                key={index}
                className={`text-midnightBlack text-sm cursor-pointer ${selectedSubnav === item ? 'border-b-2 border-trueGreen' : ''}`}
                onClick={() => handleSubnavClick(item)}
              >
                {item}
              </span>
            ))}
            <div className="flex-grow"></div>
            <button
              className="text-trueGreen cursor-pointer"
              onClick={() => navigate('/create')}
            >
              <AddCircleRoundedIcon style={{ fontSize: '1.5rem' }} className='2xl:mr-48 md:mr-28 mr-5' />
            </button>
          </div>
        </div>
      )}
      <DashboardNavDrawer isOpen={isMobileMenuOpen} toggleDrawer={toggleMobileMenu} navigate={navigate} />
      <ShareAlert open={isShareAlertOpen} onClose={closeShareAlert} />
    </>
  );
};

export default DashboardNavbar;
