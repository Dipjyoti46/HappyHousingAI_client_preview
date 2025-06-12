import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUserCircle, 
  faBookmark, 
  faCalendarAlt, 
  faUsers, 
  faBuilding, 
  faCog 
} from '@fortawesome/free-solid-svg-icons'

const sections = [
  { id: 'account-details', label: 'My Profile', icon: <FontAwesomeIcon icon={faUserCircle} className="text-xl" /> },
  { id: 'wishlist', label: 'Saved Properties', icon: <FontAwesomeIcon icon={faBookmark} className="text-xl" /> },
  { id: 'my-bookings', label: 'Viewing Appointments', icon: <FontAwesomeIcon icon={faCalendarAlt} className="text-xl" /> },
  { id: 'realtor-bookings', label: 'Realtor Meetings', icon: <FontAwesomeIcon icon={faUsers} className="text-xl" /> },
  { id: 'listed-properties', label: 'My Listings', icon: <FontAwesomeIcon icon={faBuilding} className="text-xl" /> },
  { id: 'settings', label: 'Preferences', icon: <FontAwesomeIcon icon={faCog} className="text-xl" /> },
]

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <aside className="md:w-1/4 bg-white shadow-lg rounded-xl m-4 p-4 flex flex-row md:flex-col gap-2 md:gap-4">
      {sections.map(section => (
        <button
          key={section.id}
          onClick={() => setActiveSection(section.id)}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium transition-colors duration-200 ${
            activeSection === section.id
              ? 'bg-blue-600 text-white shadow'
              : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
          }`}
        >
          {section.icon}
          <span>{section.label}</span>
        </button>
      ))}
    </aside>
  )
}

export default Sidebar 