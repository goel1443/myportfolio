'use client'
import Image from 'next/image'
import { images } from '@/assets/images'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-full relative overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-[#19B5C4] opacity-5 rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#19B5C4] opacity-5 rounded-tr-full" />

      <div className="grid grid-cols-12 p-4 sm:p-8 lg:p-12 items-center gap-4 sm:gap-8 relative">
        {/* Left Content */}
        <div className="col-span-12 xl:col-span-7 2xl:col-span-6 space-y-6 sm:space-y-8 order-2 xl:order-1">
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-[#19B5C4] text-lg sm:text-xl font-medium">
              Welcome to my portfolio
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-800">
              Hello, I am 
              <br />
              <span className="font-normal bg-gradient-to-r from-[#19B5C4] to-[#17a3b1] text-transparent bg-clip-text">
                Web Designer and Frontend Developer
              </span>
            </h1>
          </div>
          
          <p className="text-gray-600 max-w-lg leading-relaxed text-base sm:text-lg lg:text-xl">
            I&apos;m a passionate web designer and frontend developer with expertise in creating 
            beautiful, responsive websites. I specialize in modern UI/UX design and 
            clean, efficient code that brings designs to life.
          </p>

          <div>
            <Link href="/contact">
              <button className="group flex items-center cursor-pointer gap-2 bg-[#19B5C4] text-white px-6 sm:px-8 py-3 rounded-full hover:bg-[#17a3b1] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                <span>Contact Me</span>
              </button>
            </Link>
          </div>

          {/* Social Proof or Stats */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12 pt-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">3+</h3>
              <p className="text-sm sm:text-base text-gray-600">Years Experience</p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">7+</h3>
              <p className="text-sm sm:text-base text-gray-600">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">5+</h3>
              <p className="text-sm sm:text-base text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-span-12 xl:col-span-5 2xl:col-span-6 justify-self-center order-1 xl:order-2">
          <div className="relative w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]">
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
