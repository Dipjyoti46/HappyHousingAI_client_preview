import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.jpg'
import { FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='bg-gradient-to-r from-blue-500 to-purple-600 to-white  h-20 w-full flex items-center justify-between px-5 sticky top-0 z-50'>
        <div className='flex items-center gap-2'>
            <img src={logo} alt="logo" className='w-13 h-13 rounded-full' />
            <h2 className='text-2xl font-bold'>HappyHousing.ai</h2>
        </div>
        
        {/* Hamburger Menu Button - Only visible on mobile */}
        <div className='md:hidden flex items-center gap-4'>
          <Link to="/profile" className='bg-[#03dac5] text-black hover:bg-blue-600 hover:text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95'>
            <FaUserCircle className="text-2xl" />
          </Link>
          <button 
            className='p-2'
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className='w-6 h-0.5 bg-blue-900 mb-1.5'></div>
            <div className='w-6 h-0.5 bg-blue-900 mb-1.5'></div>
            <div className='w-6 h-0.5 bg-blue-900'></div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:block'>
            <ul className='flex items-center gap-4'>
              <li className='bg-[#03dac5] text-black hover:bg-blue-600 hover:text-white px-8 py-2 rounded shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer'><Link to="/">Home</Link></li>
              <li className='bg-[#03dac5] text-black hover:bg-blue-600 hover:text-white px-8 py-2 rounded shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer'><Link to="/about">About us</Link></li>
              <li className='bg-[#03dac5] text-black hover:bg-blue-600 hover:text-white px-8 py-2 rounded shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer'><Link to="/contact">Want to sell?</Link></li>
              <li className='bg-[#03dac5] text-black hover:bg-blue-600 hover:text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 active:scale-95 cursor-pointer'><Link to="/profile"><FaUserCircle className="text-2xl" /></Link></li>
            </ul>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-20 left-0 w-full bg-blue-300 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <ul className='flex flex-col items-center py-4'>
              <li className='w-full text-center bg-[#03dac5] text-black py-3 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:scale-[1.02] active:scale-[0.98] cursor-pointer'><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
              <li className='w-full text-center bg-[#03dac5] text-black py-3 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:scale-[1.02] active:scale-[0.98] cursor-pointer'><Link to="/about" onClick={toggleMobileMenu}>About us</Link></li>
              <li className='w-full text-center bg-[#03dac5] text-black py-3 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:scale-[1.02] active:scale-[0.98] cursor-pointer'><Link to="/contact" onClick={toggleMobileMenu}>Want to sell?</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
