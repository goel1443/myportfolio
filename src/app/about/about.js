'use client'
import React from 'react'
import Image from 'next/image'
import { images } from '@/assets/images'
import { BsCode } from 'react-icons/bs'
import { FaPaintBrush, FaMobile } from 'react-icons/fa'

const About = () => {
  const skills = [
    {
      icon: <BsCode className="text-2xl text-white" />,
      title: "Web Development",
      description: "Expertise in React.js, Next.js, and modern JavaScript frameworks"
    },
    {
      icon: <FaPaintBrush className="text-2xl text-white" />,
      title: "Web Design",
      description: "Creating beautiful UI/UX with modern design principles"
    },
    {
      icon: <FaMobile className="text-2xl text-white" />,
      title: "Responsive Design",
      description: "Mobile-first approach for all screen sizes"
    }
  ]

  return (
    <div className="w-full relative overflow-hidden min-h-screen bg-gradient-to-b from-gray-50 to-white ">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-[#19B5C4] opacity-5 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#19B5C4] opacity-5 rounded-tr-full" />

     
        <div className="grid grid-cols-12 py-8 sm:py-12 lg:px-12 px-4 lg:pt-12 pt-24 items-center gap-6 sm:gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="col-span-12 xl:col-span-6 2xl:col-span-5 space-y-6 sm:space-y-8 order-2 xl:order-1">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <h2 className="text-[#19B5C4] text-lg sm:text-xl font-medium mb-2">About Me</h2>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Crafting Digital 
                  <span className="text-[#19B5C4]"> Experiences</span>
                </h1>
              </div>
              
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                As a dedicated Web Designer and Frontend Developer, I blend creative design with technical expertise 
                to craft engaging digital experiences. My strength lies in translating complex ideas into 
                user-friendly interfaces, utilizing modern frameworks like React and Next.js.
              </p>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                With a keen eye for detail and a passion for responsive design, I create websites that not only 
                look stunning but also deliver seamless functionality across all devices. My approach combines 
                innovative design trends with clean, efficient code to build future-ready web solutions.
              </p>
            </div>

            {/* Skills Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#19B5C4] bg-opacity-10 rounded-xl flex items-center justify-center text-[#19B5C4] mb-3 sm:mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">{skill.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="col-span-12 xl:col-span-6 2xl:col-span-7 justify-self-center order-1 xl:order-2">
            <div className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] 2xl:w-[600px] 2xl:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-b from-[#19B5C4] to-[#17a3b1] rounded-[50%] rounded-tr-none rounded-bl-none overflow-hidden">
                <div className="w-full h-full flex items-center justify-center overflow-hidden">
                  <Image 
                    src={images.HomePageProfileImage} 
                    alt="Profile" 
                    width={600} 
                    height={600} 
                    className="w-full h-full object-cover translate-x-[30px] translate-y-[120px] sm:translate-x-[40px] sm:translate-y-[160px] md:translate-x-[45px] md:translate-y-[180px] lg:translate-x-[50px] lg:translate-y-[200px] xl:translate-x-[50px] xl:translate-y-[220px] scale-[2.5] sm:scale-[1.7] md:scale-[2.1] lg:scale-[1.9] xl:scale-[2] hover:scale-[1.55] sm:hover:scale-[1.75] md:hover:scale-[1.85] lg:hover:scale-[1.95] xl:hover:scale-[2.05] transition-transform duration-300" 
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default About
