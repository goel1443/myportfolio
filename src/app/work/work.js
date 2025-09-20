'use client'
import Image from 'next/image'
import { images } from '@/assets/images'
const projects = [
  {
    title: "PRM Digital Projects",
    description: "Modern web applications built with Next.js and React",
    tech: ["Next.js", "React", "Tailwind CSS","html","css","javascript","gsap"],
    images: {
      large: images.PrmDigitalImage1,
      medium: images.PrmDigitalImage2,
      small: images.PrmDigitalImage3
    },
    link: "https://prmdigital.com"
  },
  {
    title: "Wiseway Tech Solutions App",
    description: "Responsive web designs and BlockChain Solutions",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap","Nuxt.js"],
    images: {
      large: images.WisewayImage1,
      medium: images.WisewayImage2,
      small: images.WisewayImage3
    },
    link: "https://wisewaytec.com"
  },
  {
    title: "Dosi Hospital App",
    description: "Modern hospital app with online booking system",
    tech: ["React", "Node.js", "Tailwind CSS", "html","css","javascript","API Integration","Stripe","Ably"],
    images: {
      large: images.DosiImage1,
      medium: images.DosiImage2,
      small: images.DosiImage3
    },
    link: "https://staging.godosi.com"
  }
];

export default function Work() {
  return (
    <div className="min-h-screen p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-[#1e293b]">My Work</h1>
        <p className="text-xl text-gray-600 mb-12">Showcasing some of my best projects</p>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={index} className="">
              {/* Project Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#1e293b] mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-[#19B5C4] text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Images - Responsive */}
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                {/* Large Screen Image */}
                <div className="hidden lg:block  ">
                  <Image
                    src={project.images.large}
                    alt={`${project.title} - Desktop View`}
                    width={1200}
                    height={675}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-sm"
                  />
                </div>

                {/* Medium Screen Image */}
                <div className="hidden md:block lg:hidden ">
                  <Image
                    src={project.images.medium}
                    alt={`${project.title} - Tablet View`}
                    width={800}
                    height={600}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-sm"
                  />
                </div>

                {/* Small Screen Image */}
                <div className="block md:hidden ">
                  <Image
                    src={project.images.small}
                    alt={`${project.title} - Mobile View`}
                    width={400}
                    height={600}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-sm "
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0   transition-all duration-300 flex items-center justify-center">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 bg-[#19B5C4] text-white px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}