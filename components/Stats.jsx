"use client"

import CountUp from 'react-countup'
const stats = [
    {
        num: 1,
        text: "Years of Experience"
    },
    {
        num: 8,
        text: "Project complete"
    },
    {
        num: 5,
        text: "Technologies mastered"
    },
    {
        num: 30,
        text: "Code commits"
    },
    {
        num: 1,
        text: "Published"
    },

];
const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">

            <div className="container mx-auto ">
                <div className="flex flex-wrap justify-center gap-6 max-w-[80vw] mx-auto xl:max-w-none">

                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-1 items-center gap-4 jsutify-center xl:justify-start">
                            <CountUp
                                end={stat.num}
                                duration={4}
                                delay={2}
                                className="text-4xl font-extrabold xl:text-6xl" />
                            <span className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                                {stat.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};




export default Stats
