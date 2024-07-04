"use client"
import { Button } from "@/components/ui/button"
import { } from "react-icons/fi"
import { FiDownload } from "react-icons/fi"
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"


const Home = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1KjI6UC24eyoqZwFcXtpV58qw7rTl5con/view?usp=sharing';
    link.download = 'Resume_Thitiwut_26-06-24';
    link.click();
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none max-w-[100%]">
            <span className="text-xl gap-4">Software Developer</span>
            <h2 className="h2 ">
              Hello I'am<br /> <sapn className="text-accent ">Thitiwut Sathaphonbumrungphao</sapn>
            </h2>
            <p className=" mb-9 text-white/80 ">
              Passionate about technology business, with Software Developer and Researcher experiences.
              Seeking for an opportunity to have a career in engineering field of Software, IIoT, AI, ML including SQL, NoSQL,
              Python, Statistical analysis, and others. where I will be able to contribute my skill & knowledge and
              experience to support the organization’ s growth efficiently.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2" onClick={handleDownload}>
                <span>Download Resume</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center 
                  text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>

            </div>
          </div>

          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>

        </div>
      </div>
      <Stats />
    </section >
  )
}

export default Home
