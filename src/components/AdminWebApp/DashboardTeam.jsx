import React from 'react';

const DashboardTeam = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-2 p-4 w-full max-w-7xl">
        <div className="bg-white rounded-lg shadow-md p-6 h-96">Team</div>
        <div className="bg-white rounded-lg shadow-md p-6 h-96">Stats</div>
      </div>
    </div>
  );
};

export default DashboardTeam;
