import React from 'react'
import { Link } from 'react-router-dom'

// fname: feature name  fdetails: description of the feature flogo: icon for the feature card
const Featurecard = ({fname, fdetails, flogo, link, isMobile}) => {
  return (
    <div className='bg-gradient-to-r from-gray-700 to-blue-200 to-blue-300 w-full h-auto min-h-[140px] md:min-h-[160px] text-black flex flex-row items-center p-3 md:p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300'>
      <div className='flex-shrink-0 w-2/5 h-full flex items-center justify-center'>
        <img 
          className='w-full h-full max-h-[160px] md:max-h-[200px] object-contain hover:scale-110 transition-transform duration-300' 
          src={flogo} 
          alt={fname} 
        />
      </div>
      <div className='flex flex-col items-center justify-center ml-3 md:ml-6 flex-grow text-center'>
        <h1 className='text-lg md:text-3xl font-bold mb-1 md:mb-3 text-[#000000]'>{fname}</h1>
        <p className='text-xs md:text-[20px] mb-2 md:mb-4 text-black'>{fdetails}</p>
        <Link to={link} className='w-full max-w-[160px] md:max-w-[200px]'>
          <button className='bg-[#03dac5] text-black px-3 py-1.5 md:px-6 md:py-2.5 w-full rounded-lg mt-1 md:mt-2 hover:bg-blue-500 hover:border-2 hover:border-white hover:text-white md:text-base'>
            Try Now
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Featurecard
