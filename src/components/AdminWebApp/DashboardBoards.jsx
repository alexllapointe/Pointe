import React from 'react';
import Board from './helpers/Board.jsx'

const DashboardBoards = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start mt-20 px-4 md:px-20">
            <Board title="GradMeet's Board" height="80vh" /> {/* Use the Board component */}
        </div>
    );
};

export default DashboardBoards;
