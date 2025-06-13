import React, { useState } from 'react'

const PropEditDetails = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);
  const [formData, setFormData] = useState({
    // Basic Information
    projectName: 'Sunshine Residency',
    projectCode: 'SR-2024',
    reraId: 'RERA123456',
    location: '123 Green Valley, Mumbai',
    startingDate: '2024-01-01',
    completionDate: '2025-12-31',
    totalLandArea: '50,000 sq.ft',
    noOfBlocks: '4',
    sizeOfFlat: '2BHK, 3BHK',
    totalNoOfFlat: '200',
    
    // Facilities
    tiles: 'Premium Italian Marble',
    bathroomFittings: 'Grohe Premium Series',
    modularKitchen: 'Hettich Modular Kitchen with Granite Counter',
    kitchenFittings: 'Bosch Appliances Included',
    doorAndWindow: 'UPVC Windows, Premium Wooden Doors',
    wallPutty: 'Asian Paints Premium Wall Putty',
    wallColor: 'Premium Emulsion Paint',
    coveredBalcony: '10 ft x 6 ft',
    fallCeiling: 'Gypsum Board with LED Lights',
    wardrobe: 'Built-in Wardrobe with Sliding Doors',
    furnished: 'Semi-furnished with Basic Amenities',
    gym: '24/7 Fitness Center with Modern Equipment',
    communityHall: '2000 sq.ft with Modern Amenities',
    swimmingPool: 'Olympic Size with Kids Pool',
    childrenPlayGround: 'Safe Play Area with Modern Equipment',
    terraceGarden: 'Landscaped Garden with Seating Area',
    lift: 'High-speed Elevators (2 per Block)',
    groundWater: '24/7 Water Supply',
    waterStorage: '1 Lakh Liters Capacity',
    guestParking: '100 Covered Parking Spaces',
    garbageDisposalSystem: 'Modern Waste Management System',
    rainWaterHarvesting: 'Complete Rain Water Harvesting System',
    securityAndFireFitting: '24/7 Security with CCTV',
    cctv: true,
    solarEnergySystem: true,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.projectName.trim()) newErrors.projectName = 'Project name is required';
    if (!formData.projectCode.trim()) newErrors.projectCode = 'Project code is required';
    if (!formData.reraId.trim()) newErrors.reraId = 'RERA ID is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.startingDate) newErrors.startingDate = 'Starting date is required';
    if (!formData.completionDate) newErrors.completionDate = 'Completion date is required';
    if (!formData.totalLandArea.trim()) newErrors.totalLandArea = 'Total land area is required';
    if (!formData.noOfBlocks) newErrors.noOfBlocks = 'Number of blocks is required';
    if (!formData.sizeOfFlat.trim()) newErrors.sizeOfFlat = 'Size of flat is required';
    if (!formData.totalNoOfFlat) newErrors.totalNoOfFlat = 'Total number of flats is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(formData);
      setIsEditMode(false);
    } catch (error) {
      console.error('Error saving form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    if (isEditMode) {
      setShowCancelConfirm(true);
    } else {
      setIsEditMode(true);
    }
  };

  const confirmCancel = () => {
    setShowCancelConfirm(false);
    setIsEditMode(false);
    // Reset form data to original values if needed
  };

  const InputField = ({ label, name, type = 'text', placeholder, required = false }) => (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        disabled={!isEditMode || isLoading}
        className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
          !isEditMode ? 'bg-gray-50 border-gray-200' : 'border-gray-300'
        } ${errors[name] ? 'border-red-500' : ''}`}
        placeholder={placeholder}
      />
      {errors[name] && (
        <p className="mt-1 text-sm text-red-500">{errors[name]}</p>
      )}
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Project Details</h2>
          <p className="text-sm text-gray-500 mt-1">
            {isEditMode ? 'Edit project information' : 'View project information'}
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={handleCancel}
            className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
              isEditMode 
                ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                : 'bg-blue-800 hover:bg-blue-900 text-white'
            }`}
          >
            {isEditMode ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Cancel
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Edit
              </>
            )}
          </button>
        </div>
      </div>

      {/* Cancel Confirmation Modal */}
      {showCancelConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h3 className="text-lg font-semibold mb-4">Cancel Changes?</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to cancel your changes? All unsaved changes will be lost.</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowCancelConfirm(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Continue Editing
              </button>
              <button
                onClick={confirmCancel}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Cancel Changes
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Project Information */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold text-gray-800">Basic Information</h3>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Project Name"
              name="projectName"
              placeholder="Enter project name"
              required
            />
            <InputField
              label="Project Code"
              name="projectCode"
              placeholder="Enter project code"
              required
            />
            <InputField
              label="RERA ID"
              name="reraId"
              placeholder="Enter RERA ID"
              required
            />
            <InputField
              label="Location"
              name="location"
              placeholder="Enter project location"
              required
            />
            <InputField
              label="Starting Date"
              name="startingDate"
              type="date"
              required
            />
            <InputField
              label="Completion Date"
              name="completionDate"
              type="date"
              required
            />
            <InputField
              label="Total Land Area"
              name="totalLandArea"
              placeholder="Enter total land area"
              required
            />
            <InputField
              label="Number of Blocks"
              name="noOfBlocks"
              type="number"
              placeholder="Enter number of blocks"
              required
            />
            <InputField
              label="Size of Flat"
              name="sizeOfFlat"
              placeholder="Enter size of flat"
              required
            />
            <InputField
              label="Total Number of Flats"
              name="totalNoOfFlat"
              type="number"
              placeholder="Enter total number of flats"
              required
            />
          </div>
        </div>

        {/* Facilities Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold text-gray-800">Facilities</h3>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Tiles"
              name="tiles"
              placeholder="Enter tiles details"
            />
            <InputField
              label="Bathroom Fittings"
              name="bathroomFittings"
              placeholder="Enter bathroom fittings details"
            />
            <InputField
              label="Modular Kitchen"
              name="modularKitchen"
              placeholder="Enter modular kitchen details"
            />
            <InputField
              label="Kitchen Fittings"
              name="kitchenFittings"
              placeholder="Enter kitchen fittings details"
            />
            <InputField
              label="Door & Window"
              name="doorAndWindow"
              placeholder="Enter door and window details"
            />
            <InputField
              label="Wall Putty"
              name="wallPutty"
              placeholder="Enter wall putty details"
            />
            <InputField
              label="Wall Color"
              name="wallColor"
              placeholder="Enter wall color details"
            />
            <InputField
              label="Covered Balcony"
              name="coveredBalcony"
              placeholder="Enter covered balcony details"
            />
            <InputField
              label="Fall Ceiling"
              name="fallCeiling"
              placeholder="Enter fall ceiling details"
            />
            <InputField
              label="Wardrobe"
              name="wardrobe"
              placeholder="Enter wardrobe details"
            />
            <InputField
              label="Furnished"
              name="furnished"
              placeholder="Enter furnished details"
            />
            <InputField
              label="GYM"
              name="gym"
              placeholder="Enter gym details"
            />
            <InputField
              label="Community Hall"
              name="communityHall"
              placeholder="Enter community hall details"
            />
            <InputField
              label="Swimming Pool"
              name="swimmingPool"
              placeholder="Enter swimming pool details"
            />
            <InputField
              label="Children Play Ground"
              name="childrenPlayGround"
              placeholder="Enter children play ground details"
            />
            <InputField
              label="Terrace Garden"
              name="terraceGarden"
              placeholder="Enter terrace garden details"
            />
            <InputField
              label="Lift"
              name="lift"
              placeholder="Enter lift details"
            />
            <InputField
              label="Ground Water"
              name="groundWater"
              placeholder="Enter ground water details"
            />
            <InputField
              label="Water Storage"
              name="waterStorage"
              placeholder="Enter water storage details"
            />
            <InputField
              label="Guest Parking"
              name="guestParking"
              placeholder="Enter guest parking details"
            />
            <InputField
              label="Garbage Disposal System"
              name="garbageDisposalSystem"
              placeholder="Enter garbage disposal system details"
            />
            <InputField
              label="Rain Water Harvesting"
              name="rainWaterHarvesting"
              placeholder="Enter rain water harvesting details"
            />
            <InputField
              label="Security and Fire Fitting"
              name="securityAndFireFitting"
              placeholder="Enter security and fire fitting details"
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cctv"
                checked={formData.cctv}
                onChange={handleChange}
                disabled={!isEditMode || isLoading}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">CCTV</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="solarEnergySystem"
                checked={formData.solarEnergySystem}
                onChange={handleChange}
                disabled={!isEditMode || isLoading}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">Solar Energy System</label>
            </div>
          </div>
        </div>

        {isEditMode && (
          <div className="mt-8 flex justify-end gap-4">
            <button
              type="button"
              onClick={() => setShowCancelConfirm(true)}
              className="px-6 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-all duration-300"
              disabled={isLoading}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className={`px-6 py-3 bg-blue-800 text-white rounded-lg transition-all duration-300 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center gap-2 ${
                isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105 hover:shadow-lg'
              }`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default PropEditDetails;
