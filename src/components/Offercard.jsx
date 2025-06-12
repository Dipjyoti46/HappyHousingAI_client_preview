import React from 'react'
import property from "../img/background.jpg"
import { FaMapMarkerAlt, FaDownload } from 'react-icons/fa'

const Offercard = ({ 
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
    <div className='w-full md:w-120 h-auto bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg overflow-hidden border border-gray-200 relative'>
      {/* Add a subtle pattern overlay */}
      <div className='absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50'></div>
      
      {/* Mobile View */}
      <div className='md:hidden relative z-10'>
        {/* Image Section */}
        <div className='relative h-48 w-full'>
          <img 
            className='w-full h-full object-cover' 
            src={property} 
            alt={pname} 
          />
        </div>
        
        {/* Content Section */}
        <div className='p-4'>
          <h2 className='text-xl font-bold text-gray-800 mb-2'>{pname}</h2>
          <p className='text-gray-600 text-sm mb-2'>By {buildername}</p>
          <p className='text-gray-600 text-sm mb-4 flex items-center'>
            <FaMapMarkerAlt className='mr-2 text-red-600' />
            {plocation}
          </p>
          
          {/* Action Buttons */}
          <div className='flex gap-2 mb-4'>
            <a href={plocationlink} target='blank' className='flex-1'>
              <button className='w-full flex items-center justify-center gap-1 px-3 py-2 rounded-md text-green-700 font-medium border border-green-700 hover:bg-green-700 hover:text-white transition-all duration-300'>
                <FaMapMarkerAlt />
                <span>View Map</span>
              </button>
            </a>
            <a href={pbrochure} target='blank' className='flex-1'>
              <button className='w-full flex items-center justify-center gap-1 px-3 py-2 rounded-md text-green-700 font-medium border border-green-700 hover:bg-green-700 hover:text-white transition-all duration-300'>
                <FaDownload />
                <span>View Brochure</span>
              </button>
            </a>
          </div>

          {/* Property Details */}
          <div className='grid grid-cols-2 gap-2 mb-4'>
            <div className='bg-gray-50 p-2 rounded'>
              <p className='text-xs text-gray-500'>Type</p>
              <p className='text-sm font-medium'>2BHK</p>
            </div>
            <div className='bg-gray-50 p-2 rounded'>
              <p className='text-xs text-gray-500'>Area</p>
              <p className='text-sm font-medium'>100 sq.ft</p>
            </div>
            <div className='bg-gray-50 p-2 rounded'>
              <p className='text-xs text-gray-500'>Building</p>
              <p className='text-sm font-medium'>G+8</p>
            </div>
            <div className='bg-gray-50 p-2 rounded'>
              <p className='text-xs text-gray-500'>Possession</p>
              <p className='text-sm font-medium'>26 Feb 2024</p>
            </div>
          </div>

          {/* Action Buttons Grid */}
          <div className='grid grid-cols-2 gap-2'>
            <button 
              onClick={() => toggleProjectdetails({ rera, gmc_noc, gmda_pp, buildername })} 
              className='bg-[#03dac5] text-black p-2 rounded text-sm hover:bg-blue-900 border border-blue-900'
            >
              Project Details
            </button>
            <button 
              onClick={toggleBorcher} 
              className='bg-[#03dac5] text-black p-2 rounded text-sm hover:bg-blue-900 border border-blue-900'
            >
              Photos & Video
            </button>
            <button 
              onClick={toggleRealotrs} 
              className='bg-[#03dac5] text-black p-2 rounded text-sm hover:bg-blue-900 border border-blue-900'
            >
              Available Realtors
            </button>
            <button 
              onClick={toggleInvestSQFT} 
              className='bg-[#03dac5] text-black p-2 rounded text-sm hover:bg-blue-900 border border-blue-900'
            >
              Invest per SQFT
            </button>
            <button 
              onClick={togglePriceAvailability} 
              className='bg-[#03dac5] text-black p-2 rounded text-sm hover:bg-blue-900 border border-blue-900 col-span-2'
            >
              Price & Availability
            </button>
            <button 
              className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-[0_8px_16px_rgb(0_0_0/0.2)] hover:shadow-[0_12px_20px_rgb(0_0_0/0.3)] border-2 border-white/20 hover:border-white/40 relative overflow-hidden group flex items-center justify-center'
            >
              <span className='relative z-10 whitespace-nowrap'>Book Now</span>
              <div className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000'></div>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop View - Keep existing layout */}
      <div className='hidden md:block relative z-10'>
        <div className='flex'>
          <div className='text-black p-4 mt-10 flex flex-col justify-between'>
            <div className="flex">
              <h1 className="font-bold mr-2">Location - {plocation}</h1>
            </div>
            <p><b>{pname}</b></p>
            <p><small>By {buildername}</small></p>
            <p><small>G+8 Building,2BHK - 100sqft</small></p>
            <p><small>Possession Date - 26 Feb 2024</small></p>
            <div className='flex gap-2 mt-1'>
              <a href={plocationlink} target='blank'>
                <button className='flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-green-700 font-medium border border-green-700 hover:bg-green-700 hover:text-white transition-all duration-300 ease-in-out shadow-sm hover:shadow-md'>
                  <FaMapMarkerAlt className="text-base" />
                  <span className="text-xs">View Map</span>
                </button>
              </a>
              <a href={pbrochure} target='blank'>
                <button className='flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-green-700 font-medium border border-green-700 hover:bg-green-700 hover:text-white transition-all duration-300 ease-in-out shadow-sm hover:shadow-md'>
                  <FaDownload className="text-base" />
                  <span className="text-xs">View Brochure</span>
                </button>
              </a>
            </div>
          </div>
          <img className='w-48 h-48 float-right m-3 rounded-sm object-cover' src={property} alt="" />
        </div>
        <div className='text-white grid grid-cols-4 gap-2 ml-2 mr-2 mb-2'>
          <button 
            onClick={() => toggleProjectdetails({ rera, gmc_noc, gmda_pp, buildername })} 
            className='bg-[#03dac5] text-black p-4 col-span-2 rounded-sm hover:border-1 hover:border-offset-2 hover:border-white hover:font-bold border border-blue-900'
          >
            Project Details
          </button>
          <button 
            onClick={toggleBorcher} 
            className='bg-[#03dac5] text-black p-4 col-span-2 rounded-sm hover:border-1 hover:border-offset-2 hover:border-white hover:font-bold border border-blue-900'
          >
            Photos & Video
          </button>
          <button 
            onClick={toggleRealotrs} 
            className='bg-[#03dac5] text-black p-4 col-span-2 rounded-sm hover:border-1 hover:border-offset-2 hover:border-white hover:font-bold border border-blue-900'
          >
            Available Realtors
          </button>
          <button 
            onClick={toggleInvestSQFT} 
            className='bg-[#03dac5] text-black p-4 col-span-2 rounded-sm hover:border-1 hover:border-offset-2 hover:border-white hover:font-bold border border-blue-900'
          >
            Invest per SQFT
          </button>
          <button 
            onClick={togglePriceAvailability} 
            className='bg-[#03dac5] text-black p-4 col-span-3 rounded-sm hover:border-1 hover:border-offset-2 hover:border-white hover:font-bold border border-blue-900'
          >
            Price & Availability
          </button>
          <button 
            className='bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white px-8 py-3 rounded-lg font-bold hover:from-blue-700 hover:via-purple-700 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-[0_8px_16px_rgb(0_0_0/0.2)] hover:shadow-[0_12px_20px_rgb(0_0_0/0.3)] border-2 border-white/20 hover:border-white/40 relative overflow-hidden group flex items-center justify-center'
          >
            <span className='relative z-10 whitespace-nowrap'>Book Now</span>
            <div className='absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000'></div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Offercard
