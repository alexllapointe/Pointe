import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorPopup from '../../utilities/ErrorPopup';
import SuccessPopup from '../../utilities/SuccessPopup';
import pointeLogo from '../../assets/pointe-logo-transparent.png'

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const navigate = useNavigate();

    const loginUser = async () => {
        try {
            const params = new URLSearchParams();
            params.append('email', email);
            params.append('password', password);

            const response = await api.post('/auth/login', params, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });

            if (response.status === 200) {
                setPopupMessage('Welcome, ' + email);
                setEmail('');
                setPassword('');
                localStorage.setItem('userToken', response.data);

                login(); // Set the user as authenticated in the AuthContext

                setShowSuccessPopup(true);

                setTimeout(() => {
                    setShowSuccessPopup(false);
                    navigate('/');
                }, 2000);
            }
        } catch (error) {
            console.error('Login failed', error);
            setPopupMessage('Login failed. Please try again.');
            setShowErrorPopup(true);
            setTimeout(() => {
                setShowErrorPopup(false);
            }, 3000);
        }
    };

    return (
        <section className="h-screen bg-webgray">
            <div className="container mx-auto py-5 h-full">
                <div className="flex justify-center items-center h-full">
                    <div className="w-full max-w-sm md:max-w-md">
                        <div className="bg-white text-midnightBlack rounded-lg shadow-xl">
                            <div className="p-5 text-center">
                                <img
                                    src={pointeLogo}
                                    alt="Pointe Logo"
                                    className="mx-auto mb-5 cursor-pointer"
                                    onClick={() => navigate('/')}
                                    style={{ maxWidth: '20%', height: 'auto' }}
                                />
                                <h2 className="text-2xl font-semibold mb-7 uppercase text-midnightBlack">Sign in</h2>
                                <div className="w-full mb-4">
                                    <div className="w-full mb-4">
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-trueGreen"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                                <div className="w-full mb-5">
                                    <div className="w-full mb-5">
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="w-full p-2 border-b border-gray-300 focus:outline-none focus:border-trueGreen"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>
                                <button
                                    className="w-full px-5 py-2 border border-gray-200 text-midnightBlack font-semibold py-2 rounded hover:bg-trueGreen hover:text-white transition duration-300"
                                    type="submit"
                                >
                                    Login
                                </button>
                                <div className="mt-5">
                                    <p className="text-xs text-midnightBlack">
                                        Don't have an account?
                                        <span> </span>
                                        <a href="/register" className="text-midnightBlack font-semibold hover:underline transition duration-300">Sign Up</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showErrorPopup && (
                <ErrorPopup open={showErrorPopup} onClose={() => setShowErrorPopup(false)} message={popupMessage} />
            )}
            {showSuccessPopup && (
                <SuccessPopup open={showSuccessPopup} onClose={() => setShowSuccessPopup(false)} message={popupMessage} />
            )}
        </section>
    );
}

export default LoginPage;
