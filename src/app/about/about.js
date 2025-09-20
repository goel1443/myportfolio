'use client'
import React from 'react'
import Image from 'next/image'
import { images } from '@/assets/images'
import { motion } from 'framer-motion'
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
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-[#19B5C4] opacity-5 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#19B5C4] opacity-5 rounded-tr-full" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-12 py-12 lg:py-20 items-center gap-12">
          {/* Left Content */}
          <motion.div 
            className="col-span-12 lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-[#19B5C4] text-xl font-medium mb-2">About Me</h2>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                  Crafting Digital 
                  <span className="text-[#19B5C4]"> Experiences</span>
                </h1>
              </motion.div>
              
              <motion.p 
                className="text-gray-600 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                As a dedicated Web Designer and Frontend Developer, I blend creative design with technical expertise 
                to craft engaging digital experiences. My strength lies in translating complex ideas into 
                user-friendly interfaces, utilizing modern frameworks like React and Next.js.
              </motion.p>

              <motion.p 
                className="text-gray-600 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                With a keen eye for detail and a passion for responsive design, I create websites that not only 
                look stunning but also deliver seamless functionality across all devices. My approach combines 
                innovative design trends with clean, efficient code to build future-ready web solutions.
              </motion.p>
            </div>

            {/* Skills Section */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-[#19B5C4] bg-opacity-10 rounded-xl flex items-center justify-center text-[#19B5C4] mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill.title}</h3>
                  <p className="text-gray-600 text-sm">{skill.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="col-span-12 lg:col-span-7 justify-self-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-b from-[#19B5C4] to-[#17a3b1] rounded-[50%] rounded-tr-none rounded-bl-none overflow-hidden">
                <motion.div 
                  className="w-full h-full flex items-center justify-center overflow-hidden"
                  animate={{ 
                    scale: [1, 1.02, 1],
                    rotate: [0, 1, 0] 
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Image 
                    src={images.HomePageProfileImage} 
                    alt="Profile" 
                    width={600} 
                    height={600} 
                    className="w-full h-full object-cover translate-x-[50px] translate-y-[220px] scale-[2] hover:scale-[2.05] transition-transform duration-300" 
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
