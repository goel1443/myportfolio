'use client'

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Electronics & Communication Engineering",
    school: "Kurukshetra Institute of Technology & Management",
    location: "Kurukshetra, Haryana",
    year: "2008 - 2012",
    score: "62.73%",
    description: "Specialized in Web Technologies and Software Development. Participated in various technical events and workshops."
  },
  {
    degree: "12th Standard (Senior Secondary)",
    field: "Science (PCM)",
    school: "D.A.V. Public School, Pehowa",
    location: "Pehowa, Haryana",
    year: "2007 - 2008",
    score: "59.6%",
    description: "Completed senior secondary with focus on Physics, Chemistry, and Mathematics."
  },
  {
    degree: "10th Standard (Secondary)",
    field: "General",
    school: "D.A.V. Public School, Pehowa",
    location: "Pehowa, Haryana",
    year: "2005 - 2006",
    score: "51.4%",
    description: "Completed secondary education with distinction in Mathematics and Science."
  }
];

export default function Education() {
  return (
    <div className="h-screen p-12 lg:px-12 px-4 lg:pt-12 pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Education</h1>
        <p className="text-xl text-gray-600 mb-12">My academic journey and qualifications</p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[#19B5C4]"></div>

          {/* Education items */}
          {education.map((edu, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline dot */}
              <div className="absolute left-[-6px] md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/4 w-4 h-4 bg-[#19B5C4] rounded-full border-4 border-white"></div>

              <div className={`ml-4 md:ml-0 ${index % 2 === 0 ? 'md:mr-[50%] md:pr-12' : 'md:ml-[50%] md:pl-12'}`}>
                <div className="bg-white rounded-xl xl:p-6 p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className=
                    "max-w-[70%]">
                      <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                      <p className="text-[#19B5C4] font-medium">{edu.field}</p>
                    </div>
                    <span className="text-sm font-semibold text-gray-600 bg-gray-100 px-3 py-1 rounded-full min-w-fit ">
                      {edu.year}
                    </span>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-700 font-medium">{edu.school}</p>
                    <p className="text-gray-600">{edu.location}</p>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      Score: {edu.score}
                    </span>
                  </div>

                  <p className="text-gray-600">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
