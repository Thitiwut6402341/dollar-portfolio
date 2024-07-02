"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'

const info = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        description: '(+66) 879592663',
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        description: 'thitiwut.sat@gmail.com',
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Address',
        description: 'Rayong, Thailand',
    },
    // {
    //     icon: <FaPhone />,
    //     title: 'Phone',
    //     description: '(+66) 879592663',
    // },
]

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <from className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text=white/60">please fill your information</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                                <Input type="firstname" placeholder="Firstname" />
                                <Input type="lastname" placeholder="Lastname" />
                                <Input type="email" placeholder="Email address" />
                                <Input type="phone" placeholder="phone number" />
                            </div>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue className="Select a services" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a services</SelectLabel>
                                        <SelectItem value="est">Data Science</SelectItem>
                                        <SelectItem value="cst">Machine Learning</SelectItem>
                                        <SelectItem value="mst">Design Database</SelectItem>
                                        <SelectItem value="mst">Database Management</SelectItem>
                                        <SelectItem value="mst">Software Developer</SelectItem>
                                        <SelectItem value="mst">Backend Developer</SelectItem>

                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea className="h-[200px]" placeholder="Type your message here." />
                            <Button size="md" className="max-w-40">Send Message</Button>


                        </from>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => {
                                return <li key={index} className="flex flex-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div>{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>

                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact
