import Card from './../Cards/Card';
import React from 'react'
import { useParams } from 'react-router-dom';
import SubCard from '../Cards/SubCard';

function Sem() {
    const CSE_SUBJECTS = [
        // 1st Semester
        [
            {
                name: "Mathematics-I",
                cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1NcYggETXFu-JWz6xMg6UGFpy9W0jy8zr?usp=sharing" },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1N3Gw_AFMDfyasIy_Z_zmNWGyEcKldmRq?usp=drive_link" },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1qoVX2WB-bOj-uwaWb1uZMIObbOtwu1RY?usp=drive_link", },
                    { title: "Assignment & Tutorials", links: "https://drive.google.com/drive/folders/1e8GQGQ9j-K--w15eEWR62LOi1IE8OZFd?usp=drive_link" },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1Vnh7lb3ps52_EznX5rsUDKBeXsusdLJQ?usp=drive_link" },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1PtxI9orGHaPoleODgM_DYHcykpCSkO05?usp=sharing" },
                ],
            },

            {
                name: "Engineering Physics",
                cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1RH4ET57BoLJ_kCbeiLtgmdcLkJqJ6H1k?usp=drive_link" },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1PKScGkzig8lIq_vqiK-zdULcLEYLS4x1?usp=drive_link" },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1467uXWodcR0oWa8-OEjTJGBv0DXPdCEf?usp=drive_link" },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/15lDAR_42x7-olGNO5UlQL8ojq2XOe_FE?usp=drive_link" },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1ZRAsBs_b2maXKuVCwsHHzJP62MJCIigw?usp=drive_link" },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/17wAg6E1yY2woHz3klPjuR61hGLuBoAD0?usp=drive_link" },
                ],
            },

            {
                name: "CTSD-1",
                cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1Iw6y06kr0BlIxsaASY47tjAbAWqeaEoV?usp=drive_link" },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1MFWq-lqbu9N-fJtut7-ALgrPLW_uVayg?usp=drive_link" },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1cT2QKBu606FhQC0OARfF-WEfmGUG6KOG?usp=drive_link" },
                    { title: "Lab Manual & VIVA ", links: "" },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/19fzyoyINgsbfFaPBZ0KHFk-28N8yml6H?usp=drive_link" },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1iSpd6gVf0e6pY6hs-5reZ63xkJijMSQb?usp=drive_link" },
                ],
            },

            {
                name: "OSS",
                cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1R_xoaUXnS3bIhECIR97zmoi2QyklLVnC?usp=drive_link" },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1cPAUr1VRQ0RqZJePcuYYUIdOJLTf-MVX?usp=drive_link" },
                    { title: "Lab Manual & VIVA", links: "https://drive.google.com/drive/folders/1RVitJApk6E6RD_z753W6YSzl5S4jSkRX?usp=drive_link" },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1Kpvkwq0e5M239gn69tHgflCpgwuG5cz0?usp=drive_link" },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1_fjStOacJybVaxERovqUxP7IIE9SOkvK?usp=drive_link" },
                ],
            },

            {
                name: "Communication Skills",
                cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1JOZqAylQksEpl8-SRRGhJ6jA6X0dGkma?usp=drive_link" },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1Aqy-ZM-fsEBfMK-Q-ejIJkU05AsBI-Eh?usp=drive_link" },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/13nNqsWGs2Tebv6V4tt02r-xwspCCW0pA?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1dcODi6C92S8TuCNKFnqEnMK1xjg80J8n?usp=drive_link" },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1Ke0dT1Yf7v1P6-5SnsniERwO-yGWk5Kw?usp=drive_link" },
                ],
            },

            {
                name: "Engineering Graphics",
                cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1nabnDQoM8BiSXhDhWW1RnV8UdPS-DvHA?usp=drive_link" },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1jUaNaR-iAUNQk1mTe4d3tDixgNnKpHJe?usp=drive_link" },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/13nNqsWGs2Tebv6V4tt02r-xwspCCW0pA?usp=drive_link", },
                    // { title: "Lab Manual & VIVA ", links: "" },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/16_cJSMXDAhR5Tu9ItWd-0s9dcW0FZQfF?usp=drive_link" },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/198szPry6-gB-eg8Pqkg_Ua7j8AmXLaCl?usp=drive_link" },

                ],
            },
            {
                name: "Environmental Science", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1ic_uudKMdVCOXsAZZcy3HHt6KTjkASs-?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1mv4Zc3GYKuZVCHPwDxgXTKsixZR82loV?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1xzLByvGXEA6wgyyL-r2y1ax0tYUresP0?usp=drive_link", },
                    // { title: "Lab Manual & VIVA ", links: "", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1wq0U0_eCLq4cDe1lfn18zEoauCtIdMiU?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1cApYXM5uQMk-U04UuRNO4aCIDzat4Iyz?usp=drive_link", },
                ]
            },
        ],

        // {
        //     name: "CTSD-1", cards: [
        //         { title: "Syllabus", links: "", },
        //         { title: "All Unit", links: "", },
        //         { title: "Notes & Assignment", links: "", },
        //         { title: "Lab Manual & VIVA ", links: "", },
        //         { title: "PYQs", links: "", },
        //         { title: "All Material", links: "", },]
        // },
        // 2nd Semester
        [
            "Mathematics-II",
            "Data Structures",
            "Digital Logic Design",
            "Discrete Mathematics",
            "Object-Oriented Programming (C++)",
            "Communication Skills",
            "DS Lab",
            "OOP Lab",
        ],

        // 3rd Semester
        [
            "Computer Organization",
            "Operating Systems",
            "Database Management Systems",
            "Design and Analysis of Algorithms",
            "Software Engineering",
            "DBMS Lab",
            "Algorithm Lab",
            "Mini Project",
        ],

        // 4th Semester
        [
            "Computer Networks",
            "Theory of Computation",
            "Microprocessors",
            "Web Technologies",
            "Probability & Statistics",
            "Network Lab",
            "Microprocessor Lab",
            "Web Tech Lab",
        ],

        // 5th Semester
        [
            {
                name: "Design and Analysis of Algorithms", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1rPf1HyPszF5BTGj50SwbpOhk1nEhNuIt?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1wKSMWnAA4R39RvrFwDOFOa7u-1wzoDjh?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1nX0kNg3Df6RqrCMXGSBr0TLaZnHd30bx?usp=drive_link", },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/1B0ZU0cchq2Ev-KIGMgM6DmAnhjUYvj3e?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1A1P7hPtpA0gkbnjBxLLIIN0TMtnIu3yS?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1Um-JW_Wk9H-7D16GvRAnt_pSTuTrFAHu?usp=drive_link", },]
            },

            {
                name: "Theory of Computation", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/19aiHjgTdAx2CU2mB6jrB-8tKNcz5sKsK?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1bvAmAQVABbU2VfTHeXdUkjD0XrYXS_-l?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1aC3hJPvwEUf8VoOOPESlinyAwMtKiwto?usp=drive_link", },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/150iTjvJYd_bBZ9s5otmL4ZIm2HijMbpH?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1QFxNRqb4l1BhYd2OfK4cbKpDKvQVf1Fr?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1CegjwaxXWSsW-pszFawx9MhIhkhcqL2N?usp=drive_link", },]
            },

            {
                name: "Software Engineering", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1Lg9JpxDLrGRpGkgHyVuVcundDGPk3fJo?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1U2uwsHxnmLzIFSZ0N4B9R4kEmTwWP8bQ?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1q8Uzeoh0nFmb-GFyVFU_pWyjdUA7Dzs8?usp=drive_link", },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/1783KulTsb9xyZNF6kiQQuq8rETW3bj6R?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1TDc54Bw0ie4NGu5-Tr9-JVkhEIrE4dy0?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1sW5moD78t1PLYkvOnyuvymot5-H_5ZZh?usp=drive_link", },]
            },

            {
                name: "Enterprise Programming", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1QAUd3dy6tuM_cI2gwmPgLM0UzWljebSi?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/10_PDDgZPAt9NW_eiaLkI4Nhp9dns88om?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1fKlURsbqegHgesbeHVmhW_HjPLY7acZu?usp=drive_link", },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/1SNZO7HzNauJlQ3XuZUF1kdw9Tc7_ZgSC?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1QoqhTAyJc6aAT2fi_GBrX-0enjwstn7f?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1MWUGesb_onI9p2rBdqe3dDP4LE_Aenbl?usp=drive_link", },]
            },

            {
                name: "DADV", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1LG23QeYlsJ4bZBa27lWzDW3RZJLDWzkU?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1iT6aAS2dwcPevncSInkQuLNqTE_dHyfO?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1Qjw-jNYILTJj41cJWkzQS1ZMh27sehN0?usp=drive_link", },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/11phL-8gl0YGr-AYXVtAg57ETaWZfpV83?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1VlLJ71CzTA4--Ko79Xm3qP848mWOotZa?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1kmDxwklpJGGanP9UvR0A-axKXHHHgSww?usp=drive_link", },]
            },

            {
                name: "Azure || AWS", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1tujOEjAfl9mngqdyPqLtdA_9c2KW8rey?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1mugojIm7-4nsbuxrANTDNcj2zF2tiqPg?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1KsAMBhwij0j81ptA6iwCzJDs82rN0lHw?usp=drive_link", },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/163s-XX10g-Tq4lzz1Wz1avgMRM0sPsgG?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1TQii4SCUGMQghkCAk-R_AzFCP3eoSbws?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/13U0L92QFv03zI9jOD9rnUeGClh3kf0b2?usp=sharing", },]
            },

            // {
            //     name: "Professionalism & Corporate Ethics", cards: [
            //         { title: "Syllabus", links: "", },
            //         { title: "All Unit", links: "", },
            //         { title: "Notes & Assignment", links: "", },
            //         { title: "Lab Manual & VIVA ", links: "", },
            //         { title: "PYQs", links: "", },
            //         { title: "All Material", links: "", },]
            // },

            // {
            //     name: "Quant, and Reasoning", cards: [
            //         { title: "Syllabus", links: "", },
            //         { title: "All Unit", links: "", },
            //         { title: "Notes & Assignment", links: "", },
            //         { title: "Lab Manual & VIVA ", links: "", },
            //         { title: "PYQs", links: "", },
            //         { title: "All Material", links: "", },]
            // },


        ],

        // [
        //         {
        //         name: "Theory of Computation", cards: [
        //             { title: "Syllabus", links: "", },
        //             { title: "All Unit", links: "", },
        //             { title: "Notes & Assignment", links: "", },
        //             { title: "Lab Manual & VIVA ", links: "", },
        //             { title: "PYQs", links: "", },
        //             { title: "All Material", links: "", },]
        //         },
        //     ]

        // 6th Semester
        [
            "Data Mining",
            "Big Data Analytics",
            "Internet of Things (IoT)",
            "Cyber Security",
            "Open Elective-II",
            "IoT Lab",
            "Cyber Security Lab",
            "Minor Project",
        ],

        // 7th Semester
        [
            "Blockchain Technology",
            "Advanced Machine Learning",
            "Elective-III",
            "Elective-IV",
            "Seminar",
            "Major Project Phase-I",
            "Industrial Training",
            "Research Methodology",
        ],

        // 8th Semester
        [
            "Deep Learning",
            "Elective-V",
            "Elective-VI",
            "Major Project Phase-II",
            "Internship",
            "Technical Presentation",
            "Comprehensive Viva",
            "Entrepreneurship Development",
        ],
    ];

    const { courseName, sem } = useParams();

    function getSem() {
        switch (sem) {
            case '1st-sem':
                return CSE_SUBJECTS[0];
            case '2nd-sem':
                return CSE_SUBJECTS[1];
            case '3rd-sem':
                return CSE_SUBJECTS[2];
            case '4th-sem':
                return CSE_SUBJECTS[3];
            case '5th-sem':
                return CSE_SUBJECTS[4];
            case '6th-sem':
                return CSE_SUBJECTS[5];
            case '7th-sem':
                return CSE_SUBJECTS[6];
            case '8th-sem':
                return CSE_SUBJECTS[7];
            default:
                break;
        }
    }

    const subjects = getSem();

    return (
        <div className="bg-gray-50">

            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
                Select Subject
            </h1>

            <section className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                    {subjects.map((sub, index) => (
                        <SubCard
                            key={index}
                            title={sub.name}
                            cards={sub.cards}
                            url={`/${courseName}/${sem}/${sub.name.toLowerCase().replace(/ /g, '-')}`}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Sem