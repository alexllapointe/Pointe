import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    const navigate = useNavigate();

    return (
        <div className="w-screen h-screen bg-white flex items-center justify-center p-4 md:p-8">
            <div className="w-full md:w-2/3 lg:w-1/2 flex flex-row items-start space-x-8">
                <div className="flex flex-col space-y-10 pl-6 max-w-md">
                    <h1 className="text-midnightBlack text-4xl md:text-5xl font-semibold">Your on-the-go project management tool.</h1>
                    <p className="text-midnightBlack text-sm md:text-md">Providing inviduals and teams of all sizes  an easy way to collaborate in real time.</p>
                    <button
                        onClick={() => navigate('/pricing')}
                        className="bg-trueGreen text-white py-2 px-4 rounded-full self-start mt-4 flex items-center space-x-2 hover:bg-green-200 transition-all duration-300 ease-in-out">
                        <a>Get Started</a>
                        <ArrowForwardIcon />
                    </button>
                </div>
                <div className="hidden md:flex items-center justify-center">
                    {/* Placeholder for the image */}
                    <div className="w-64 h-64 bg-gray-300 rounded"></div>
                </div>
            </div>
        </div>
    )
}

export default Home
