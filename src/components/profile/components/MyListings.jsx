import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEdit, faTrash, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const MyListings = () => {
  const navigate = useNavigate()

  const handleEdit = (propertyId) => {
    navigate(`/edit/${propertyId}/project-details`)
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Listings</h2>
      <div className="space-y-6">
        {/* Active Listings */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-4">Active Listings</h3>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="3 BHK Apartment"
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                  <span className="text-blue-800 font-semibold text-sm">Active</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">3 BHK Apartment</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <FaMapMarkerAlt className="text-red-500 mr-2" />
                  <span>Downtown Area, New York</span>
                </div>
                <p className="text-gray-700 font-medium mb-2">By Divyasagar Developers</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    G+8 Building
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    3BHK - 1430sqft
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-medium">$450,000</span>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    <button 
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                      onClick={() => handleEdit('property-1')}
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pending Listings */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-800 mb-4">Pending Approval</h3>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
                  alt="2 BHK Villa"
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                  <span className="text-yellow-800 font-semibold text-sm">Pending</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">2 BHK Villa</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <FaMapMarkerAlt className="text-red-500 mr-2" />
                  <span>Suburban Area, New York</span>
                </div>
                <p className="text-gray-700 font-medium mb-2">By Ganapati Builders</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    G+8 Building
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    2BHK - 1000sqft
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 font-medium">$350,000</span>
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyListings 