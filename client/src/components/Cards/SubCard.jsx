import React from 'react';
import { useNavigate } from 'react-router-dom';

function SubCard({ title, semName = "", url, cards = [] }) {
    const navigate = useNavigate();

    const handleClick = (link) => {
        if (link.startsWith('http')) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
        // Otherwise → use React Router for internal navigation
        else {
            navigate(link);
        }
    };

    return (
        <div className="cursor-pointer relative flex flex-col items-center bg-white shadow-lg hover:shadow-2xl rounded-2xl p-8 w-80 transition-all duration-300 hover:-translate-y-2 border border-gray-100">

            {/* Main Title */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                {title}
            </h2>

            {/* Divider */}
            <div className="w-16 h-1 bg-indigo-500 rounded-full mb-4"></div>

            {/* Subcards Section */}
            <div className="w-full grid grid-cols-1 gap-3">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        onClick={(e) => {
                            e.stopPropagation(); // prevent parent click
                            handleClick(card.links);
                        }}
                        className="bg-indigo-50 hover:bg-indigo-100 text-indigo-800 rounded-lg py-2 px-3 text-center shadow-sm hover:shadow-md transition duration-300"
                    >
                        {card.title}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SubCard;
