'use client'
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/goel1443',
      icon: <FaGithub className="text-2xl text-white" />,
      username: '@goel1443'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/parteek-goyal-67981210a/',
      icon: <FaLinkedin className="text-2xl text-white" />,
      username: 'Parteek Goyal'
    }
  ]

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-xl text-white" />,
      text: 'goel1443@gmail.com',
      label: 'Email'
    },
    {
      icon: <FaPhone className="text-xl text-white" />,
      text: '9068151462',
      label: 'Phone'
    },
    {
      icon: <FaMapMarkerAlt className="text-xl text-white" />,
      text: 'Mohali, Punjab, India',
      label: 'Location'
    }
  ]

  return (
    <div className="min-h-screen p-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1e293b] mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600">Let&apos;s work together on your next project</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#1e293b] mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#19B5C4] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#19B5C4] focus:border-transparent outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#19B5C4] focus:border-transparent outline-none transition-all resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#19B5C4] text-white py-3 rounded-lg font-medium hover:bg-[#17a3b1] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#19B5C4] bg-opacity-10 rounded-full flex items-center justify-center text-[#19B5C4]">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{info.label}</p>
                      <p className="text-[#1e293b] font-medium">{info.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#1e293b] mb-6">Follow Me</h2>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-[#19B5C4] bg-opacity-10 rounded-full flex items-center justify-center text-[#19B5C4]">
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-[#1e293b] font-medium">{social.name}</p>
                      <p className="text-sm text-gray-500">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


