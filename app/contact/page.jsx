"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
];

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleServiceChange = (value) => {
        setFormData({
            ...formData,
            service: value,
        });
    };

    const handleSubmit = () => {
        // Handle form submission logic here
        // For now, we'll just clear the form
        setFormData({
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            service: '',
            message: '',
        });
    };

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
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text=white/60">Please fill your information</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                                <Input name="firstname" type="text" placeholder="Firstname" value={formData.firstname} onChange={handleChange} />
                                <Input name="lastname" type="text" placeholder="Lastname" value={formData.lastname} onChange={handleChange} />
                                <Input name="email" type="email" placeholder="Email address" value={formData.email} onChange={handleChange} />
                                <Input name="phone" type="tel" placeholder="Phone number" value={formData.phone} onChange={handleChange} />
                            </div>
                            <Select onValueChange={handleServiceChange}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="data-science">Data Science</SelectItem>
                                        <SelectItem value="machine-learning">Machine Learning</SelectItem>
                                        <SelectItem value="design-database">Design Database</SelectItem>
                                        <SelectItem value="database-management">Database Management</SelectItem>
                                        <SelectItem value="software-developer">Software Developer</SelectItem>
                                        <SelectItem value="backend-developer">Backend Developer</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea name="message" className="h-[200px]" placeholder="Type your message here." value={formData.message} onChange={handleChange} />
                            <Button size="md" className="max-w-40" onClick={handleSubmit}>Send Message</Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex flex-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div>{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;