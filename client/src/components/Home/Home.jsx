import React from 'react';
import Button from '@mui/material/Button';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import ShowCard from '../Cards/ShowCard';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

function Home() {
    const navigate = useNavigate();

    const cardData = [
        {
            icon: <ImportContactsIcon sx={{ fontSize: '4rem' }} />,
            title: 'Organized by Semester',
            description:
                'All materials neatly organized by semester and subject for easy navigation.',
            isBeta: false,
        },
        {
            icon: <SearchIcon sx={{ fontSize: '4rem' }} />,
            title: 'Quick Search',
            description:
                'Find subjects and materials instantly with our powerful search functionality.',
            isBeta: true,
        },
        {
            icon: <BookmarkBorderOutlinedIcon sx={{ fontSize: '4rem' }} />,
            title: 'Save Favorites',
            description:
                'Bookmark your favorite materials for quick access anytime.',
            isBeta: true,
        },
    ];

    const handleOnClick = (url) => {
        navigate(url);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-6 py-14 text-center">
                <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6">
                    Your Complete B.Tech Study Companion
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                    Access organized study materials, notes, and PDFs for all semesters. Find exactly what you need, when you need it.
                </p>
                <Button
                    onClick={() => handleOnClick('/choose-course')}
                    variant="contained"
                    sx={{
                        backgroundColor: '#00897b',
                        '&:hover': { backgroundColor: '#00695c' },
                        padding: '12px 32px',
                        fontSize: '16px',
                        borderRadius: '8px',
                    }}
                >
                    Browse Materials
                </Button>
            </section>

            {/* Features Section */}
            <section className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {cardData.map((card, index) => (
                        <ShowCard
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                            isBeta={card.isBeta}
                        />
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="max-w-5xl mx-auto px-6 py-10 text-center">
                <div className="flex flex-col items-center text-white gap-6 rounded-2xl shadow-xl p-12 bg-gradient-to-r from-teal-600 to-teal-700">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Ready to Ace Your Exams?
                    </h2>
                    <p className="text-lg sm:text-xl opacity-90 max-w-xl">
                        Start exploring study materials for your semester now.
                    </p>
                    <Button
                        onClick={() => handleOnClick('/choose-course')}
                        variant="contained"
                        sx={{
                            backgroundColor: '#00bfa5',
                            '&:hover': { backgroundColor: '#009688' },
                            padding: '12px 32px',
                            fontSize: '16px',
                            borderRadius: '8px',
                        }}
                    >
                        Explore Now
                    </Button>
                </div>
            </section>
        </div>
    );
}

export default Home;
// D:\Web Development\Session 5(Mini project)\react\LearningSM\client\src\components\Home\Home.jsx