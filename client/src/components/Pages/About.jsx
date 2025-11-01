import React from 'react';
import { School, Group, TrendingUp, Favorite } from '@mui/icons-material';

function About() {
    const features = [
        {
            icon: <School sx={{ fontSize: '3rem' }} />,
            title: 'Comprehensive Resources',
            description: 'Access a wide range of study materials, notes, and resources organized by semester and subject for easy learning.'
        },
        {
            icon: <Group sx={{ fontSize: '3rem' }} />,
            title: 'Student-Focused',
            description: 'Built by students, for students. We understand your needs and provide materials that actually help you succeed.'
        },
        {
            icon: <TrendingUp sx={{ fontSize: '3rem' }} />,
            title: 'Always Updated',
            description: 'Regular updates with the latest syllabus, PYQs, and study materials to keep you ahead in your academic journey.'
        },
        {
            icon: <Favorite sx={{ fontSize: '3rem' }} />,
            title: 'Free & Accessible',
            description: 'All materials are completely free and accessible to every student. Education should be available to all.'
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-6 py-8 text-center">
                <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6">
                    About Learnify Verse
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    Your trusted companion for B.Tech studies. We're on a mission to make quality education accessible to every engineering student.
                </p>
            </section>

            {/* Story Section */}
            <section className="max-w-5xl mx-auto px-6 py-8">
                <div className="bg-white rounded-2xl shadow-xl p-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            Learnify Verse was born out of a simple idea: every student deserves easy access to quality study materials. As engineering students ourselves, we experienced the frustration of searching through countless websites and sources to find the right notes, PDFs, and previous year questions.
                        </p>
                        <p>
                            We decided to create a centralized platform where all B.Tech resources are organized, accessible, and free. What started as a small collection of notes has grown into a comprehensive library serving students across multiple semesters and subjects.
                        </p>
                        <p>
                            Today, Learnify Verse continues to evolve with contributions from students and educators who share our vision of making education more accessible. We're committed to helping you excel in your academic journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="max-w-7xl mx-auto px-6 py-14">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-12 text-center">
                    What Makes Us Different
                </h2>
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="text-teal-600 mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm text-center leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mission Section */}
            <section className="max-w-5xl mx-auto px-6 py-10 mb-10">
                <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl shadow-xl p-10 text-white">
                    <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
                        To empower every engineering student with free, organized, and comprehensive study materials that enable them to learn, grow, and succeed in their academic pursuits. We believe education is a right, not a privilege.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default About;