import Card from './../Cards/Card';
import React from 'react'
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined';
import Looks5OutlinedIcon from '@mui/icons-material/Looks5Outlined';
import Looks6OutlinedIcon from '@mui/icons-material/Looks6Outlined';
import Filter7OutlinedIcon from '@mui/icons-material/Filter7Outlined';
import Filter3Icon from '@mui/icons-material/Filter3';
import { useParams } from 'react-router-dom';
import Filter5Icon from '@mui/icons-material/Filter5';
import Filter1Icon from '@mui/icons-material/Filter1';

function Semester() {
    const { courseName } = useParams();
    const courses = [
        { title: "Sem", icon: <Filter1Icon sx={{ fontSize: '4rem' }} />, isBeta: false, url: `/${courseName}/1st-sem` },
        { title: "Sem", icon: <LooksTwoOutlinedIcon sx={{ fontSize: '4rem' }} />, isBeta: false, url: `/${courseName}/2nd-sem` },
        { title: "Sem", icon: <Filter3Icon sx={{ fontSize: '4rem' }} />, isBeta: false, url: `/${courseName}/3rd-sem` },
        { title: "Sem", icon: <Looks4OutlinedIcon sx={{ fontSize: '4rem' }} />, isBeta: false, url: `/${courseName}tech/4th-sem` },
        { title: "Sem", icon: <Filter5Icon sx={{ fontSize: '4rem' }} />, isBeta: false, url: `/${courseName}/5th-sem` },
        { title: "Sem", icon: <Looks6OutlinedIcon sx={{ fontSize: '4rem' }} />, isBeta: false, url: `/${courseName}/6th-sem` },
        { title: "Sem", icon: <Filter7OutlinedIcon sx={{ fontSize: '4rem' }} />, isBeta: false, url: `/${courseName}/7th-sem` }];

    return (
        <div className="bg-gray-50">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                Select Semester
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

export default Semester;
// D:\Web Development\Session 5(Mini project)\react\LearningSM\client\src\components\Pages\Semester.jsx