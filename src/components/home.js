'use client'
import Image from 'next/image'
import { images } from '@/assets/images'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-[#19B5C4] opacity-5 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#19B5C4] opacity-5 rounded-tr-full" />

      <div className="grid grid-cols-12 p-12 items-center gap-8 relative">
        {/* Left Content */}
        <motion.div 
          className="col-span-12 lg:col-span-5 space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <motion.h2 
              className="text-[#19B5C4] text-xl font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Welcome to my portfolio
            </motion.h2>
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hello, I am 
              <br />
              <span className="font-normal bg-gradient-to-r from-[#19B5C4] to-[#17a3b1] text-transparent bg-clip-text">
                Web Designer and Frontend Developer
              </span>
            </motion.h1>
          </div>
          
          <motion.p 
            className="text-gray-600 max-w-lg leading-relaxed text-lg sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I&apos;m a passionate web designer and frontend developer with expertise in creating 
            beautiful, responsive websites. I specialize in modern UI/UX design and 
            clean, efficient code that brings designs to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link href="/contact" >
            <button className="group flex items-center cursor-pointer gap-2 bg-[#19B5C4] text-white px-8 py-3 rounded-full hover:bg-[#17a3b1] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <span>Contact Me</span>
              
            </button>
            </Link>
          </motion.div>

          {/* Social Proof or Stats */}
          <motion.div 
            className="flex gap-12 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-800">3+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">7+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">5+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
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
  )
}
