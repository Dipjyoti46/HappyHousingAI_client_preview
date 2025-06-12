import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPhone, faEnvelope, faStar, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const RealtorMeetings = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <FontAwesomeIcon icon={faCalendarAlt} className="text-orange-600" />
        Realtor Meetings
      </h2>
      <div className="space-y-6">
        {/* Upcoming Meetings */}
        <div className="bg-gradient-to-r from-green-100 to-green-300 rounded-xl p-4">
          <h3 className="font-semibold text-green-800 mb-4">Upcoming Meetings</h3>
          <div className="space-y-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-sm"></div>
                    <img 
                      src="https://randomuser.me/api/portraits/men/75.jpg" 
                      alt="Amit Sharma" 
                      className="w-16 h-16 rounded-full object-cover border-4 border-white/30 shadow-xl relative z-10"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
                      Available
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Amit Sharma</h4>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                      <span className="text-sm text-gray-600">4.8 (120 reviews)</span>
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Scheduled</span>
              </div>
              <div className="space-y-2">
                <div className="bg-gray-50 rounded-lg p-3 mb-2 flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=80&q=80" 
                    alt="Property" 
                    className="w-12 h-12 rounded-lg object-cover border border-gray-200" 
                  />
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">Sunshine Residency</div>
                    <div className="text-xs text-gray-600">123 MG Road, Mumbai</div>
                    <a href="https://example.com/property/sunshine-residency" className="inline-block mt-1 text-xs text-blue-600 hover:underline">View Property</a>
                  </div>
                </div>
                <p className="text-gray-600 flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} className="text-green-700" />
                  +91 98765 43210
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="text-green-700" />
                  amit.sharma@realty.in
                </p>
                <div className="flex gap-3 mt-4">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold shadow transition"
                  >
                    <FontAwesomeIcon icon={faPhone} />
                    Call
                  </a>
                  <a
                    href="mailto:amit.sharma@realty.in"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold shadow transition"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Past Meetings */}
        <div className="bg-gradient-to-r from-red-100 to-red-300 rounded-xl p-4">
          <h3 className="font-semibold text-red-800 mb-4">Past Meetings</h3>
          <div className="space-y-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-sm"></div>
                    <img 
                      src="https://randomuser.me/api/portraits/women/65.jpg" 
                      alt="Priya Singh" 
                      className="w-16 h-16 rounded-full object-cover border-4 border-white/30 shadow-xl relative z-10"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
                      Completed
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Priya Singh</h4>
                    <div className="flex items-center gap-1">
                      <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                      <span className="text-sm text-gray-600">4.9 (85 reviews)</span>
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Completed</span>
              </div>
              <div className="space-y-2">
                <div className="bg-gray-50 rounded-lg p-3 mb-2 flex items-center gap-3">
                  <img 
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=80&q=80" 
                    alt="Property" 
                    className="w-12 h-12 rounded-lg object-cover border border-gray-200" 
                  />
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">Green Valley Heights</div>
                    <div className="text-xs text-gray-600">45 Park Street, Kolkata</div>
                    <a href="https://example.com/property/green-valley-heights" className="inline-block mt-1 text-xs text-blue-600 hover:underline">View Property</a>
                  </div>
                </div>
                <p className="text-gray-600 flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} className="text-red-700" />
                  +91 91234 56789
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="text-red-700" />
                  priya.singh@realty.in
                </p>
                <div className="flex gap-3 mt-4">
                  <a
                    href="tel:+919123456789"
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold shadow transition"
                  >
                    <FontAwesomeIcon icon={faPhone} />
                    Call
                  </a>
                  <a
                    href="mailto:priya.singh@realty.in"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold shadow transition"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    Chat
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RealtorMeetings