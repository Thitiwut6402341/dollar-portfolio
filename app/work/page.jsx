'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
    {
        num: "01",
        category: "Data Science/ Machine Learning",
        title: "Development and classification of cell repair damage recording system for hard disk drive tester using machine learning ",
        description: "End-to-end developed software for diagnosis HDD Sand classify the cell repair damage recording system for hard disk drive tester using machine learning.",
        stack: [{ name: "MatLAB" }, { name: "Python" }, { name: "Machine Learning" }, { name: "Statistic Analysis" }],
        // image: '/assets/work/work1.png',
        image: '/assets/work/csv_analyzerPicture1.png',
        live: "",
        github: ""

    },
    {
        num: "02",
        category: "Engineering",
        title: "Battery Management System using Relay contactor by Arduino Controller for Lithium-ion Battery",
        description: "Developed software for monitoring and managing the battery of an electric vehicle using micro controller.",
        stack: [{ name: "Arduino" }, { name: "Python" }, { name: "C++" }, { name: "Engineering" }],
        image: '/assets/work/paper1.png',
        live: "https://wseas.com/journals/cem/2022/a06cem-003(2022).pdf",
        github: ""

    },
    {
        num: "03",
        category: "Backend Development",
        title: "Nameplate Management System",
        description: "Designed database and streamline the creation, modification, and organization of nameplates within an organization.",
        stack: [{ name: "PostgreSQL" }, { name: "PHP Laravel" }, { name: "Git/Github" }, { name: "Postman" }],
        image: '/assets/work/work1.png',
        live: "https://snc-services.sncformer.com/inpm/",
        github: ""
    },
    {
        num: "04",
        category: "Backend Development",
        title: "Power Supply Monitoring System",
        description: "Designed dashboard to monitor and manage the power supply of a building.",
        stack: [{ name: "MongoDB" }, { name: "PHP Laravel" }, { name: "Git/Github" }, { name: "Postman" }],
        image: '/assets/work/work2.png',
        live: "https://snc-services.sncformer.com/ipss-b7/",
        github: ""
    },
    {
        num: "05",
        category: "Backend Development",
        title: "Carbon Credit System",
        description: "RESTful API for carbon credit system to manage and monitor the carbon credit of an organization.",
        stack: [{ name: "MSSQL" }, { name: "NestJS" }, { name: "TypeScript" }, { name: "Git/Github" }, { name: "Postman" }],
        image: '/assets/work/work3.png',
        live: "https://snc-services.sncformer.com/iccs/",
        github: ""
    },
    {
        num: "06",
        category: "Backend Development",
        title: "Project Management system",
        description: "End-to-end developed a project management system to manage and monitor the progress of projects within an organization.",
        stack: [{ name: "MongoDB" }, { name: "PHP Laravel" }, { name: "Git/Github" }, { name: "Postman" }],
        image: '/assets/work/work4.png',
        live: "",
        github: ""
    },
    {
        num: "07",
        category: "Backend Development",
        title: "Carbon Footprint for Organization (CFO) system",
        description: "Designed and developed a system to calculate and monitor the carbon footprint of an organization.",
        stack: [{ name: "PostgreSQL" }, { name: "NestJS" }, { name: "TypeScript" }, { name: "Git/Github" }, { name: "Postman" }],
        image: '/assets/work/work5.png',
        live: "https://snc-services.sncformer.com/icts",
        github: ""
    },
    {
        num: "08",
        category: "Backend Development",
        title: "Durian Export Elite system",
        description: "Developed a system to manage and monitor the export of durian from Thailand to China.",
        stack: [{ name: "MongoDB" }, { name: "NestJS" }, { name: "TypeScript" }, { name: "Git/Github" }, { name: "Postman" }],
        image: '/assets/work/work6.png',
        live: "https://snc-services.sncformer.com/idee-v2/",
        github: ""
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                            <h3 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h3>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">{project.title}</h3>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) => {
                                    return <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>

                                })}
                            </ul>

                            <div className="border border-white/20">

                            </div>
                            <div className="flex items-center gap-4">
                                {/* Live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>

                                        </Tooltip>

                                    </TooltipProvider>

                                </Link>

                                {/* github project button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                            {/* <div className="flex flex-wrap gap-2 mt-4">
                                {project.stack.map((tech, index) => (
                                    <span key={index} className="bg-gray-800 text-white px-2 py-1 rounded">{tech.name}</span>
                                ))}
                            </div> */}
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">

                        <Swiper
                            spcaebetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return <SwiperSlide key={index} className="w-full">
                                    <div className="h-[100%] relative group flex justify-center items-center">
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                        <div className="relative ">
                                            <Image src={project.image} className="object-cover" alt={project.title} width={600} height={460} />
                                        </div>

                                    </div>
                                </SwiperSlide>

                            })}
                            {/*slider button  */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calsc(50%_-_22px)] 
                            xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all " />


                        </Swiper>

                        {/* <Swiper>
                            {projects.map((proj, index) => (
                                <SwiperSlide key={index}>
                                    <Image src={proj.image} alt={proj.title} width={600} height={400} className="object-cover" />
                                    <div className="mt-4 flex justify-between">
                                        {proj.live && <Link href={proj.live}><a className="text-accent">Live Site <BsArrowUpRight /></a></Link>}
                                        {proj.github && <Link href={proj.github}><a className="text-accent">GitHub <BsGithub /></a></Link>}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper> */}
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Work;
