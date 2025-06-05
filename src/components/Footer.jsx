import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-0">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">About Us</h2>
            <p className="text-gray-400">
              Happy Housing AI is revolutionizing the real estate industry by combining artificial intelligence with human expertise. 
              We're committed to making property transactions seamless, transparent, and efficient for everyone.
            </p>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Our Mission</h3>
              <p className="text-gray-400">
                To transform the real estate experience through innovative technology and personalized service.
              </p>
            </div>
          </div>

          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Happy Housing AI</h2>
            <p className="text-gray-400">Making home buying and selling smarter, faster, and more efficient.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Statistics */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Impact</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-3xl font-bold text-blue-400">10K+</p>
                <p className="text-gray-400">Happy Customers</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-3xl font-bold text-blue-400">500+</p>
                <p className="text-gray-400">Builders</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-3xl font-bold text-blue-400">50+</p>
                <p className="text-gray-400">Cities</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-3xl font-bold text-blue-400">15K+</p>
                <p className="text-gray-400">Properties Listed</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <div className="space-y-2">
              <p className="text-gray-400">Email: support@happyhousingai.com</p>
              <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
              <p className="text-gray-400">Address: 123 Housing Street, Real Estate City, RE 12345</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Happy Housing AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
