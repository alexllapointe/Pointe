import React, { useState } from 'react';
import useScrollToTop from '../../hooks/useScrollToTop';

const ComingSoon = () => {
    useScrollToTop();

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setEmailError('Invalid email format');
        } else {
            setEmailError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (emailError) {
            alert('Please fix the errors before submitting');
            return;
        }
        // Handle form submission
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8">
            <div className="flex flex-col w-full md:w-1/3 lg:w-1/4 p-4 space-y-4 mt-20 md:mt-10">
                <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-gray-900">Coming soon</h1>
                <p className="text-gray-700 md:text-sm lg:text-base">Subscribe to our newsletter to stay up to date with the latest news and information!</p>
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                        className={`p-2 border-b ${emailError ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-trueGreen`}
                    />
                    {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
                    <button
                        type="submit"
                        className="p-2 bg-trueGreen text-white rounded-md hover:bg-green-200"
                    >
                        Sign up
                    </button>
                </form>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 h-64 md:h-96 lg:h-full flex items-center justify-center bg-gray-200">
                <p className="text-gray-500 md:text-sm lg:text-base">Image Placeholder</p>
            </div>
        </div>
    );
};

export default ComingSoon;
