import React from 'react'
import { FaMapMarkerAlt, FaDownload } from 'react-icons/fa'

const Propertycard = ({ 
  toggleProjectdetails,
  toggleBorcher,
  toggleRealotrs,
  togglePriceAvailability,
  toggleRealotrSchedule,
  toggleInvestSQFT,
  pname,
  plocation,
  plocationlink,
  pimage,
  pbrochure,
  buildername,
  rera,
  gmc_noc,
  gmda_pp 
}) => {
  return (
    <div className='w-full bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl m-2 transition-all duration-300 hover:shadow-xl border border-blue-200'>
      <div className='flex flex-col md:flex-row'>
        {/* Property Image */}
        <div className='w-full md:w-64 h-64 md:h-auto relative'>
          <img 
            className='w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none' 
            src={pimage} 
            alt={pname} 
          />
          <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md'>
            <span className='text-blue-800 font-semibold text-sm'>New Launch</span>
          </div>
        </div>

        {/* Property Information */}
        <div className='p-6 flex flex-col justify-between flex-1'>
          <div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
              <div>
                <h1 className="text-2xl font-bold text-gray-800 mb-1">{pname}</h1>
                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="text-red-500 mr-2" />
                  <span>{plocation}</span>
                </div>
              </div>
            </div>
            
            <div className='space-y-2 mb-6'>
              <p className="text-gray-700 font-medium">By {buildername}</p>
              <div className='flex flex-wrap gap-4 text-sm text-gray-600'>
                <span className='flex items-center gap-1'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full'></span>
                  G+8 Building
                </span>
                <span className='flex items-center gap-1'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full'></span>
                  2BHK - 100sqft
                </span>
                <span className='flex items-center gap-1'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full'></span>
                  Possession: 26 Feb 2024
                </span>
              </div>
            </div>

            {/* Primary Action Buttons - View Map and Download Brochure */}
            <div className='flex gap-3 mb-6'>
              <a href={plocationlink} target='blank' className='flex-1'>
                <button className='w-full h-12 flex items-center justify-center gap-2 px-4 rounded-xl text-green-700 font-medium border-2 border-green-700 hover:bg-green-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md'>
                  <FaMapMarkerAlt className="text-lg" />
                  <span>View Map</span>
                </button>
              </a>
              <a href={pbrochure} target='blank' className='flex-1'>
                <button className='w-full h-12 flex items-center justify-center gap-2 px-4 rounded-xl text-green-700 font-medium border-2 border-green-700 hover:bg-green-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md'>
                  <FaDownload className="text-lg" />
                  <span>View Brochure</span>
                </button>
              </a>
            </div>

            {/* Secondary Action Buttons Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6'>
              <button 
                onClick={() => toggleProjectdetails({ rera, gmc_noc, gmda_pp, buildername })} 
                className='w-full h-12 flex items-center justify-center bg-[#03dac5] rounded-xl hover:bg-[#02b8a7] transition-all duration-300 text-gray-800 font-medium text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
              >
                Project and Firm Details
              </button>
              <button 
                onClick={toggleBorcher}
                className='w-full h-12 flex items-center justify-center bg-[#03dac5] rounded-xl hover:bg-[#02b8a7] transition-all duration-300 text-gray-800 font-medium text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
              >
                Photos & Videos
              </button>
              <button 
                onClick={toggleRealotrs}
                className='w-full h-12 flex items-center justify-center bg-[#03dac5] rounded-xl hover:bg-[#02b8a7] transition-all duration-300 text-gray-800 font-medium text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
              >
                Realtors
              </button>
            </div>

            {/* Final Action Buttons */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
              <button 
                onClick={toggleInvestSQFT}
                className='w-full h-12 flex items-center justify-center bg-[#03dac5] text-gray-800 rounded-xl font-semibold hover:bg-[#02b8a7] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
              >
                Invest per SQFT
              </button>
              <button 
                onClick={togglePriceAvailability}
                className='sm:col-span-2 w-full h-12 flex items-center px-4 bg-[#03dac5] border-2 border-[#02b8a7] text-gray-800 rounded-xl font-semibold hover:bg-[#02b8a7] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
              >
                <span className='flex-1 text-center'>Price Calculation and Availability</span>
                <button 
                  className='h-10 px-4 bg-white border-2 border-[#03dac5] text-black rounded-lg font-semibold hover:bg-green-700 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md text-sm'
                  onClick={(e) => e.stopPropagation()} // Prevent outer button click
                >
                  Book Now
                </button>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Propertycard
