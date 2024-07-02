

import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa'

const socials = [
    {
        icon: <FaGithub />, path: "https://github.com/Thitiwut6402341",
        // icon: <FaGithub />, path: "https://github.com/Thitiwut6402341",
    },
    {
        icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/thitiwut-sathapornbumrungpao-519677176/",
    },

]


const Socials = ({ containerStyles, iconStyles }) => {
    return (

        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
}

export default Socials
