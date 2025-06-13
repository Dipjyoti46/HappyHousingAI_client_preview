import React, { useState } from 'react';

const PropEditStatus = ({ isEditMode, isLoading }) => {
  const [status, setStatus] = useState('Under Construction');
  const [photos, setPhotos] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});

  const statusOptions = [
    'Planning',
    'Under Construction',
    'Ready to Move',
    'Completed',
    'On Hold'
  ];

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      // Simulate upload progress
      setUploadProgress(prev => ({ ...prev, [file.name]: 0 }));
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          const newProgress = prev[file.name] + 10;
          if (newProgress >= 100) {
            clearInterval(interval);
            // Add photo to the list when upload is complete
            setPhotos(prev => [...prev, {
              id: Date.now(),
              name: file.name,
              url: URL.createObjectURL(file)
            }]);
          }
          return { ...prev, [file.name]: newProgress };
        });
      }, 200);
    });
  };

  const removePhoto = (photoId) => {
    setPhotos(prev => prev.filter(photo => photo.id !== photoId));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-6">
        {/* Project Status Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Project Status</h3>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Status
              </label>
              <select
                value={status}
                onChange={handleStatusChange}
                disabled={!isEditMode || isLoading}
                className={`mt-1 block w-full rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 ${
                  !isEditMode ? 'bg-gray-50 border-gray-200' : 'border-gray-300'
                }`}
              >
                {statusOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Project Photos Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Project Photos</h3>
            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          {isEditMode && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload New Photos
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                    >
                      <span>Upload photos</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        multiple
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        disabled={isLoading}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map(photo => (
              <div key={photo.id} className="relative group">
                <img
                  src={photo.url}
                  alt={photo.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                {isEditMode && (
                  <button
                    onClick={() => removePhoto(photo.id)}
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    disabled={isLoading}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Upload Progress */}
          {Object.entries(uploadProgress).map(([fileName, progress]) => (
            <div key={fileName} className="mt-2">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>{fileName}</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropEditStatus; 