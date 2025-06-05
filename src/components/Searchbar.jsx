import React from 'react'
import { useNavigate } from 'react-router-dom'
import map from '../img/locate.svg'
import search from '../img/search.svg'

const Searchbar = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/search');
  };

  return (
    <div className='flex items-center justify-center w-full h-full p-2 md:p-4'>
        <div className='flex items-center justify-center w-full md:w-300 bg-transparent gap-1.5 md:gap-2'>
            <select 
              name="" 
              id="" 
              className='w-24 md:w-50 p-1.5 md:p-2 px-2 md:px-3 border-2 border-blue-300 bg-blue-900 text-white text-sm md:text-base rounded-md focus:outline-none focus:border-blue-400'
            >
                <option className='text-black bg-blue-200 border-2 border-white border-offset-2' value="1">Guwhati</option>
                <option className='text-black bg-blue-200 border-2 border-white border-offset-2' value="2">North Guwahati</option>
                <option className='text-black bg-blue-200 border-2 border-white border-offset-2' value="3">Jorhat</option>
                <option className='text-black bg-blue-200 border-2 border-white border-offset-2' value="4">Sivsagr</option>
                <option className='text-black bg-blue-200 border-2 border-white border-offset-2' value="5">Kokrajhar</option>
            </select>
            <input 
              type="text" 
              placeholder="Search.." 
              className='w-36 md:w-150 p-1.5 md:p-2 border-2 border-gray-300 bg-white text-sm md:text-base rounded-md focus:outline-none focus:border-blue-400' 
            />
            <button className='h-full flex items-center gap-1.5 md:gap-2 bg-blue-900 text-white p-2 md:px-3 md:py-2 text-sm md:text-base rounded-md hover:bg-blue-800 transition-colors duration-300 active:bg-blue-950'>
                <span className='hidden md:inline'>Near me</span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  className="w-5 h-5 md:w-5 md:h-5"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M302.8 312C334.9 271.9 408 174.6 408 120C408 53.7 354.3 0 288 0S168 53.7 168 120c0 54.6 73.1 151.9 105.2 192c7.7 9.6 22 9.6 29.6 0zM416 503l144.9-58c9.1-3.6 15.1-12.5 15.1-22.3L576 152c0-17-17.1-28.6-32.9-22.3l-116 46.4c-.5 1.2-1 2.5-1.5 3.7c-2.9 6.8-6.1 13.7-9.6 20.6L416 503zM15.1 187.3C6 191 0 199.8 0 209.6L0 480.4c0 17 17.1 28.6 32.9 22.3L160 451.8l0-251.4c-3.5-6.9-6.7-13.8-9.6-20.6c-5.6-13.2-10.4-27.4-12.8-41.5l-122.6 49zM384 255c-20.5 31.3-42.3 59.6-56.2 77c-20.5 25.6-59.1 25.6-79.6 0c-13.9-17.4-35.7-45.7-56.2-77l0 194.4 192 54.9L384 255z" />
                </svg>
            </button>
            <button 
              onClick={handleSearch}
              className='h-full flex items-center gap-1.5 md:gap-2 bg-blue-900 text-white p-2 md:px-4 md:py-2 hover:bg-blue-800 transition-colors duration-300 text-sm md:text-base rounded-md active:bg-blue-950'
            >
              <span className='hidden md:inline'>Search</span>
              <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-5 md:h-5" fill="currentColor" stroke="currentColor" strokeWidth="0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
        </div>
    </div>    
  )
}

export default Searchbar
