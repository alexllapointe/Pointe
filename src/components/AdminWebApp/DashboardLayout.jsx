import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

const DashboardLayout = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex">
            <div className="hidden md:block fixed top-0 left-0 h-full">
                <DashboardSidebar />
            </div>
            <div className="flex-grow md:ml-20">
                <DashboardNavbar />
                <div className="p-2 relative">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
