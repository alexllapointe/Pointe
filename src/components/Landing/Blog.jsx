import React, { useState } from 'react';
import useScrollToTop from '../../hooks/useScrollToTop';

const Blog = () => {
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
        <div>
            <h1> Hello</h1>
        </div>
    );
};

export default Blog;
