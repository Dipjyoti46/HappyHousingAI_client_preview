import React from 'react'
import dp from '../../../img/background.jpg'

const Realtorscard = ({ toggleRealotrSchedule }) => {
  return (
    <div className='flex items-center bg-gradient-to-r from-blue-300 to-blue-500 rounded-xl p-6 shadow-lg m-5'>
      {/* Profile Section */}
      <div className='relative'>
        <div className='absolute inset-0 bg-white/20 rounded-full blur-sm'></div>
        <img 
          className='w-24 h-24 rounded-full object-cover border-4 border-white/30 shadow-xl relative z-10' 
          src={dp} 
          alt="Realtor Profile" 
        />
        <div className='absolute -bottom-2 -right-2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20'>
          Available
        </div>
      </div>

      {/* Info Section */}
      <div className='ml-8 text-black'>
        <h1 className='text-2xl font-bold mb-1'>Animesh Roy</h1>
        <p className='text-black100 mb-2'>Assamese, Bengali, Hindi, English</p>
        <div className='flex items-center gap-6'>
          <div className='flex items-center gap-2'>
            <span className='text-yellow-300 text-xl'>★</span>
            <span className='font-semibold'>4.5</span>
            <span className='text-blue-900'>(3 Years Experience)</span>
          </div>
        </div>
      </div>

      {/* Price and Schedule Section */}
      <div className='ml-auto bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg'>
        <div className='flex flex-col items-center mb-3'>
          <h1 className='text-xl font-bold text-blue-900 mb-2'>Site Visit</h1>
          <p className='text-lg text-red-600 line-through'>₹199</p>
          <p className='text-2xl font-bold text-green-700'>Free</p>
          <span className='text-sm text-red-700 font-semibold mt-1'>Limited Time Offer!</span>
        </div>
        <button 
          onClick={toggleRealotrSchedule}
          className='w-full bg-blue-800 text-white hover:bg-blue-900 font-semibold py-2 px-4 rounded-lg transition-colors'
        >
          Schedule Now
        </button>
      </div>
    </div>
  )
}

export default Realtorscard
