import React, { useState } from 'react'

const PropEditPhoto = () => {
  const [photos, setPhotos] = useState({
    mainPhotos: [
      {
        id: 1,
        name: 'Main Photo 1',
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      },
      {
        id: 2,
        name: 'Main Photo 2',
        url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80'
      }
    ],
    windowViewPhotos: [
      {
        id: 3,
        name: 'Window View 1',
        url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      }
    ],
    floorPlans: [
      {
        id: 4,
        name: 'Floor Plan 1',
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      }
    ],
    projectPhotos: [
      {
        id: 5,
        name: 'Project Photo 1',
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80'
      },
      {
        id: 6,
        name: 'Project Photo 2',
        url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
      }
    ],
    videos: []
  });

  const [editingCategory, setEditingCategory] = useState(null);

  const handlePhotoUpload = (category, e) => {
    const files = Array.from(e.target.files);
    const newPhotos = files.map(file => ({
      id: Date.now() + Math.random(),
      name: file.name,
      url: URL.createObjectURL(file)
    }));
    
    setPhotos(prev => ({
      ...prev,
      [category]: [...prev[category], ...newPhotos]
    }));
  };

  const removePhoto = (category, photoId) => {
    setPhotos(prev => ({
      ...prev,
      [category]: prev[category].filter(photo => photo.id !== photoId)
    }));
  };

  const toggleEditMode = (category) => {
    setEditingCategory(editingCategory === category ? null : category);
  };

  const renderPhotoGrid = (category, title) => (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-medium">{title}</h3>
        <button
          onClick={() => toggleEditMode(category)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            editingCategory === category
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {editingCategory === category ? 'Done' : 'Edit'}
        </button>
      </div>

      {editingCategory === category && (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-4">
          <input
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            id={`${category}-upload`}
            onChange={(e) => handlePhotoUpload(category, e)}
          />
          <label
            htmlFor={`${category}-upload`}
            className="cursor-pointer text-blue-600 hover:text-blue-800"
          >
            Click to upload {title.toLowerCase()}
          </label>
        </div>
      )}
      
      {/* Photo Grid */}
      {photos[category].length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos[category].map(photo => (
            <div key={photo.id} className="relative group">
              <img
                src={photo.url}
                alt={photo.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              {editingCategory === category && (
                <button
                  onClick={() => removePhoto(category, photo.id)}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Photos and Videos</h2>
      <div className="space-y-6">
        {renderPhotoGrid('mainPhotos', 'Upload Photos')}
        {renderPhotoGrid('windowViewPhotos', 'Window View Photos')}
        {renderPhotoGrid('floorPlans', 'Floor Plans')}
        {renderPhotoGrid('projectPhotos', 'Project Photos')}
        
        {/* Videos Section */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-medium">Upload Videos</h3>
            <button
              onClick={() => toggleEditMode('videos')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                editingCategory === 'videos'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {editingCategory === 'videos' ? 'Done' : 'Edit'}
            </button>
          </div>

          {editingCategory === 'videos' && (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                multiple
                accept="video/*"
                className="hidden"
                id="video-upload"
                onChange={(e) => handlePhotoUpload('videos', e)}
              />
              <label
                htmlFor="video-upload"
                className="cursor-pointer text-blue-600 hover:text-blue-800"
              >
                Click to upload videos
              </label>
            </div>
          )}
          
          {/* Video Grid */}
          {photos.videos.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {photos.videos.map(video => (
                <div key={video.id} className="relative group">
                  <video
                    src={video.url}
                    className="w-full h-48 object-cover rounded-lg"
                    controls
                  />
                  {editingCategory === 'videos' && (
                    <button
                      onClick={() => removePhoto('videos', video.id)}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PropEditPhoto
