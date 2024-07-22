import React, { useState, useRef, useEffect } from 'react';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import useScrollToTop from '../../hooks/useScrollToTop';

const SecurityPrivacy = () => {
    const [expandedSections, setExpandedSections] = useState([false, false, false, false]);
    const contentRefs = useRef([]);

    useScrollToTop();

    const toggleSection = (index) => {
        setExpandedSections((prev) => {
            const newSections = [...prev];
            newSections[index] = !newSections[index];
            return newSections;
        });
    };

    useEffect(() => {
        expandedSections.forEach((isExpanded, index) => {
            const content = contentRefs.current[index];
            if (content) {
                content.style.maxHeight = isExpanded ? `${content.scrollHeight}px` : '0px';
            }
        });
    }, [expandedSections]);

    const question_cards = [
        { question: 'Question 1', answer: 'This is the detailed answer for Question 1.' },
        { question: 'Question 2', answer: 'This is the detailed answer for Question 2.' },
        { question: 'Question 3', answer: 'This is the detailed answer for Question 3.' },
        { question: 'Question 4', answer: 'This is the detailed answer for Question 4.' }
    ];

    return (
        <div className="flex flex-col items-center min-h-screen p-8">
            <div className="w-full p-4 space-y-8 mt-20">
                <h1 className="text-5xl font-bold text-gray-900 text-center mb-8">Data Security</h1>
                <p className="text-gray-700 mb-8 text-center">
                    We prioritize the security and privacy of our users. Below you will find detailed information on our security and privacy practices.
                </p>

                {/* Security Section */}
                <div className="bg-gray-100 p-6 rounded flex flex-col items-start space-y-4 w-full px-8">
                    <div className="flex-1 p-4">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Security</h2>
                        <p className="text-gray-700">
                            Our security measures are designed to protect your data from unauthorized access and ensure its confidentiality.
                        </p>
                    </div>
                </div>

                {/* Privacy Section */}
                <div className="bg-white p-6 rounded flex flex-col justify-center items-center space-y-4 w-full px-8">
                    <div className="flex-1 p-4">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-center">Privacy</h2>
                        <p className="text-gray-700 text-center">
                            We are committed to maintaining the privacy of our users. Learn more about how we handle your personal information.
                        </p>
                    </div>
                </div>

                {/* App Security Section */}
                <div className="bg-gray-100 p-6 rounded flex flex-col items-start space-y-4 w-full px-8 mb-16">
                    <div className="flex-1 p-4">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">App Security</h2>
                        <p className="text-gray-700">
                            Our security measures are designed to protect your data from unauthorized access and ensure its confidentiality.
                        </p>
                    </div>
                </div>

                {/* Frequently Asked Questions */}
                <h2 className="text-3xl pt-10 md:pt-20 font-bold text-gray-900 text-center mb-8">Frequently Asked Questions</h2>

                {/* Expandable Sections */}
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 gap-4 w-full md:w-1/2">
                        {question_cards.map((card, index) => (
                            <div key={index} className="bg-gray-100 rounded mb-4">
                                <button
                                    onClick={() => toggleSection(index)}
                                    className="w-full flex justify-between items-center p-4"
                                >
                                    <span className='text-midnightBlack text-xl font-semibold'>{card.question}</span>
                                    <span>{expandedSections[index] ? <ExpandLess className="text-trueGreen" /> : <ExpandMore className="text-trueGreen" />}</span>
                                </button>
                                <div
                                    ref={(el) => (contentRefs.current[index] = el)}
                                    className="overflow-hidden transition-max-height duration-500 ease-in-out"
                                    style={{ maxHeight: '0px' }}
                                >
                                    <div className="p-4 text-midnightBlack">
                                        <p>{card.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecurityPrivacy;
