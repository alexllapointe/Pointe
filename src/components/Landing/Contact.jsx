import React from 'react';
import { LocationOn, Email, Phone } from '@mui/icons-material';
import useScrollToTop from '../../hooks/useScrollToTop';

const Contact = () => {
    useScrollToTop();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <div className="flex flex-col items-center w-full md:w-3/4 p-4 space-y-4 mt-5 md:mb-40">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
                <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4">
                    <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded shadow w-full md:w-1/3">
                        <LocationOn className="text-trueGreen" style={{ fontSize: 40 }} />
                        <p className="text-gray-700 mt-4 text-center">Bloomington, Indiana</p>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded shadow w-full md:w-1/3">
                        <Email className="text-trueGreen" style={{ fontSize: 40 }} />
                        <p className="text-gray-700 mt-4 text-center">support@pointe.com</p>
                    </div>
                    <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded shadow w-full md:w-1/3">
                        <Phone className="text-trueGreen" style={{ fontSize: 40 }} />
                        <p className="text-gray-700 mt-4 text-center">(317) 518-9749</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
