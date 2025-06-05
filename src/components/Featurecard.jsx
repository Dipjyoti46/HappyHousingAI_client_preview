import React from 'react'
import { Link } from 'react-router-dom'

// fname: feature name  fdetails: description of the feature flogo: icon for the feature card
const Featurecard = ({fname, fdetails, flogo, link, isMobile}) => {
  return (
    <div className='bg-gradient-to-br from-blue-500 to-blue-600 w-full h-auto min-h-[140px] md:min-h-[160px] text-white flex flex-row items-center p-3 md:p-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300'>
      <div className='flex-shrink-0'>
        <img className='w-16 h-16 md:w-24 md:h-24 object-contain hover:scale-110 transition-transform duration-300' src={flogo} alt={fname} />
      </div>
      <div className='flex flex-col items-center justify-center ml-3 md:ml-6 flex-grow text-center'>
        <h1 className='text-lg md:text-2xl font-bold mb-1 md:mb-3'>{fname}</h1>
        <p className='text-xs md:text-sm mb-2 md:mb-4 text-blue-100'>{fdetails}</p>
        <Link to={link} className='w-full max-w-[160px] md:max-w-[200px]'>
          <button className='bg-blue-900 px-3 py-1.5 md:px-6 md:py-2.5 w-full rounded-lg mt-1 md:mt-2 hover:bg-green-600 hover:border-2 hover:border-white hover:font-bold transition-all duration-300 text-sm md:text-base'>
            Try Now
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Featurecard
