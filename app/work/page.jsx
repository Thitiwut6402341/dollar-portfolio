'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
    {
        num: "01",
        category: "Backend Development",
        title: "Nameplate management system",
        description: "Designed database and streamline the creation, modification, and organization of nameplates within an organization.",
        stack: [{ name: "PostgreSQL" }, { name: "PHP Laravel" }, { name: "Git/Github" }, { name: "Postman" }],
        image: '/assets/work/work1.png',
        live: "https://snc-services.sncformer.com/inpm/",
        github: ""
    },
    {
        num: "02",
        category: "Backend Development",
        title: "Power supply monitoring system",
        description: "Designed dashboard to monitor and manage the power supply of a building.",
        stack: [{ name: "MongoDB" }, { name: "PHP Laravel" }, { name: "Git/Github" }, { name: "Postman" }],
        image: '/assets/work/work2.png',
        live: "https://snc-services.sncformer.com/ipss-b7/",
        github: ""
    },
    {
        num: "03",
        category: "Backend Development",
        title: "Carbon credit system",
        description: "RESTful API for carbon credit system to manage and monitor the carbon credit of an organization.",
        stack: [{ name: "MongoDB" }, { name: "NestJS" }, { name: "TypeScript" }, { name: "Git/Github" }, { name: "Postman" }],
        image: '/assets/work/work3.png',
        live: "https://snc-services.sncformer.com/iccs/",
        github: ""
    },
    {
        num: "04",
        category: "Backend Development",
        title: "Project Management system",
        description: "End-to-end developed a project management system to manage and monitor the progress of projects within an organization.",
        stack: [{ name: "MongoDB" }, { name: "PHP Laravel" }, { name: "PHP language" }, { name: "Git/Github" }, { name: "Postman" }],
        image: '/assets/work/work4.png',
        live: "",
        github: ""
    },
    {
        num: "05",
        category: "Backend Development",
        title: "Carbon Footprint for Organization (CFO) system",
        description: "Designed and developed a system to calculate and monitor the carbon footprint of an organization.",
        stack: [{ name: "MongoDB" }, { name: "NestJS" }, { name: "TypeScript" }, { name: "Git/Github" }, { name: "Postman" }],
        image: '/assets/work/work5.png',
        live: "https://snc-services.sncformer.com/icfo/",
        github: ""
    },
    {
        num: "06",
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

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div>
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">{project.title}</h3>
                            <p className="text-white/60">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.stack.map((tech, index) => (
                                    <span key={index} className="bg-gray-800 text-white px-2 py-1 rounded">{tech.name}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper>
                            {projects.map((proj, index) => (
                                <SwiperSlide key={index}>
                                    <Image src={proj.image} alt={proj.title} width={600} height={400} className="object-cover" />
                                    <div className="mt-4 flex justify-between">
                                        {proj.live && <Link href={proj.live}><a className="text-accent">Live Site <BsArrowUpRight /></a></Link>}
                                        {proj.github && <Link href={proj.github}><a className="text-accent">GitHub <BsGithub /></a></Link>}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default Work;
