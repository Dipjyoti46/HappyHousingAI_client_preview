import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUserCircle, 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt, 
  faCalendarAlt,
  faCrown,
  faEdit,
  faKey,
  faBell,
  faCamera
} from '@fortawesome/free-solid-svg-icons'

const AccountDetails = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl p-8 shadow-lg">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">My Profile</h2>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#03dac5] text-black rounded-lg hover:bg-[#02b8a7] transition-all duration-300">
            <FontAwesomeIcon icon={faEdit} />
            <span>Edit Profile</span>
          </button>
        </div>

        {/* Profile Overview */}
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center relative">
              <FontAwesomeIcon icon={faUserCircle} className="text-7xl text-gray-500" />
              <button className="absolute bottom-0 right-0 bg-[#03dac5] text-black p-2 rounded-full hover:bg-[#02b8a7] transition-all duration-300">
                <FontAwesomeIcon icon={faCamera} className="text-sm" />
              </button>
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">John Doe</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-gray-600">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#03dac5]" />
                john.doe@example.com
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <FontAwesomeIcon icon={faPhone} className="text-[#03dac5]" />
                +1 (555) 123-4567
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#03dac5]" />
                New York, USA
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-[#03dac5] mb-4">Personal Information</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Full Name</label>
                <p className="text-gray-800">John Doe</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Date of Birth</label>
                <p className="text-gray-800">January 15, 1990</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Occupation</label>
                <p className="text-gray-800">Software Engineer</p>
              </div>
            </div>
          </div>

          {/* Account Status */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-[#03dac5] mb-4">Account Status</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCrown} className="text-[#03dac5]" />
                <span className="font-medium text-gray-800">Premium Member</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-[#03dac5]" />
                <span className="text-gray-600">Member since: January 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faBell} className="text-[#03dac5]" />
                <span className="text-gray-600">Notifications: Enabled</span>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-[#03dac5] mb-4">Security Settings</h4>
            <div className="space-y-4">
              <button className="flex items-center gap-2 text-[#03dac5] hover:text-[#02b8a7] transition-all duration-300">
                <FontAwesomeIcon icon={faKey} />
                <span>Change Password</span>
              </button>
              <button className="flex items-center gap-2 text-[#03dac5] hover:text-[#02b8a7] transition-all duration-300">
                <FontAwesomeIcon icon={faBell} />
                <span>Manage Notifications</span>
              </button>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-[#03dac5] mb-4">Preferences</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Language</label>
                <p className="text-gray-800">English</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Time Zone</label>
                <p className="text-gray-800">Eastern Time (ET)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountDetails