import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import PropEditNav from './components/PropEditNav'
import PropEditDetails from './components/PropEditDetails'
import PropEditPhoto from './components/PropEditPhoto'
import PropEditFlat from './components/PropEditFlat'
import PropEditFlapPrice from './components/PropEditFlapPrice'

const PropEditPage = () => {
  const [isFlatPriceModalOpen, setIsFlatPriceModalOpen] = useState(false);
  const [selectedFlat, setSelectedFlat] = useState(null);

  const handleFlatClick = (flatId) => {
    setSelectedFlat(flatId);
    setIsFlatPriceModalOpen(true);
  };

  const toggleFlatPriceModal = () => {
    setIsFlatPriceModalOpen(!isFlatPriceModalOpen);
    if (isFlatPriceModalOpen) {
      setSelectedFlat(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PropEditNav />
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="project-details" element={<PropEditDetails />} />
          <Route path="photos-videos" element={<PropEditPhoto />} />
          <Route 
            path="flats-details" 
            element={
              <>
                <PropEditFlat onFlatClick={handleFlatClick} />
                {isFlatPriceModalOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <PropEditFlapPrice 
                      toggleFlatPrice={toggleFlatPriceModal}
                      flatNumber={selectedFlat}
                    />
                  </div>
                )}
              </>
            } 
          />
          <Route index element={<PropEditDetails />} />
        </Routes>
      </div>
    </div>
  )
}

export default PropEditPage
