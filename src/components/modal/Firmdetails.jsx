import React from 'react'

const Firmdetails = ({toggleFirmdetails}) => {
  return (
    <div className='w-3/4 h-2/4 bg-white p-10 rounded-xl shadow-lg relative'>
      <button onClick={toggleFirmdetails} className='absolute top-2 right-2 text-black font-bold text-xl bg-white border border-green-700 hover:bg-green-700 hover:text-white transition-all duration-300 px-2 rounded'>X</button>
      <h1 className='text-2xl font-bold'>Firm Details</h1>
      <p>This will contain the Firm details</p>
    </div>
  )
}

export default Firmdetails
