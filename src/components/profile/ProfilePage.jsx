import React, { useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUserCircle, 
  faBookmark, 
  faCalendarAlt, 
  faUsers, 
  faBuilding, 
  faCog,
  faCalendarCheck,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons'

const ProfilePage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const sections = [
    { id: 'account-details', label: 'My Profile', path: '', icon: <FontAwesomeIcon icon={faUserCircle} className="text-xl" /> },
    { id: 'wishlist', label: 'Saved Properties', path: 'saved-properties', icon: <FontAwesomeIcon icon={faBookmark} className="text-xl" /> },
    { id: 'bookings', label: 'My Bookings', path: 'bookings', icon: <FontAwesomeIcon icon={faCalendarCheck} className="text-xl" /> },
    { id: 'my-bookings', label: 'Viewing Appointments', path: 'viewing-appointments', icon: <FontAwesomeIcon icon={faCalendarAlt} className="text-xl" /> },
    { id: 'realtor-bookings', label: 'Realtor Meetings', path: 'realtor-meetings', icon: <FontAwesomeIcon icon={faUsers} className="text-xl" /> },
    { id: 'listed-properties', label: 'My Listings', path: 'my-listings', icon: <FontAwesomeIcon icon={faBuilding} className="text-xl" /> },
    { id: 'settings', label: 'Preferences', path: 'preferences', icon: <FontAwesomeIcon icon={faCog} className="text-xl" /> },
  ]

  const isActiveSection = (section) => {
    if (section.path === '') {
      return location.pathname === '/profile'
    }
    return location.pathname === `/profile/${section.path}`
  }

  const handleNavigation = (path) => {
    navigate(`/profile/${path}`)
    setIsSidebarOpen(false)
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-gray-400 to-purple-100 pt-16 md:pt-0">
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-20 right-4 z-50 bg-[#03dac5] p-3 rounded-full shadow-lg hover:bg-[#02b8a6] transition-colors"
      >
        <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} className="text-xl text-black" />
      </button>

      {/* Sidebar */}
      <aside className={`fixed md:static inset-y-0 top-16 md:top-0 z-40 w-full md:w-1/4 bg-white/95 md:bg-white/10 backdrop-blur-md shadow-lg md:rounded-xl m-0 md:m-4 p-4 transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="flex flex-col gap-2 md:gap-4 h-full md:h-auto">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => handleNavigation(section.path)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base md:text-lg font-medium transition-all duration-300 ${
                isActiveSection(section)
                  ? 'bg-[#03dac5] text-black shadow-lg transform hover:scale-105'
                  : 'bg-white/20 text-black hover:bg-[#03dac5] hover:shadow-md'
              }`}
            >
              {section.icon}
              <span>{section.label}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 top-16 md:top-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 m-2 md:m-4 mt-4">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 md:p-6 shadow-lg">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default ProfilePage 