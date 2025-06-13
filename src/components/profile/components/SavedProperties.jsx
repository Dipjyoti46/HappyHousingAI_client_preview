import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

const SavedProperties = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Saved Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Property Card 1 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="3 BHK Apartment"
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
              <span className="text-[#03dac5] font-semibold text-sm">New Launch</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold text-gray-800 mb-2">3 BHK Apartment</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <FaMapMarkerAlt className="text-[#03dac5] mr-2" />
              <span>Downtown Area, New York</span>
            </div>
            <p className="text-gray-700 font-medium mb-2">By Divyasagar Developers</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-[#03dac5] rounded-full"></span>
                G+8 Building
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 bg-[#03dac5] rounded-full"></span>
                3BHK - 1430sqft
              </span>
            </div>
            <button className="w-full h-12 flex items-center justify-center bg-[#03dac5] rounded-xl hover:bg-[#02b8a7] transition-all duration-300 text-black font-medium text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              View Property
            </button>
          </div>
        </div>

        {/* Property Card 2 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
              alt="2 BHK Villa"
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
              <span className="text-blue-800 font-semibold text-sm">New Launch</span>
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
            <button className="w-full h-12 flex items-center justify-center bg-[#03dac5] rounded-xl hover:bg-[#02b8a7] transition-all duration-300 text-gray-800 font-medium text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              View Property
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SavedProperties