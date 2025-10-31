import Card from './../Cards/Card';
import React from 'react'
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined';
import Looks5OutlinedIcon from '@mui/icons-material/Looks5Outlined';
import Looks6OutlinedIcon from '@mui/icons-material/Looks6Outlined';
import Filter7OutlinedIcon from '@mui/icons-material/Filter7Outlined';
import { useParams } from 'react-router-dom';
import SubCard from '../Cards/SubCard';

function Content({ cards }) {
    const { subName } = useParams();

    return (
        <div className="bg-gray-50">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                Contents
            </h1>
            <section className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {cards.map((card, index) => (
                        <SubCard
                            title={card.title}
                            url={card.link}
                        />
                    ))}
                </div>
            </section>
        </div>

    )
}
export default Content;