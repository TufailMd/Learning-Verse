import React from 'react'
import ImportantDevicesOutlinedIcon from '@mui/icons-material/ImportantDevicesOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
import CompostOutlinedIcon from '@mui/icons-material/CompostOutlined';
import Card from './../Cards/Card';


function Courses() {
    const courses = [{ title: "B.Tech CSE", icon: <ImportantDevicesOutlinedIcon sx={{ fontSize: '4rem' }} />, isBeta: false, url: '/cse/choose-semester' },
    { title: "B.Tech Cyber Security", icon: <SecurityOutlinedIcon sx={{ fontSize: '4rem' }} />, isBeta: true, url: '/cyber-security/choose-semester' },
    { title: "B.Tech AI", icon: <SmartToyOutlinedIcon sx={{ fontSize: '4rem' }} />, isBeta: true, url: '/ai/choose-semester' },
    { title: "B.Tech BioTechnology", icon: <BiotechOutlinedIcon sx={{ fontSize: '4rem' }} />, isBeta: true, url: '/bio-tech/choose-semester' },
    { title: "B.Sc BioTechnology", icon: <CompostOutlinedIcon sx={{ fontSize: '4rem' }} />, isBeta: true, url: '/bio-tech/choose-semester' }];

    return (
        <div className="bg-gray-50">

            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                Select Course
            </h1>

            <section className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {courses.map((card, index) => (
                        <Card
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            url={card.url}
                            isBeta={card.isBeta}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Courses;
// D:\Web Development\Session 5(Mini project)\react\LearningSM\client\src\components\Pages\Courses.jsx