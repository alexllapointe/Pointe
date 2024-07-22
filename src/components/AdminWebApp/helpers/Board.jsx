import React from 'react';

const Board = ({ title, height = '80vh', condensed = false }) => {
    return (
        <div className={`bg-white rounded-lg p-6 w-full ${condensed ? '' : 'max-w-7xl'}`} style={{ height }}>
            <h1 className="text-left text-xl mb-4">{title}</h1>
            <div className={`flex flex-col h-full gap-4 ${condensed ? 'p-2' : ''}`}>
                <div className="flex-1 border-t-2 border-t-[#37d98f]"></div>
                <div className="flex-1 border-t-2 border-t-yellow-500"></div>
                <div className="flex-1 border-t-2 border-t-red-500"></div>
            </div>
        </div>
    );
};

export default Board;
