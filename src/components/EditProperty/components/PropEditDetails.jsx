import React, { useState } from 'react'

const PropEditDetails = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectCode: '',
    reraId: '',
    location: '',
    startingDate: '',
    completionDate: '',
    totalLandArea: '',
    noOfBlocks: '',
    sizeOfFlat: '',
    totalNoOfFlat: '',
    // Facilities
    tiles: '',
    bathroomFittings: '',
    modularKitchen: '',
    kitchenFittings: '',
    doorAndWindow: '',
    wallPutty: '',
    wallColor: '',
    coveredBalcony: '',
    fallCeiling: '',
    wardrobe: '',
    furnished: '',
    gym: '',
    communityHall: '',
    swimmingPool: '',
    childrenPlayGround: '',
    terraceGarden: '',
    lift: '',
    groundWater: '',
    waterStorage: '',
    guestParking: '',
    garbageDisposalSystem: '',
    rainWaterHarvesting: '',
    securityAndFireFitting: '',
    cctv: false,
    solarEnergySystem: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-6">Project Details</h2>
        
        {/* Basic Project Information */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Project Name</label>
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter project name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Project Code</label>
              <input
                type="text"
                name="projectCode"
                value={formData.projectCode}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter project code"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">RERA ID</label>
              <input
                type="text"
                name="reraId"
                value={formData.reraId}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter RERA ID"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter project location"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Starting Date</label>
              <input
                type="date"
                name="startingDate"
                value={formData.startingDate}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Completion Date</label>
              <input
                type="date"
                name="completionDate"
                value={formData.completionDate}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Total Land Area</label>
              <input
                type="text"
                name="totalLandArea"
                value={formData.totalLandArea}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter total land area"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Number of Blocks</label>
              <input
                type="number"
                name="noOfBlocks"
                value={formData.noOfBlocks}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter number of blocks"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Size of Flat</label>
              <input
                type="text"
                name="sizeOfFlat"
                value={formData.sizeOfFlat}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter size of flat"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Total Number of Flats</label>
              <input
                type="number"
                name="totalNoOfFlat"
                value={formData.totalNoOfFlat}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter total number of flats"
              />
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-semibold text-gray-800">Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Tiles</label>
              <input
                type="text"
                name="tiles"
                value={formData.tiles}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter tiles details"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Bathroom Fittings</label>
              <input
                type="text"
                name="bathroomFittings"
                value={formData.bathroomFittings}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter bathroom fittings details"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Modular Kitchen</label>
              <input
                type="text"
                name="modularKitchen"
                value={formData.modularKitchen}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter modular kitchen details"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Kitchen Fittings</label>
              <input
                type="text"
                name="kitchenFittings"
                value={formData.kitchenFittings}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter kitchen fittings details"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Door & Window</label>
              <input
                type="text"
                name="doorAndWindow"
                value={formData.doorAndWindow}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter door and window details"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Wall Putty</label>
              <input
                type="text"
                name="wallPutty"
                value={formData.wallPutty}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter wall putty details"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Wall Color</label>
              <input
                type="text"
                name="wallColor"
                value={formData.wallColor}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter wall color details"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Covered Balcony</label>
              <input
                type="text"
                name="coveredBalcony"
                value={formData.coveredBalcony}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter covered balcony details"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Fall Ceiling</label>
              <input
                type="text"
                name="fallCeiling"
                value={formData.fallCeiling}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter fall ceiling details"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Wardrobe</label>
              <input
                type="text"
                name="wardrobe"
                value={formData.wardrobe}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter wardrobe details"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Furnished</label>
              <input
                type="text"
                name="furnished"
                value={formData.furnished}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter furnished details"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">GYM</label>
              <input
                type="text"
                name="gym"
                value={formData.gym}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter gym details"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Community Hall</label>
              <input
                type="text"
                name="communityHall"
                value={formData.communityHall}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter community hall details"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Swimming Pool</label>
              <input
                type="text"
                name="swimmingPool"
                value={formData.swimmingPool}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter swimming pool details"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Children Play Ground</label>
              <input
                type="text"
                name="childrenPlayGround"
                value={formData.childrenPlayGround}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter children play ground details"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Terrace Garden</label>
              <input
                type="text"
                name="terraceGarden"
                value={formData.terraceGarden}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter terrace garden details"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Lift</label>
              <input
                type="text"
                name="lift"
                value={formData.lift}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter lift details"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Ground Water</label>
              <input
                type="text"
                name="groundWater"
                value={formData.groundWater}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter ground water details"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Water Storage</label>
              <input
                type="text"
                name="waterStorage"
                value={formData.waterStorage}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter water storage details"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Guest Parking</label>
              <input
                type="text"
                name="guestParking"
                value={formData.guestParking}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter guest parking details"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Garbage Disposal System</label>
              <input
                type="text"
                name="garbageDisposalSystem"
                value={formData.garbageDisposalSystem}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter garbage disposal system details"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Rain Water Harvesting</label>
              <input
                type="text"
                name="rainWaterHarvesting"
                value={formData.rainWaterHarvesting}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter rain water harvesting details"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Security and Fire Fitting</label>
              <input
                type="text"
                name="securityAndFireFitting"
                value={formData.securityAndFireFitting}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter security and fire fitting details"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cctv"
                checked={formData.cctv}
                onChange={handleChange}
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
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">Solar Energy System</label>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}

export default PropEditDetails
