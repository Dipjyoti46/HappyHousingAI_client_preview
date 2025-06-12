import React, { useState, useEffect } from 'react'

const PropEditFlapPrice = ({ toggleFlatPrice, flatNumber }) => {
  const [flatDetails, setFlatDetails] = useState({
    basicPrice: '45,00,000',
    totalPrice: '48,50,000',
    specifications: {
      type: '3 BHK',
      area: '1430',
      bathrooms: '2',
      balconies: '1',
      facing: 'North'
    },
    paymentPlans: {
      bookingAmount: '10',
      possessionAmount: '90'
    },
    additionalCharges: {
      registration: '2,00,000',
      maintenance: '5,000',
      parking: '3,50,000'
    },
    images: {
      windowView: "https://images.unsplash.com/photo-1514580597161-eb1c0b1a7971?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdpbmRvdyUyMHZpZXd8ZW58MHx8MHx8fDA%3D",
      floorPlan: "https://media.istockphoto.com/id/1357015416/photo/a-3d-floor-plan-design.jpg?s=612x612&w=is&k=20&c=ZVZr7oS0CkG3nmHln-xN7arQkRcq-ixTsv0JqzadZAA="
    }
  });

  // Function to convert string price to number
  const priceToNumber = (priceStr) => {
    return parseInt(priceStr.replace(/,/g, '')) || 0;
  };

  // Function to format number to price string
  const formatPrice = (number) => {
    return number.toLocaleString('en-IN');
  };

  // Calculate total price whenever basic price or additional charges change
  useEffect(() => {
    const basicPriceNum = priceToNumber(flatDetails.basicPrice);
    const registrationNum = priceToNumber(flatDetails.additionalCharges.registration);
    const maintenanceNum = priceToNumber(flatDetails.additionalCharges.maintenance);
    const parkingNum = priceToNumber(flatDetails.additionalCharges.parking);

    const total = basicPriceNum + registrationNum + maintenanceNum + parkingNum;
    
    setFlatDetails(prev => ({
      ...prev,
      totalPrice: formatPrice(total)
    }));
  }, [flatDetails.basicPrice, flatDetails.additionalCharges]);

  const handleInputChange = (section, field, value) => {
    // Remove any non-numeric characters except commas
    const sanitizedValue = value.replace(/[^\d,]/g, '');
    
    // For basic price, ensure proper formatting
    if (section === 'basicPrice') {
      const numericValue = sanitizedValue.replace(/,/g, '');
      const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      setFlatDetails(prev => ({
        ...prev,
        basicPrice: formattedValue
      }));
      return;
    }
    
    setFlatDetails(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: sanitizedValue
      }
    }));
  };

  const handlePriceAdjustment = (amount) => {
    const currentPrice = priceToNumber(flatDetails.basicPrice);
    const newPrice = Math.max(0, currentPrice + amount); // Prevent negative prices
    const formattedPrice = formatPrice(newPrice);
    setFlatDetails(prev => ({
      ...prev,
      basicPrice: formattedPrice
    }));
  };

  const handleImageUpload = (type, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFlatDetails(prev => ({
          ...prev,
          images: {
            ...prev.images,
            [type]: reader.result
          }
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='w-[95%] md:w-3/4 h-[90vh] md:h-[80vh] bg-white p-0 rounded-xl shadow-lg relative overflow-hidden'>
      {/* Header */}
      <div className='w-full h-16 md:h-20 bg-blue-800/90 rounded-tl-xl rounded-tr-xl p-3 md:p-5 relative'>
        <button
          onClick={toggleFlatPrice}
          className='absolute w-8 h-8 md:w-10 md:h-10 rounded-xl top-2 right-2 bg-white text-black font-bold text-lg md:text-xl'
        >
          X
        </button>
        <h1 className='text-xl md:text-2xl font-bold text-white'>Flat Price Details</h1>
      </div>

      {/* Content */}
      <div className='h-[calc(100%-4rem)] md:h-[calc(100%-5rem)] overflow-y-auto overflow-x-hidden p-3 md:p-5'>
        <div className='bg-white rounded-xl shadow-lg p-4 md:p-6'>
          <h2 className='text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4'>Flat {flatNumber}</h2>
          
          {/* Window View and Flat Map */}
          <div className='mb-6 md:mb-8'>
            <h3 className='text-base md:text-lg font-semibold text-gray-700 mb-3 md:mb-4'>Window View & Floor Plan</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
              {/* Window View */}
              <div className='bg-gray-50 p-3 md:p-4 rounded-lg'>
                <h4 className='text-sm md:text-base font-semibold text-gray-700 mb-2 md:mb-3'>Window View</h4>
                <div className='relative group'>
                  <div className='aspect-video bg-gray-200 rounded-lg overflow-hidden'>
                    <img 
                      src={flatDetails.images.windowView}
                      alt="Window View" 
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                    <label className='cursor-pointer bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors'>
                      Change Image
                      <input
                        type="file"
                        accept="image/*"
                        className='hidden'
                        onChange={(e) => handleImageUpload('windowView', e)}
                      />
                    </label>
                  </div>
                </div>
              </div>
              
              {/* Flat Map */}
              <div className='bg-gray-50 p-3 md:p-4 rounded-lg'>
                <h4 className='text-sm md:text-base font-semibold text-gray-700 mb-2 md:mb-3'>Floor Plan</h4>
                <div className='relative group'>
                  <div className='aspect-video bg-gray-200 rounded-lg overflow-hidden'>
                    <img 
                      src={flatDetails.images.floorPlan}
                      alt="Floor Plan" 
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                    <label className='cursor-pointer bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors'>
                      Change Image
                      <input
                        type="file"
                        accept="image/*"
                        className='hidden'
                        onChange={(e) => handleImageUpload('floorPlan', e)}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Price Details */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6'>
            <div className='bg-gray-50 p-3 md:p-4 rounded-lg'>
              <h3 className='text-base md:text-lg font-semibold text-gray-700 mb-1 md:mb-2'>Basic Price</h3>
              <div className="relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                <input
                  type="text"
                  value={flatDetails.basicPrice}
                  onChange={(e) => handleInputChange('basicPrice', '', e.target.value)}
                  className="w-full pl-6 text-xl md:text-2xl font-bold text-blue-600 bg-transparent border-none focus:ring-0"
                  placeholder="Enter basic price"
                />
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <button
                  onClick={() => handlePriceAdjustment(10)}
                  className="px-3 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg text-sm font-medium transition-colors"
                  title="+₹10"
                >
                  +₹10
                </button>
                <button
                  onClick={() => handlePriceAdjustment(100)}
                  className="px-3 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg text-sm font-medium transition-colors"
                  title="+₹100"
                >
                  +₹100
                </button>
                <button
                  onClick={() => handlePriceAdjustment(1000)}
                  className="px-3 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg text-sm font-medium transition-colors"
                  title="+₹1,000"
                >
                  +₹1,000
                </button>
                <button
                  onClick={() => handlePriceAdjustment(100000)}
                  className="px-3 py-1.5 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg text-sm font-medium transition-colors"
                  title="+₹1,00,000"
                >
                  +₹1,00,000
                </button>
              </div>
            </div>
            <div className='bg-gray-50 p-3 md:p-4 rounded-lg'>
              <h3 className='text-base md:text-lg font-semibold text-gray-700 mb-1 md:mb-2'>Total Price</h3>
              <div className="relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                <input
                  type="text"
                  value={flatDetails.totalPrice}
                  readOnly
                  className="w-full pl-6 text-xl md:text-2xl font-bold text-green-600 bg-transparent border-none focus:ring-0"
                />
              </div>
            </div>
          </div>

          {/* Additional Details */}
          <div className='space-y-3 md:space-y-4'>
            <div className='border-b pb-3 md:pb-4'>
              <h3 className='text-base md:text-lg font-semibold text-gray-700 mb-1 md:mb-2'>Flat Specifications</h3>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                <div>
                  <label className='text-sm text-gray-600'>Type</label>
                  <input
                    type="text"
                    value={flatDetails.specifications.type}
                    onChange={(e) => handleInputChange('specifications', 'type', e.target.value)}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className='text-sm text-gray-600'>Area (sq.ft)</label>
                  <input
                    type="text"
                    value={flatDetails.specifications.area}
                    onChange={(e) => handleInputChange('specifications', 'area', e.target.value)}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className='text-sm text-gray-600'>Bathrooms</label>
                  <input
                    type="text"
                    value={flatDetails.specifications.bathrooms}
                    onChange={(e) => handleInputChange('specifications', 'bathrooms', e.target.value)}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className='text-sm text-gray-600'>Balconies</label>
                  <input
                    type="text"
                    value={flatDetails.specifications.balconies}
                    onChange={(e) => handleInputChange('specifications', 'balconies', e.target.value)}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className='text-sm text-gray-600'>Facing</label>
                  <select
                    value={flatDetails.specifications.facing}
                    onChange={(e) => handleInputChange('specifications', 'facing', e.target.value)}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="North">North</option>
                    <option value="South">South</option>
                    <option value="East">East</option>
                    <option value="West">West</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='border-b pb-3 md:pb-4'>
              <h3 className='text-base md:text-lg font-semibold text-gray-700 mb-1 md:mb-2'>Payment Plans</h3>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                <div>
                  <label className='text-sm text-gray-600'>Booking Amount (%)</label>
                  <input
                    type="text"
                    value={flatDetails.paymentPlans.bookingAmount}
                    onChange={(e) => handleInputChange('paymentPlans', 'bookingAmount', e.target.value)}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className='text-sm text-gray-600'>Possession Amount (%)</label>
                  <input
                    type="text"
                    value={flatDetails.paymentPlans.possessionAmount}
                    onChange={(e) => handleInputChange('paymentPlans', 'possessionAmount', e.target.value)}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 className='text-base md:text-lg font-semibold text-gray-700 mb-1 md:mb-2'>Additional Charges</h3>
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-3'>
                <div>
                  <label className='text-sm text-gray-600'>Registration Charges</label>
                  <div className="relative">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="text"
                      value={flatDetails.additionalCharges.registration}
                      onChange={(e) => handleInputChange('additionalCharges', 'registration', e.target.value)}
                      className="w-full pl-6 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className='text-sm text-gray-600'>Maintenance (per month)</label>
                  <div className="relative">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="text"
                      value={flatDetails.additionalCharges.maintenance}
                      onChange={(e) => handleInputChange('additionalCharges', 'maintenance', e.target.value)}
                      className="w-full pl-6 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className='text-sm text-gray-600'>Parking Charges</label>
                  <div className="relative">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      type="text"
                      value={flatDetails.additionalCharges.parking}
                      onChange={(e) => handleInputChange('additionalCharges', 'parking', e.target.value)}
                      className="w-full pl-6 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4'>
            <button className='w-full bg-blue-600 text-white py-2.5 md:py-3 px-4 md:px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors'>
              Save Changes
            </button>
            <button 
              onClick={toggleFlatPrice}
              className='w-full bg-gray-200 text-gray-800 py-2.5 md:py-3 px-4 md:px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors'
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropEditFlapPrice
