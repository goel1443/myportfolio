'use client'

import React from 'react'

const experiences = [
  {
    position: "Frontend Developer",
    company: "PRM Digital",
    companyColor: "text-[#19B5C4]",
    location: "Mohali",
    period: "Aug,2024 - Present",
    type: "Full Time",
    current: true,
    responsibilities: [
      "Developing responsive and interactive web applications using React.js and Next.js",
      "Implementing modern UI/UX designs with Tailwind CSS",
      "Collaborating with backend teams for API integration",
      "Optimizing application performance and user experience",
      "Leading frontend development initiatives and mentoring team members"
    ]
  },
  {
    position: "Web Designer",
    company: "Wiseway Tech",
    companyColor: "text-[#19B5C4]",
    location: "Mohali",
    period: "Oct,2023 - Feb,2024",
    type: "Full Time",
    current: false,
    responsibilities: [
      "Designed and developed responsive websites for clients",
      "Created user-friendly interfaces and interactive elements",
      "Implemented SEO best practices in web designs",
      "Collaborated with clients to understand requirements",
      "Maintained and updated existing websites"
    ]
  },
  {
    position: "Web Designer",
    company: "LBM Solution",
    companyColor: "text-[#19B5C4]",
    location: "Mohali",
    period: "Sept,2022 - Aug,2023",
    type: "Full Time",
    current: false,
    responsibilities: [
      "Developed custom websites using HTML, CSS, and JavaScript",
      "Created responsive layouts and mobile-first designs",
      "Worked with WordPress and custom themes",
      "Handled client communication and requirement gathering",
      "Optimized websites for performance and SEO"
    ]
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-[#1e293b]">Professional Experience</h1>
        <p className="text-xl text-gray-600 mb-12">My journey in web development and design</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-2 h-full w-0.5 bg-[#19B5C4]"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 ml-12">
              {/* Timeline dot and line */}
              <div className="absolute -left-[2.7rem] flex items-center">
                <div className={`w-2 h-2 rounded-full ${exp.current ? 'bg-green-500' : 'bg-[#19B5C4]'}`}></div>
                <div className="h-0.5 w-8 bg-[#19B5C4]"></div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-[#1e293b]">{exp.position}</h3>
                      {exp.current && (
                        <span className="text-xs font-medium text-green-500 bg-green-50 px-2 py-0.5 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className={exp.companyColor}>{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
                      {exp.period}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">{exp.location}</p>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#19B5C4] rounded-full mt-2 flex-shrink-0"></span>
                      <p className="text-gray-600">{resp}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
