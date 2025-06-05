import React from 'react'

const FLatprice = ({ toggleFLatprice, flatNumber }) => {
  return (
    <div className='w-3/4 h-[80vh] bg-white p-0 rounded-xl shadow-lg relative overflow-hidden'>
      {/* Header */}
      <div className='w-full h-20 bg-blue-800/90 rounded-tl-xl rounded-tr-xl p-5 relative'>
        <button
          onClick={toggleFLatprice}
          className='absolute w-10 h-10 rounded-xl top-2 right-2 bg-white text-black font-bold text-xl'
        >
          X
        </button>
        <h1 className='text-2xl font-bold text-white'>Flat Price Details</h1>
      </div>

      {/* Content */}
      <div className='h-[calc(100%-5rem)] overflow-y-auto overflow-x-hidden p-5'>
        <div className='bg-white rounded-xl shadow-lg p-6'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>Flat {flatNumber}</h2>
          
          {/* Price Details */}
          <div className='grid grid-cols-2 gap-6 mb-6'>
            <div className='bg-gray-50 p-4 rounded-lg'>
              <h3 className='text-lg font-semibold text-gray-700 mb-2'>Basic Price</h3>
              <p className='text-2xl font-bold text-blue-600'>₹45,00,000</p>
            </div>
            <div className='bg-gray-50 p-4 rounded-lg'>
              <h3 className='text-lg font-semibold text-gray-700 mb-2'>Total Price</h3>
              <p className='text-2xl font-bold text-green-600'>₹48,50,000</p>
            </div>
          </div>

          {/* Additional Details */}
          <div className='space-y-4'>
            <div className='border-b pb-4'>
              <h3 className='text-lg font-semibold text-gray-700 mb-2'>Flat Specifications</h3>
              <ul className='space-y-2 text-gray-600'>
                <li>• 3 BHK Apartment</li>
                <li>• 1430 sq.ft. Super Built-up Area</li>
                <li>• 2 Bathrooms</li>
                <li>• 1 Balcony</li>
                <li>• North Facing</li>
              </ul>
            </div>

            <div className='border-b pb-4'>
              <h3 className='text-lg font-semibold text-gray-700 mb-2'>Payment Plans</h3>
              <div className='space-y-2 text-gray-600'>
                <p>• 10% Booking Amount</p>
                <p>• 90% On Possession</p>
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-gray-700 mb-2'>Additional Charges</h3>
              <ul className='space-y-2 text-gray-600'>
                <li>• Registration Charges: ₹2,00,000</li>
                <li>• Maintenance Charges: ₹5,000/month</li>
                <li>• Parking Charges: ₹3,50,000</li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='mt-8 flex gap-4'>
            <button className='flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors'>
              Book Now
            </button>
            <button className='flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors'>
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FLatprice
