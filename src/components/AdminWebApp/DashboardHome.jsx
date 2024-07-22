import React from 'react';
import BasicDateCalendar from './helpers/BasicDateCalendar';
import Board from './helpers/Board.jsx';

const DashboardHome = () => {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 p-4 w-full max-w-7xl">
                <div className="bg-white rounded-md p-6 h-96 shadow-sm flex flex-col">
                    <span className='text-left mb-4'>Pinned Board</span>
                    <div className="flex-grow">
                        <Board title="GradMeet's Board" height="100%" />
                    </div>
                </div>
                <div className="bg-white rounded-md p-6 h-96 shadow-sm flex flex-col">
                    <span className='text-left mb-4'>Calendar</span>
                    <div className="flex-grow flex justify-center items-center">
                        <BasicDateCalendar />
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 h-96 md:col-span-2">Tasks</div>
            </div>
        </div>
    );
};

export default DashboardHome;
