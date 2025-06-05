import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.jpg'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='h-20 w-full bg-blue-300 flex items-center justify-between px-5 sticky top-0 z-50'>
        <div className='flex items-center gap-2'>
            <img src={logo} alt="logo" className='w-13 h-13 rounded-full' />
            <h2 className='text-2xl font-bold'>HappyHousing.ai</h2>
        </div>
        
        {/* Hamburger Menu Button - Only visible on mobile */}
        <button 
          className='md:hidden p-2'
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className='w-6 h-0.5 bg-blue-900 mb-1.5'></div>
          <div className='w-6 h-0.5 bg-blue-900 mb-1.5'></div>
          <div className='w-6 h-0.5 bg-blue-900'></div>
        </button>

        {/* Desktop Navigation */}
        <div className='hidden md:block'>
            <ul className='flex items-center gap-4'>
              <li className='bg-blue-900 text-white px-8 py-2 rounded-sm'><Link to="/">Home</Link></li>
              <li className='bg-blue-900 text-white px-8 py-2 rounded-sm'><Link to="/about">About us</Link></li>
              <li className='bg-blue-900 text-white px-8 py-2 rounded-sm'><Link to="/contact">Want to sell?</Link></li>
            </ul>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-20 left-0 w-full bg-blue-300 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <ul className='flex flex-col items-center py-4'>
              <li className='w-full text-center bg-blue-900 text-white py-3'><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
              <li className='w-full text-center bg-blue-900 text-white py-3'><Link to="/about" onClick={toggleMobileMenu}>About us</Link></li>
              <li className='w-full text-center bg-blue-900 text-white py-3'><Link to="/contact" onClick={toggleMobileMenu}>Want to sell?</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
