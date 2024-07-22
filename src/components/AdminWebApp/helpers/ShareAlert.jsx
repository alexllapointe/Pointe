import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const ShareAlert = ({ open, onClose }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-md md:w-full w-5/6 p-4">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-4">
                    <h3 className="text-lg text-midnightBlack font-semibold">General Access</h3>
                    <CloseIcon
                        onClick={onClose}
                        className="cursor-pointer text-gray-500 hover:text-red-500 transition duration-300"
                    />
                </div>
                <div className="mb-4">
                    <p className="text-midnightBlack">Anyone with the link can access</p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                    <button
                        onClick={() => navigator.clipboard.writeText('your-link-here')} // Replace 'your-link-here' with the actual link
                        className="text-trueGreen border border-midnightBlack px-4 py-2 rounded-md hover:bg-gray-100 transition duration-300"
                    >
                        Copy Link
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-trueGreen text-white px-4 py-2 rounded-md hover:bg-green-200 transition duration-300"
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShareAlert;
