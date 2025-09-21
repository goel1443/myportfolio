'use client'

import Link from 'next/link'
import { images } from '@/assets/images'
import Image from 'next/image'
import { useState } from 'react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const closeSidebar = () => {
    setIsOpen(false)
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#19B5C4] text-white p-2 rounded-md shadow-lg"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20  z-40"
          onClick={closeSidebar}
        />
      )}
           {/* ${isOpen ? 'translate-x-0' : '-translate-x-full'}
           lg:translate-x-0 lg:static */}

      {/* Sidebar */}
      <div className={`
         bg-[#19B5C4] text-white p-4 fixed w-[250px] font-sans z-50
        transform transition-transform duration-300 ease-in-out top-0   h-full
      ${isOpen ? 'left-0' : '-left-full'}
         lg:left-0 
      `}>
        <div className="flex flex-col items-center text-center mb-8  ">
          <div className='flex items-center justify-center border-2 border-white rounded-full w-[150px] h-[150px] mb-4 overflow-hidden '>
            <Image 
              src={images.ProfileImage} 
              alt="Profile" 
              width={150} 
              height={150} 
              className='w-full h-full object-cover scale-[2.5] translate-x-[10px] translate-y-[70px]'
            />
          </div>
          <h2 className="text-2xl font-semibold mb-1 tracking-wide">Parteek Goel</h2>
          <p className="text-sm font-medium tracking-wider uppercase">Web Designer & Frontend Developer</p>
        </div>

        <nav className="space-y-6 text-center  ">
          <Link href="/" className="block text-base tracking-[0.2em] font-medium hover:text-gray-200 transition-colors" onClick={closeSidebar}>
            HOME
          </Link>
          <Link href="/about" className="block text-base tracking-[0.2em] font-medium hover:text-gray-200 transition-colors" onClick={closeSidebar}>
            ABOUT
          </Link>
          <Link href="/skill" className="block text-base tracking-[0.2em] font-medium hover:text-gray-200 transition-colors" onClick={closeSidebar}>
            SKILLS    
          </Link>
          <Link href="/services" className="block text-base tracking-[0.2em] font-medium hover:text-gray-200 transition-colors" onClick={closeSidebar}>
            SERVICES
          </Link>
          <Link href="/education" className="block text-base tracking-[0.2em] font-medium hover:text-gray-200 transition-colors" onClick={closeSidebar}>
            EDUCATION
          </Link>
          <Link href="/experience" className="block text-base tracking-[0.2em] font-medium hover:text-gray-200 transition-colors" onClick={closeSidebar}>
            EXPERIENCE
          </Link>
          <Link href="/work" className="block text-base tracking-[0.2em] font-medium hover:text-gray-200 transition-colors" onClick={closeSidebar}>
            WORK
          </Link>
          <Link href="/contact" className="block text-base tracking-[0.2em] font-medium hover:text-gray-200 transition-colors" onClick={closeSidebar}>
            CONTACT
          </Link>
        </nav>
      </div>
    </>
  )
}
