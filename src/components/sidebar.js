'use client'

import Link from 'next/link'
import { images } from '@/assets/images'
import Image from 'next/image'

export default function Sidebar() {
  return (
    <div className="h-screen bg-[#19B5C4] text-white p-8 fixed w-[300px] font-sans">
      <div className="flex flex-col items-center text-center mb-16">
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

      <nav className="space-y-6 text-center">
        <Link href="/" className="block text-base tracking-[0.2em] font-medium hover:text-gray-200 transition-colors">
          HOME
        </Link>
        <Link href="/about" className="block text-base tracking-[0.2em] font-medium hover:text-gray-200 transition-colors">
          ABOUT
        </Link>
        <Link href="/skill" className="block text-base tracking-[0.2em] font-medium hover:text-gray-200 transition-colors">
          SKILLS    
        </Link>
        <Link href="/services" className="block text-base tracking-[0.2em] font-medium hover:text-gray-200 transition-colors">
          SERVICES
        </Link>
        <Link href="/education" className="block text-base tracking-[0.2em] font-medium hover:text-gray-200 transition-colors">
          EDUCATION
        </Link>
        <Link href="/experience" className="block text-base tracking-[0.2em] font-medium hover:text-gray-200 transition-colors">
          EXPERIENCE
        </Link>
        <Link href="/work" className="block text-base tracking-[0.2em] font-medium hover:text-gray-200 transition-colors">
          WORK
        </Link>
        <Link href="/contact" className="block text-base tracking-[0.2em] font-medium hover:text-gray-200 transition-colors">
          CONTACT
        </Link>
      </nav>
    </div>
  )
}
