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

        // 2nd Semester
        [
            {
                name: "CTSD-2", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1rA9YS0_4IyBK305mLpSEMpIasityH2fn?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1rTo0uLyXWSUCduTFrSj0dO7B8X0y_57R?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1EmwM7XrWK6sJEtbJAlujGyCWTjG1IqXV?usp=drive_link", },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/1ePEYofWWKVpBHhLmjR478bZvRKdfIRDB?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1-3zZWIagaI_0yJtq0VjrOuxwEIyMxdF9?usp=drive_link", },
                    { title: "Question Bank", links: "https://drive.google.com/drive/folders/1LcjGzw7Azfpsz8vvyIYJC9oCv0_KKDX_?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1z4NewF_KJFzpAh1haVZQTnKjhMDUQxpS?usp=drive_link", },]
            },

            {
                name: "Mathematics-II", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1ZWV-mgnbh_r3DBxC3AHXI4qV_3ObdanU?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1sJSEwQ6e8pmp3rtH_dGeB-hXZ5pqexjZ?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1Jmgw-x2xliqmEBwUkDJ6FUnkkslCfWol?usp=drive_link", },
                    { title: "Formula", links: "https://drive.google.com/drive/folders/1hUB8__eXp-msjIEkA2y-gSk6GcjGN44q?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1rZmxoUE-NHVzOTbNCDOIXHqYNlsiHfC2?usp=drive_link", },
                    { title: "Question Bank", links: "https://drive.google.com/drive/folders/1nulouJzaVi5dF_r6wlBx6f0bLC7_okot?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1oOWwrMXSqBt_sRB6GRDY63d1SXhahoHs?usp=drive_link", },]
            },

            {
                name: "BEE || EEE", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1woYkUeAoquHokcxb3EVZ4o_Zf1DP_kzQ?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1O_QXz-_gmWID0bpYVHhMJBz64cJq3fpU?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/11bM_LmfhhWXh2tpTHVAj4r88rn60lDU0?usp=drive_link", },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/1j7W5cuki4LAMzlChg9B4NyR7tYUjfQQo?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1BatVfAQmvQEm82wqrBxg3MUNwtyXETvO?usp=drive_link", },
                    { title: "Question Bank", links: "https://drive.google.com/drive/folders/1evx6E4H6yBu-5BJArffhPUuGZGtRWpMo?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1_u9ldDoMrLpMvVda02H-v9xk8t17popK?usp=drive_link", },]
            },


            {
                name: "Design Thinking", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/18MFs0AilLmZfAq-eYB0-wDyC1Qm_4OJP?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/11k8LdNtCVz9wUbLNhru_pw3B-12q_L1c?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1qZRqN33EcE5_r0e0GO9jnvSoVnG6L-UH?usp=drive_link", },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/1OlepTPGbvjWoh9lo4ecrF1s0cB37zngW?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1bmgYDaUnhcRynfrvikaWqSjGmqjVEG4Z?usp=drive_link", },
                    { title: "Question Bank", links: "https://drive.google.com/drive/folders/1pbunJGB0G-WGCE7buFkDHFOebWjyQRpU?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1P-4r_ZTd9y5UUKHaF0eKsuvGY8ORzZ1q?usp=drive_link", },]
            },

            {
                name: "Global Certifications - Fundamentals (Azure, AWS, GCP)", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1VftKltOwfHUEIlceEBS1nT0WR4IwoM1T?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1fEkIvmS9q0HxQeLMjBqjzGtaDOCTGEkM?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1BiiOL_oNs1U0cT86mLaU3eBqJEOO3cik?usp=drive_link", },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/1fUs_jckyVuZ2DZvgBgkDKENyflm7Th0i?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/19V3pqQCfLKNy_WrFd6a8zUjtQdDcGRvV?usp=drive_link", },
                    { title: "Question Bank", links: "https://drive.google.com/drive/folders/1kBdn-OiPT6xH2jaPpB79hZBvJEg6lseT?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1LGpI8xscJmAOOFQajNIuhwkbPKb8Pq5D?usp=drive_link", },]
            },

            {
                name: "Advanced Communication & Technical Writing", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1lOXjWKQJKOfbUIQb4miYqNhaWfTeA1dW?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1eWGJvtnxqtkbxqL2EHm7roQDMOpcmqmE?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1ZYDxW0FsyI4nXqaTEhbYXadGBSpKm3om?usp=drive_link", },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/1NiroRSOs1D-Bx5pGvavLhOg_u3mAc64I?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1GKjgPw1TMxGM7KbnwuExNC7hMMWaj1CL?usp=drive_link", },
                    { title: "Question Bank", links: "https://drive.google.com/drive/folders/1kOTdIo6GtY1C3xIiCT3r2YiSPe7NTwXC?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1sv7eh2ntLU15MhfXhbC8dAoVRtBLMCah?usp=drive_link", },]
            },
        ],

        // 3rd Semester

        [
            {
                name: "Design of Data Structures", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1rU7wUnDvbDdBks4PR4B6IHPyqJi7XaYl?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1LJ5iROI4PcaQbLgfxhu2f7j80cH8cE08?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1nN6TciUotw8CNRUDHvMznRQNt-YbXtrT?usp=drive_link", },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/160x3CWdaXbtZtg8aZde0awyqfCaecWJs?usp=drive_link", },
                    { title: "Question-Bank", links: "https://drive.google.com/drive/folders/1dt7c_LKtUnEuD9UMDLVdRZ7WnJa3HUyN?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1QTwJJltglvASPH-ltrs9JF3TF9xn8Aa-?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1Bfg_jskeSKtpxtfNIcOXb2bAb0NDAOcG?usp=drive_link", },]
            },

            {
                name: "Database Management System", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1V0hiicsCbw1CrnUZ6FKfJSNN9JPLAFD9?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1sVsE1lMlO-wy8aVkfQKxLVwtdrtiSwYB?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/18IX-lIRqPY0N92xfpzrSKfuoQzRDNDW6?usp=drive_link ", },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/1fRhuFE3QkbNsAzwD9uvnn0NLLqLHzPKK?usp=drive_link", },
                    { title: "Question-Bank", links: "https://drive.google.com/drive/folders/1DByruL_ZBxAOXoyq2yDR0uSjJ_oeetPN?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1ZvOZWinUk7h2E4xJY1-tcejVC8JDpR42?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1vSsj6aaOxE4Xa5M_bQWTBPInN7esXvd_?usp=drive_link", },]
            },

            {
                name: "DIGITAL ELECTRONICS", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1wyvArIc87kr_Q9wQF5p7a0lkTwXqFaWA?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1Lx9YCRTzUMZVJ9ida6Kw4Onkddsx7UrY?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1kpum53pGOc8VePXUlyx83kail7kHMYuh?usp=drive_link", },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/1FbSMszW-Y3BcLdKsc2Sh_ML31sctCEQY?usp=drive_link", },
                    { title: "Question-Bank", links: "https://drive.google.com/drive/folders/12mcmW3ukdJyvOMt3ydp9nQ0xHvm09hNZ?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1ECJCk5JFE9Y3rp0n5LRPVfJVpoOKASCg?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1tS4vvZg4-OihNyHXf8ITXIab4fJF-mEc?usp=drive_link", },]
            },

            {
                name: "Discrete Mathematics", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1S7USL0DhyBa34u3oFKeTLqIY5fg2NlHA?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1OV8Ms7jowQOPgzgE7jvyASWxuUsKn5rW?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1zy0uxFmAYKtRMCr7ogute2U2pZINzCD2?usp=drive_link", },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/13_e6Q1bWCmbLDeaA5BI2d-o60QEMmLt1?usp=drive_link", },
                    { title: "Question-Bank", links: "https://drive.google.com/drive/folders/1m2sbAnw4g_6PMWdbkjw1F3CwY_SIXRFS?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1255wZUQcjx6uCGMNYoRnZ935M4Jv3L6m?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/17iwxexsTs8Io_sNAtsOLgvaIbuhu8Mfm?usp=drive_link", },]
            },


            {
                name: "Theory of Computation", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1MRqm6U8rlCQ0vLLx9YcZDdIXAeZKdd4B?usp=drive_link", },
                    { title: "All Unit", links: "", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/14f1B0au09f1rHGeW_19sZ80gfprtpcn4?usp=drive_link", },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/1BbCwNryIEsX0LyBXOj7aLUrGpbgOt5AY?usp=drive_link", },
                    { title: "Question-Bank", links: "https://drive.google.com/drive/folders/1bFZ_l52-ctQgteBfwVQqVU7wSRXKbI5k?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/149j3E8GE3RqEW3YNLH7Helk50nFLmKRw?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1MRqm6U8rlCQ0vLLx9YcZDdIXAeZKdd4B?usp=drive_link", },]
            },

            // {
            //     name: "Theory of Computation", cards: [
            //         { title: "Syllabus", links: "", },
            //         { title: "All Unit", links: "", },
            //         { title: "Notes & Assignment", links: "", },
            //         { title: "Lab Manual & VIVA ", links: "", },
            //         { title: "PYQs", links: "", },
            //         { title: "All Material", links: "", },]
            // },
        ],

        // 4th Semester
        [
            {
                name: "DAA", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1zx5rxctAKdMR0eORGqc1XFveSzWa5V37?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1NV-FEm_jTs98299lKjB--sqhxrRo1-h8?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1EUPI32AcxofBlt4k2OWvqXqLEYmljZuc?usp=drive_link", },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/1Vo69xfN1IYEcMPv7leGf5lny9evIZZmu?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/16awdQ3qDaSfz-4OvRY73ZbzZjgoBUaXV?usp=drive_link", },
                    { title: "Question Bank", links: "https://drive.google.com/drive/folders/1TdO92sKybAb1tKwOVg0Z4_bjLb5Jj8gI?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1r5llOVybPNtuywOg7qvUjAsBs_35e2fX?usp=drive_link", },]
            },
            {
                name: "Operating System", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1bI9yUQYmsOplArCVNGrHiBHYEGeh5sZf?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1_q3IwiRyL1afJ5qSG_78ZzchnzU0Vnuk?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1W4c5bo7hqiL5PWYhKhELBGyGUKGtsguo?usp=drive_link", },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/1pYvgwn-uLjRBZnaTTrWm_YEH0pr8ZBcD?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1SwZJxtbbMbmROf2y9Z--x3OuU6HB5nJN?usp=drive_link", },
                    { title: "Question Bank", links: "https://drive.google.com/drive/folders/1w6pQkT8h1Yo8W-_QpQf6JC_O-rfk60i7?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1LRpy_IvrJDDDKLYBcH96SxErv8Xo4_cq?usp=drive_link", },]
            },

            {
                name: "Programming in Python with Full Stack Development", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1F6wKT3n_aGii3Z9MH_r1b7_OyGeP8eDa?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1hQvL3-JgWqlrZnLBRN9yRAoT9hLX97Ru?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1IXJFmLfV3YTae2r0pOwg2ydlJEY5dkYp?usp=drive_link", },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/1q0MtMtIQWRrBmhqmGTYhXNxJYG03IgQu?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/16BgnlZ6ry6VxkvP5hSsAsmoKJQMSCxCH?usp=drive_link", },
                    { title: "Question Bank", links: "https://drive.google.com/drive/folders/1Dt9xJmcf-Q9Sxd9SXdR3qFSi34TbvsSj?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/19Jvm7lUwooCK6ocQnkr-Hmowat17KqR4?usp=drive_link", },]
            },

            {
                name: "Probability, Statistics and Numerical Methods", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1s9JT7Ai9tkwtiH_b4Y2Qvu3U-qjwKG9K?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1cJVRPWHEsLV-goZV76Ihnqb3U6J1l9Lm?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1Rcbq1PJhGrWV1LDzSIc5_TYHp0A1MCTr?usp=drive_link", },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/1Yv-xNbbin0ZFPtyYgkezXBQF1rc-jHLe?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/15VpPj2EulTyq7LxoWsh3W4EJbqaggNsM?usp=drive_link", },
                    { title: "Question Bank", links: "https://drive.google.com/drive/folders/1LWp5GkYHwT3qyb7AJ3q7ZwLhYtkb8Khr?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1vTxWSiUtyMXm6IPoZy-W1zQdtSFXeaVA?usp=drive_link", },]
            },

            {
                name: "Computer Organization and Microprocessor", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1wh6zF7VYUB3WqufQ5rCU2HRSKM4P9NHJ?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1tyK_zv2N52NX4Ooq0k_MbY9cfDSY6avz?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/1Csz6Ns942xu6hgPqOXayrCMQa0rkOnBr?usp=drive_link", },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/1TmYxDjsu9mv8_yJapaOSoHv_rk7fx1Wx?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1ZY_XlQvnW_nJ74DXS2uCRi7AZvDBiA4c?usp=drive_link", },
                    { title: "Question Bank", links: "https://drive.google.com/drive/folders/1YaqKGBMvco2VaMjiUmgfjvC9j0XSEkP_?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1aSWtlD7WZ9IJn-ZVbtCGyQR-uQUJJISn?usp=drive_link", },]
            },

            {
                name: "Computer Network", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1jVyDWQ6WhBrCJHqNOTjy8EhX3MS5Gm21?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1niC9Ko5-WqFW3HQuJPPZ4c5YFnQ4lph9?usp=drive_link", },
                    { title: "Notes & Assignment", links: "https://drive.google.com/drive/folders/11IAGJvBcqker7Ll8vRKsUGq_p_Fy1cGi?usp=drive_link", },
                    { title: "Lab Manual & VIVA ", links: "https://drive.google.com/drive/folders/1NkvXvOQM2FvrUgoycBgfO_EK-IHxuURg?usp=drive_link", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1H83srJmbDhLe-emYOJo_uDu8bpgd2414?usp=drive_link", },
                    { title: "Question Bank", links: "https://drive.google.com/drive/folders/1bcDTw2AcuKv13C9YaPy6GVCbG_XvtooV?usp=drive_link", },
                    { title: "All Material", links: "https://drive.google.com/drive/folders/1x8SaXbnyHCJMGajeaD-xSv5EbA6woCJt?usp=drive_link", },]
            },

            // {
            //     name: "Theory of ", cards: [
            //         { title: "Syllabus", links: "", },
            //         { title: "All Unit", links: "", },
            //         { title: "Notes & Assignment", links: "", },
            //         { title: "Lab Manual & VIVA ", links: "", },
            //         { title: "PYQs", links: "", },
            //         { title: "Question Bank", links: "", },
            //         { title: "All Material", links: "", },]
            // },
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
        //              { title: "Question Bank", links: "", },
        //             { title: "All Material", links: "", },]
        //         },

        //         {
        //         name: "Theory of Computation", cards: [
        //             { title: "Syllabus", links: "", },
        //             { title: "All Unit", links: "", },
        //             { title: "Notes & Assignment", links: "", },
        //             { title: "Lab Manual & VIVA ", links: "", },
        //             { title: "PYQs", links: "", },
        //              { title: "Question Bank", links: "", },
        //             { title: "All Material", links: "", },]
        //         },
        //     ]

        // 6th Semester
        /*

Syllabus
All Chapters
Notes And Question Bank
PYQ
        */
        [
            {
                name: "MEA(R)N Full Stack Web Development", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1i8aj12pKJbN2zEPa6XKVNtseYzbeVz_O?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1iCQTvcVbuCLxS0w2tFh8wf1MJzjLic6G?usp=drive_link", },
                    // { title: "Notes & Assignment", links: "", },
                    // { title: "Lab Manual & VIVA ", links: "", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1iTPlivhQ0BpOoJB1aAS8S_CrztEzr1o9?usp=drive_link", },
                    { title: "Notes & Question Bank", links: "https://drive.google.com/drive/folders/1iLo0OFJhqF5hZXdCmgNknU5THs66zuWG?usp=drive_link", },
                    // { title: "Question Bank", links: "", },
                    // { title: "All Material", links: "", },
                ]
            },

            {
                name: "COMPILER DESIGN", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1ibz042jU7GLtoOqQymIjsyNrAO_xryDB?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1iezipbI2YF1S5FMGnngJxk4Gpe8EECOX?usp=drive_link", },
                    // { title: "Notes & Assignment", links: "", },
                    // { title: "Lab Manual & VIVA ", links: "", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1ihkssZMILoza2T7CdrtRSVZpYu88PtDM?usp=drive_link", },
                    { title: "Notes & Question Bank", links: "https://drive.google.com/drive/folders/1igB6EQmYgHXbJSxVb30ygYLmun8dZKyU?usp=drive_link", },
                    // { title: "Question Bank", links: "", },
                    // { title: "All Material", links: "", },
                ]
            },

            {
                name: "MOBILE APPLICATION DEVELOPMENT", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1huEJYJ8KBIdTi8PHn2lkJExncLNzRmbc?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1hzCpOwsSAmMs8K4ekhKpUtgb1rsiG2Pq?usp=drive_link", },
                    // { title: "Notes & Assignment", links: "", },
                    // { title: "Lab Manual & VIVA ", links: "", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1i0geD0J5FqEqgKSmx4HtJJRXmmqcxb34?usp=drive_link", },
                    { title: "Notes & Question Bank", links: "https://drive.google.com/drive/folders/1i51l7zowjD2GjXm2qHk_xI3j3bwq0KLC?usp=drive_link", },
                    // { title: "Question Bank", links: "", },
                    // { title: "All Material", links: "", },
                ]
            },

            {
                name: "MACHINE LEARNING", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1j6i33IZYshR_0Y93_1BUnXM5fcvlbLTi?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1EXXO6dzuF5vqkuTn4lq7gwiEMSQ2cUgC?usp=drive_link", },
                    // { title: "Notes & Assignment", links: "", },
                    // { title: "Lab Manual & VIVA ", links: "", },
                    { title: "PYQs & Experiment", links: "https://drive.google.com/drive/folders/1AfnMCy97_aUaATyTrf71W2MZqbYkyQgs?usp=drive_link", },
                    { title: "PYQ & Question Bank", links: "https://drive.google.com/drive/folders/1v38szQGknT-ZPPOApxcPV_12vw2o7aaj?usp=drive_link", },
                    // { title: "Question Bank", links: "", },
                    // { title: "All Material", links: "", },
                ]
            },

            {
                name: "QUANT, AND REASONING", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1dJUU9o1abNhl2M--ihAfU54jEW6CMT15?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/15Y5axsfuOLYhx4hpedDkZZnuDyA5ZInn?usp=drive_link", },
                    // { title: "Notes & Assignment", links: "", },
                    // { title: "Lab Manual & VIVA ", links: "", },
                    { title: "PYQs", links: "https://drive.google.com/drive/folders/1DUg0xwcB0-ontRpU-XKAn2yYj8UiDQc5?usp=drive_link", },
                    { title: "Notes & Question Bank", links: "https://drive.google.com/drive/folders/1jjkP80Osx5X95HoNgJaW5ryF3rF7QFhg?usp=drive_link", },
                    // { title: "Question Bank", links: "", },
                    // { title: "All Material", links: "", },
                ]
            },

            {
                name: "HPC(High Performance Computing)", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1Mq3ATeKc2CZtSRu6LUqxzkDLWaEiKLQL?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1x9Pp9eYawYm0pYpC0-ULomaC6d_MZTb5?usp=drive_link", },
                    // { title: "Notes & Assignment", links: "", },
                    // { title: "Lab Manual & VIVA ", links: "", },
                    // { title: "PYQs", links: "", },
                    { title: "Notes, PYQs & Question Bank", links: "https://drive.google.com/drive/folders/18h06GPdxsaU3qFwE_8osiQVF1mJsiUEN?usp=drive_link", },
                    // { title: "Question Bank", links: "", },
                    // { title: "All Material", links: "", },
                ]
            },

            // {
            //     name: "ES ( EMPLOYBILITY SKILLS )", cards: [
            //         { title: "Syllabus", links: "", },
            //         { title: "All Unit", links: "", },
            //         { title: "Notes & Assignment", links: "", },
            //         { title: "Lab Manual & VIVA ", links: "", },
            //         { title: "PYQs", links: "", },
            //         { title: "Notes & Question Bank", links: "", },
            //         // { title: "Question Bank", links: "", },
            //         // { title: "All Material", links: "", },
            //     ]
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
        //              { title: "Question Bank", links: "", },
        //             { title: "All Material", links: "", },]
        //         },

        //         {
        //         name: "Theory of Computation", cards: [
        //             { title: "Syllabus", links: "", },
        //             { title: "All Unit", links: "", },
        //             { title: "Notes & Assignment", links: "", },
        //             { title: "Lab Manual & VIVA ", links: "", },
        //             { title: "PYQs", links: "", },
        //              { title: "Question Bank", links: "", },
        //             { title: "All Material", links: "", },]
        //         },
        //     ]

        // 7th Semester
        [
            {
                name: "Information and Network Security", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/1ajnCGlQQ9ZTr2N6Yvq5lVOTmddoU23Lb?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/136LR3IAWMFQjjde1-tY3MEGKXtaQDkCK?usp=drive_link", },
                    { title: "Notes , Pyq , Laboratory", links: "https://drive.google.com/drive/folders/13oU5GnxagUu18Gxm63fhNQ6HcdF8Bjwm?usp=drive_link", },
                    // { title: "Notes & Assignment", links: "", },
                    // { title: "Lab Manual & VIVA ", links: "", },
                    // { title: "PYQs", links: "", },
                    // { title: "Question Bank", links: "", },
                ]
            },

            {
                name: "Software Testing and Quality Assurance", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/13tVUaUKy6BN19oqIyhz8kHZtOe8m8UEg?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/1406fboR3Qt08PxNU2FsU6Rf8MFZOto1R?usp=drive_link", },
                    { title: "Notes , Pyq , Laboratory", links: "https://drive.google.com/drive/folders/142OoRk4MIIrfrio2uxr-ZPp4bs1nNUm0?usp=drive_link", },
                    // { title: "Notes & Assignment", links: "", },
                    // { title: "Lab Manual & VIVA ", links: "", },
                    // { title: "PYQs", links: "", },
                    // { title: "Question Bank", links: "", },
                ]
            },

            {
                name: "Cyber Physical Systems", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/121ZJu6aHA5ZWXaRusOF8ueWeT5rhtAxy?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/124N22Fa6OMUmKzoIklxgOObtgNKOZgcG?usp=drive_link", },
                    { title: "Notes , Pyq , Laboratory", links: "https://drive.google.com/drive/folders/126SO2IdWpFe1-XIoZH1r88y0IP5zc4f7?usp=drive_link", },
                    // { title: "Notes & Assignment", links: "", },
                    // { title: "Lab Manual & VIVA ", links: "", },
                    // { title: "PYQs", links: "", },
                    // { title: "Question Bank", links: "", },
                ]
            },

            {
                name: "Big Data Analytics", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/12CJkpcc8WTYEguklD6CiE-cMMnkT4PxU?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/12IOC3VeqXn0H0KxSfXSIQbFLv46H01Wq?usp=drive_link", },
                    { title: "Notes , Pyq , Laboratory", links: "https://drive.google.com/drive/folders/12Jq2sg2hB0Vi3xtUUZMZvGAvzICA5QyU?usp=drive_link", },
                    // { title: "Notes & Assignment", links: "", },
                    // { title: "Lab Manual & VIVA ", links: "", },
                    // { title: "PYQs", links: "", },
                    // { title: "Question Bank", links: "", },
                ]
            },

            {
                name: "Cyber Security", cards: [
                    { title: "Syllabus", links: "https://drive.google.com/drive/folders/12LTwAtuhOerSFehmjtwEUkz-MJ3OOXb1?usp=drive_link", },
                    { title: "All Unit", links: "https://drive.google.com/drive/folders/12RGzNipJ7zsBDjPqXLyWnCTQd4br74ei?usp=drive_link", },
                    { title: "Notes , Pyq , Laboratory", links: "https://drive.google.com/drive/folders/12pMb20oGO8y3rvhXH_BAfBO47CjBCe_o?usp=drive_link", },
                    // { title: "Notes & Assignment", links: "", },
                    // { title: "Lab Manual & VIVA ", links: "", },
                    // { title: "PYQs", links: "", },
                    // { title: "Question Bank", links: "", },
                ]
            },

        ],

        // 8th Semester
        // [
        //     "Deep Learning",
        //     "Elective-V",
        //     "Elective-VI",
        //     "Major Project Phase-II",
        //     "Internship",
        //     "Technical Presentation",
        //     "Comprehensive Viva",
        //     "Entrepreneurship Development",
        // ],
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
                {sem}
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

export default Sem;

// D:\Web Development\Session 5(Mini project)\react\LearningSM\client\src\components\Pages\Sem.jsx