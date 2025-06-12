import React from 'react'
import { Link } from 'react-router-dom'

const PropEditNav = () => {
  return (
    <nav className="bg-white shadow-md p-4 sticky top-20 z-40">
      <ul className="flex gap-8 list-none p-0 m-0">
        <li>
          <Link 
            to="/edit/project-details" 
            className="text-gray-700 font-medium px-4 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
          >
            Project Details
          </Link>
        </li>
        <li>
          <Link 
            to="/edit/photos-videos" 
            className="text-gray-700 font-medium px-4 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
          >
            Photos and Videos
          </Link>
        </li>
        <li>
          <Link 
            to="/edit/flats-details" 
            className="text-gray-700 font-medium px-4 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition-all duration-300"
          >
            Flats Details
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default PropEditNav
