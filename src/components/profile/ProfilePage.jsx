import React from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUserCircle, 
  faBookmark, 
  faCalendarAlt, 
  faUsers, 
  faBuilding, 
  faCog,
  faCalendarCheck 
} from '@fortawesome/free-solid-svg-icons'

const ProfilePage = () => {
  const navigate = useNavigate()
  const location = useLocation()

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

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Sidebar */}
      <aside className="md:w-1/4 bg-white shadow-lg rounded-xl m-4 p-4 flex flex-row md:flex-col gap-2 md:gap-4">
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => navigate(`/profile/${section.path}`)}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium transition-colors duration-200 ${
              isActiveSection(section)
                ? 'bg-blue-600 text-white shadow'
                : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
            }`}
          >
            {section.icon}
            <span>{section.label}</span>
          </button>
        ))}
      </aside>
      {/* Main Content */}
      <main className="flex-1 m-4">
        <Outlet />
      </main>
    </div>
  )
}

export default ProfilePage 