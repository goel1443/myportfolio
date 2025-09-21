'use client'
import React from 'react'

const skills = [
    { name: 'HTML5', level: 95, color: 'text-[#E34F26]', icon: 'devicon-html5-plain' },
    { name: 'CSS3', level: 90, color: 'text-[#1572B6]', icon: 'devicon-css3-plain' },
    { name: 'Bootstrap 5', level: 85, color: 'text-[#7952B3]', icon: 'devicon-bootstrap-plain' },
    { name: 'JavaScript', level: 85, color: 'text-[#F7DF1E]', icon: 'devicon-javascript-plain' },
    { name: 'jQuery', level: 80, color: 'text-[#0769AD]', icon: 'devicon-jquery-plain' },
    { name: 'Tailwind CSS', level: 90, color: 'text-[#38B2AC]', icon: 'devicon-tailwindcss-plain' },
    { name: 'Vue.js', level: 75, color: 'text-[#4FC08D]', icon: 'devicon-vuejs-plain' },
    { name: 'React.js', level: 85, color: 'text-[#61DAFB]', icon: 'devicon-react-original' },
    { name: 'Next.js', level: 80, color: 'text-black dark:text-white', icon: 'devicon-nextjs-plain' },
    { name: 'GitHub', level: 85, color: 'text-[#181717]', icon: 'devicon-github-original' },
    { name: 'MySQL', level: 75, color: 'text-[#4479A1]', icon: 'devicon-mysql-plain' },
    { name: 'PHP', level: 80, color: 'text-[#777BB4]', icon: 'devicon-php-plain' },
  ];
const Skill = () => {
  return (
    <div className="h-screen p-12 lg:px-12 px-4 lg:pt-12 pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">My Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <i className={`${skill.icon} ${skill.color} text-3xl mr-3`}></i>
                <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
              </div>
              <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-[#19B5C4] rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 mt-2 block">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skill
