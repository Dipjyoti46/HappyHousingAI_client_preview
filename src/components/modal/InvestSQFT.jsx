import React, { useState, useEffect } from 'react'

const InvestSQFT = ({ toggleInvestSQFT }) => {
  const [area, setArea] = useState('');
  const [pricePerSqFt] = useState('4500'); // Removed setPricePerSqFt since it's now static
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [totalInvestableArea] = useState('10000'); // Total investable area
  const [investedArea] = useState('3500'); // Area already invested by others
  const [availableArea, setAvailableArea] = useState('6500'); // Remaining available area

  const validateInput = (value) => {
    const num = Number(value);
    if (isNaN(num)) return false;
    if (num < 0) return false;
    if (num > Number(availableArea)) {
      setError(`Maximum available area is ${availableArea} sq ft`);
      return false;
    }
    return true;
  };

  const handleAreaChange = (e) => {
    const value = e.target.value;
    if (validateInput(value)) {
      setArea(value);
      setError('');
    } else {
      setError('Please enter a valid area within available limits');
    }
  };

  const incrementArea = () => {
    const currentValue = Number(area) || 0;
    const newValue = currentValue + 1; // Increment by 1 sq ft
    if (validateInput(newValue.toString())) {
      setArea(newValue.toString());
      setError('');
    }
  };

  const decrementArea = () => {
    const currentValue = Number(area) || 0;
    const newValue = Math.max(0, currentValue - 1); // Decrement by 1 sq ft, minimum 0
    setArea(newValue.toString());
    setError('');
  };

  // Auto-calculate total price whenever area or price changes
  useEffect(() => {
    if (area && pricePerSqFt) {
      const total = Number(area) * Number(pricePerSqFt);
      setTotalPrice(total);
    }
  }, [area, pricePerSqFt]);

  const handleInvest = () => {
    if (!area) {
      setError('Please enter the area');
      return;
    }
    alert('Investment initiated!');
  };

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300' onClick={toggleInvestSQFT}></div>
      <div className='w-3/4 h-[80vh] bg-white p-0 rounded-2xl shadow-2xl relative overflow-hidden z-50 transform transition-all duration-300 scale-100 hover:scale-[1.01]'>
        {/* Header */}
        <div className='w-full h-16 bg-gradient-to-r from-blue-800 to-blue-600 rounded-t-2xl px-8 py-4 relative'>
          <button
            onClick={toggleInvestSQFT}
            className='absolute w-8 h-8 rounded-lg top-4 right-6 bg-white/20 hover:bg-white/30 text-white font-bold text-lg transition-all duration-300 backdrop-blur-sm'
          >
            ×
          </button>
          <h1 className='text-2xl font-bold text-white'>Investment Calculator</h1>
        </div>

        {/* Content */}
        <div className='h-[calc(100%-4rem)] p-6'>
          <div className='bg-white rounded-xl h-full'>
            {error && (
              <div className='mb-4 p-3 bg-red-50 border-l-4 border-red-500 text-red-700 rounded-lg animate-fade-in'>
                <p className='font-medium text-sm'>{error}</p>
              </div>
            )}
            
            <div className='grid grid-cols-2 gap-6 h-full'>
              {/* Calculator Section */}
              <div className='space-y-6 p-4'>
                <div className='bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-sm'>
                  <label className='block text-gray-700 text-lg font-bold mb-4 flex items-center'>
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                    Area (Square Feet)
                  </label>
                  <div className='relative group'>
                    <div className='flex items-center bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden'>
                      <button
                        onClick={decrementArea}
                        className='w-14 h-14 flex items-center justify-center bg-gradient-to-b from-blue-50 to-white hover:from-red-50 hover:to-red-100 text-blue-600 hover:text-red-600 font-bold text-2xl transition-all duration-300 border-r border-blue-100'
                      >
                        −
                      </button>
                      <div className='flex-1 relative'>
                        <input
                          type="number"
                          value={area}
                          onChange={handleAreaChange}
                          className='w-full h-14 px-4 border-0 focus:ring-0 focus:outline-none text-center text-xl font-semibold text-gray-800 placeholder-gray-400'
                          placeholder="Enter area"
                          min="0"
                          max={availableArea}
                        />
                        <span className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm font-medium bg-gray-50 px-2 py-1 rounded-md'>
                          sq ft
                        </span>
                      </div>
                      <button
                        onClick={incrementArea}
                        className='w-14 h-14 flex items-center justify-center bg-gradient-to-b from-blue-50 to-white hover:from-green-50 hover:to-green-100 text-blue-600 hover:text-green-600 font-bold text-2xl transition-all duration-300 border-l border-blue-100'
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className='mt-4 flex items-center justify-between text-sm'>
                    <span className='text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100'>Min: 0 sq ft</span>
                    <span className='text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100'>Max: {availableArea} sq ft</span>
                  </div>
                </div>

                <div className='bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-sm'>
                  <label className='block text-gray-700 text-lg font-bold mb-4 flex items-center'>
                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Price per Square Foot
                  </label>
                  <div className='relative'>
                    <div className='w-full p-5 border border-blue-100 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 text-base flex items-center justify-between shadow-sm'>
                      <div className='flex items-center space-x-4'>
                        <span className='text-3xl font-bold text-blue-800'>₹{pricePerSqFt}</span>
                        <div className='flex items-center space-x-1.5 bg-green-50 px-3 py-1.5 rounded-lg border border-green-100'>
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                          </svg>
                          <span className='text-sm text-green-600 font-medium'>Price Up</span>
                        </div>
                      </div>
                      <span className='text-gray-500 font-medium bg-white/50 px-3 py-1.5 rounded-lg'>per sq ft</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className='bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl shadow-sm'>
                <h2 className='text-xl font-bold text-gray-800 mb-4'>Investment Details</h2>
                <div className='space-y-4'>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='bg-white p-4 rounded-lg shadow-sm'>
                      <span className='text-sm text-gray-500 block mb-1'>Total Investable Area</span>
                      <span className='text-lg font-bold text-gray-800'>{totalInvestableArea} sq ft</span>
                    </div>
                    <div className='bg-white p-4 rounded-lg shadow-sm'>
                      <span className='text-sm text-gray-500 block mb-1'>Already Invested</span>
                      <span className='text-lg font-bold text-red-600'>{investedArea} sq ft</span>
                    </div>
                  </div>

                  <div className='bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100'>
                    <span className='text-sm text-gray-500 block mb-1'>Available Area</span>
                    <span className='text-xl font-bold text-green-600'>{availableArea} sq ft</span>
                  </div>

                  <div className='border-t border-gray-100 pt-4 space-y-3'>
                    <div className='flex justify-between items-center'>
                      <span className='text-base text-gray-600'>Your Investment Area</span>
                      <span className='text-lg font-semibold'>{area ? `${area} sq ft` : '-'}</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span className='text-base text-gray-600'>Price per sq ft</span>
                      <div className='flex items-center space-x-2'>
                        <span className='text-lg font-bold text-blue-800'>₹{pricePerSqFt}</span>
                        <div className='flex items-center space-x-1'>
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className='bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg mt-3'>
                      <div className='flex justify-between items-center'>
                        <span className='text-lg font-bold text-gray-800'>Total Investment</span>
                        <span className='text-2xl font-bold text-blue-600'>
                          {totalPrice ? `₹${totalPrice.toLocaleString()}` : '-'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleInvest}
                    className='w-full py-3 px-4 rounded-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg mt-4 text-base'
                  >
                    Invest Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestSQFT
