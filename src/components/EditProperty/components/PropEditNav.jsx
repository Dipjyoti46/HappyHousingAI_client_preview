import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const PropEditNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    return location.pathname.includes(path);
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <nav className="bg-white shadow-md sticky top-20 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Back Button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <span className="font-medium">Menu</span>
            <svg
              className={`w-5 h-5 transform transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:block border-t border-gray-100`}>
          <ul className="flex flex-col lg:flex-row lg:gap-8 list-none p-0 m-0 py-2">
            <li className="w-full lg:w-auto">
              <Link 
                to="/edit/project-details" 
                className={`flex items-center gap-2 text-gray-700 font-medium px-4 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition-all duration-300 ${
                  isActive('project-details') ? 'bg-blue-50 text-blue-600' : ''
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Project Details
              </Link>
            </li>
            <li className="w-full lg:w-auto">
              <Link 
                to="/edit/photos-videos" 
                className={`flex items-center gap-2 text-gray-700 font-medium px-4 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition-all duration-300 ${
                  isActive('photos-videos') ? 'bg-blue-50 text-blue-600' : ''
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Photos and Videos
              </Link>
            </li>
            <li className="w-full lg:w-auto">
              <Link 
                to="/edit/flats-details" 
                className={`flex items-center gap-2 text-gray-700 font-medium px-4 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition-all duration-300 ${
                  isActive('flats-details') ? 'bg-blue-50 text-blue-600' : ''
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Flats Details
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default PropEditNav
