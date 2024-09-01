'use client';

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaFigma, FaPython, FaDatabase, FaPhp, FaRaspberryPi } from 'react-icons/fa';
import { SiTaiwindcss, SiNextdotjs, SiPostgresql, SiMongodb, SiTypescript, SiNodered, SiScikitlearn, SiPytorch, SiNestjs, SiMicrosoftsqlserver } from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';

const about = {
    title: "About Me",
    description: `Passionate about technology business, with Software Developer and Researcher experiences.
Seeking for an opportunity to have a career in engineering field of Software, IIoT, AI, ML including SQL,
Python, Statistical analysis, and others. where I will be able to contribute my skill & knowledge and
experience to support the organization’ s growth efficiently.`,
    info: [
        { fieldName: "Name", fieldValue: "Thitiwut Sathapornbumrungphao" },
        { fieldName: "Phone", fieldValue: "(+66) 879592663" },
        { fieldName: "Experience", fieldValue: "1+ Years" },
        { fieldName: "Email", fieldValue: "thitiwut.sat@gmail.com" },
        { fieldName: "Location", fieldValue: "Bangkok, Thailand" },
        { fieldName: "Languages", fieldValue: "Thai, English (TOEIC 560)" },
    ],
};

const experience = {
    icon: '/assets/resume/badge.svg',
    title: "My Experiences",
    description: [
        {
            company: "99 Industrial Solution",
            position: "Backend Developer",
            duration: "2023 - 2024",
            description: "Developed websites for clients using PHP, TypeScript, MongoDB, PostgreSQL. Worked on both front-end and back-end development, and collaborated with clients to create custom solutions that met their needs."
        },
        {
            company: "Western Digital Thailand",
            position: "Researcher, Data Science",
            duration: "2022-2023",
            description: "Developed machine learning models to analyze data and provide insights for business decisions. Worked with a team of data scientists and engineers to develop custom solutions for clients."
        },
        {
            company: "Senior Aerospace Thailand",
            position: "QA Engineer (Intern)",
            duration: "2020-2021",
            description: "Worked on quality assurance for aerospace components. Developed test plans and procedures, conducted tests, and analyzed results to ensure compliance with industry standards"
        },
    ],
};

const education = {
    icon: '/assets/resume/cap.svg',
    title: "My Education",
    description: "I have a Master's Degree in Mechanical Engineering and a Bachelor's Degree in Aeronautical Engineering. I graduated with a GPAX of 3.81 for my Master's Degree and 3.50 for my Bachelor's Degree.",
    items: [
        {
            institution: "Suranaree University of Technology",
            degree: "Master's Degree",
            faculty: "Engineering",
            major: "Mechanical Engineering",
            duration: "2021 - 2023",
            gpax: "3.81",
        },
        {
            institution: "Suranaree University of Technology",
            degree: "Bachelor's Degree",
            faculty: "Engineering",
            major: "Aeronautical Engineering",
            duration: "2017 - 2021",
            gpax: "3.50",
        },
    ],
};

const skills = {
    title: "My Skills",
    description: "I have experience with a variety of technologies and tools, including:",
    skillList: [
        { icon: <FaDatabase />, name: "Database Management" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiMicrosoftsqlserver />, name: "MSSQL" },
        { icon: <FaPhp />, name: "PHP language" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <SiNestjs />, name: "Nestjs" },
        { icon: <FaPython />, name: "Python" },
        { icon: <SiPytorch />, name: "Pytorch" },
        { icon: <SiScikitlearn />, name: "Skitlearn" },
        { icon: <FaRaspberryPi />, name: "RaspberryPi" },
        { icon: <SiNodered />, name: "Node-red" },
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3 />, name: "CSS3" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaNodeJs />, name: "Node.js" },
    ],
};

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">My Experiences</TabsTrigger>
                        <TabsTrigger value="education">My Education</TabsTrigger>
                        <TabsTrigger value="skills">My Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.description.map((item, index) => (
                                            <li key={index} className="bg-[#232329]  py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"> {item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60"> {item.company}</p>
                                                </div>
                                                <p className="text-ms flex flex-cols-1 justify-center lg:text-left">Description: {item.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:ms-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => (
                                            <li key={index} className="bg-[#232329]  py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[6px] text-center lg:text-left"> {item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60"> {item.institution}</p>
                                                </div>

                                                <p className="">{item.degree}</p>
                                                <p className="">{item.faculty}</p>
                                                <p className="">{item.major}</p>
                                                <p className="">{item.gpax}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {skills.title}
                                    </h3>
                                    <p className="max-w-full h-full text-white/60 xl:mx-0 flex flex-col">{skills.description}</p>
                                </div>

                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                                {skills.skillList.map((skill, index) => {
                                    return <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group " >
                                                    <div className="text-6xl group-hover:text-accent">{skill.icon}</div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="capitalize">{skill.name}</p>

                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                })}

                            </ul>

                        </TabsContent>
                        <TabsContent value="about" className="w-full">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[720px]">
                                    {about.info.map((item, index) => (
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-ms">{item.fieldValue}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div >
        </motion.div >
    );
};

export default Resume;
