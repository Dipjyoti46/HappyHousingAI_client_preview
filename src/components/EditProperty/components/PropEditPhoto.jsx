import React from 'react'

const PropEditPhoto = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Photos and Videos</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-3">Upload Photos</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              id="photo-upload"
            />
            <label
              htmlFor="photo-upload"
              className="cursor-pointer text-blue-600 hover:text-blue-800"
            >
              Click to upload photos
            </label>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">Window View Photos</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              id="window-view-upload"
            />
            <label
              htmlFor="window-view-upload"
              className="cursor-pointer text-blue-600 hover:text-blue-800"
            >
              Click to upload window view photos
            </label>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">Floor Plans</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              id="floor-plan-upload"
            />
            <label
              htmlFor="floor-plan-upload"
              className="cursor-pointer text-blue-600 hover:text-blue-800"
            >
              Click to upload floor plans
            </label>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">Project Photos</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              id="project-photo-upload"
            />
            <label
              htmlFor="project-photo-upload"
              className="cursor-pointer text-blue-600 hover:text-blue-800"
            >
              Click to upload project photos
            </label>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">Upload Videos</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              multiple
              accept="video/*"
              className="hidden"
              id="video-upload"
            />
            <label
              htmlFor="video-upload"
              className="cursor-pointer text-blue-600 hover:text-blue-800"
            >
              Click to upload videos
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropEditPhoto
