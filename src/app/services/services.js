'use client'

const services = [
  {
    title: "Web Design",
    description: "Transform your ideas into stunning, modern websites that captivate your audience. Specializing in responsive designs, seamless user experiences, and creative layouts that make your brand stand out.",
    features: [
      "Custom Website Design",
      "Responsive Layouts",
      "UI/UX Design",
      "Interactive Elements",
      "Brand Integration",
      "Design System Creation"
    ],
    icon: "🎨"
  },
  {
    title: "Frontend Development",
    description: "Expert development of fast, scalable web applications using modern frameworks. Delivering clean, maintainable code with optimal performance and cross-browser compatibility.",
    features: [
      "React/Next.js Development",
      "Vue.js Applications",
      "Performance Optimization",
      "Component Architecture",
      "State Management",
      "Responsive Implementation"
    ],
    icon: "💻"
  },
  {
    title: "API Implementation",
    description: "Seamless integration of backend services with your frontend applications. Specializing in RESTful APIs, real-time data handling, and secure authentication systems.",
    features: [
      "RESTful API Integration",
      "GraphQL Implementation",
      "Authentication Systems",
      "Real-time Data Handling",
      "Error Handling",
      "API Documentation"
    ],
    icon: "🔄"
  }
];

export default function Services() {
  return (
    <div className="h-screen p-12 lg:px-12 px-4 lg:pt-12 pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">My Services</h1>
        <p className="text-xl text-gray-600 mb-12">Delivering high-quality web solutions tailored to your needs</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-4">{service.description}</p>
              
              <div className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#19B5C4] rounded-full mr-3"></span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
