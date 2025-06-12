import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClock, faMapMarkerAlt, faRuler, faDollarSign, faBed, faBath } from '@fortawesome/free-solid-svg-icons'

const ViewingAppointments = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Viewing Appointments</h2>
      <div className="space-y-4">
        {/* Active Bookings */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Active Bookings</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-800">3 BHK Apartment</h4>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Confirmed</span>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 flex items-center gap-2">
                  <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-500" />
                  March 15, 2024
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <FontAwesomeIcon icon={faClock} className="text-blue-500" />
                  2:00 PM - 3:00 PM
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500" />
                  123 Downtown Street, New York
                </p>
                <p className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faRuler} className="text-blue-500" />
                  1,200 sqft
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Past Bookings */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-3">Past Bookings</h3>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-800">Cozy 2 BHK Villa</h4>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Ended</span>
              </div>
              <div className="space-y-2">
                <p className="text-gray-600 flex items-center gap-2">
                  <FontAwesomeIcon icon={faDollarSign} className="text-green-500" />
                  $1,800/month
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500" />
                  456 Suburban Road, New York
                </p>
                <div className="flex gap-4 text-gray-600">
                  <p className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faBed} className="text-blue-500" />
                    2 Beds
                  </p>
                  <p className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faBath} className="text-blue-500" />
                    2 Baths
                  </p>
                  <p className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faRuler} className="text-blue-500" />
                    950 sqft
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewingAppointments