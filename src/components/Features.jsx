import React, { useState } from 'react'
import Featurecard from './Featurecard'
import chatbot from '../img/features/propgpt.png'
import hlocker from '../img/features/housinglocker.png'

const Features = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const totalCards = 2;

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % totalCards);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + totalCards) % totalCards);
  };

  return (
    <div className="w-full">
      <div className='flex flex-col items-center w-full py-6 bg-white backdrop-blur-md'>
        <div className='w-full px-4'>
          <h1 className='text-black text-2xl md:text-4xl font-bold mb-4 md:mb-8'>Special Features</h1>
        </div>
        {/* Mobile view with buttons */}
        <div className='md:hidden w-full relative'>
          <div className='overflow-x-hidden'>
            <div 
              className='flex transition-transform duration-300 ease-in-out'
              style={{ transform: `translateX(-${currentCard * 100}%)` }}
            >
              <div className='w-full flex-shrink-0 px-4'>
                <Featurecard 
                  fname={"Talk with PropGPT"} 
                  fdetails={"24X7 AI Powered Real Estate Advisor"} 
                  flogo={chatbot}
                  link="/propgpt"
                  isMobile={true}
                />
              </div>
              <div className='w-full flex-shrink-0 px-4'>
                <Featurecard 
                  fname={"Housing Locker"} 
                  fdetails={"Create and Store all Your Property Documents"} 
                  flogo={hlocker}
                  link="/locker"
                  isMobile={true}
                />
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevCard}
            className='absolute left-0 top-1/2 -translate-y-1/2 bg-transparent  text-white p-2 rounded-r-lg shadow-lg'
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={nextCard}
            className='absolute right-0 top-1/2 -translate-y-1/2 bg-transparent  text-white p-2 rounded-l-lg shadow-lg'
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Card Tracker */}
          <div className='flex justify-center gap-2 mt-4'>
            {[...Array(totalCards)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentCard(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentCard === index ? 'bg-blue-600 w-4' : 'bg-blue-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid view */}
        <div className='hidden md:grid md:grid-cols-2 gap-6 w-full px-6'>
          <Featurecard 
            fname={"Talk with PropGPT"} 
            fdetails={"24X7 AI Powered Real Estate Advisor"} 
            flogo={chatbot}
            link="/propgpt"
          />
          <Featurecard 
            fname={"Housing Locker"} 
            fdetails={"Create and Store all Your Property Documents"} 
            flogo={hlocker}
            link="/locker"
          />
        </div>
      </div>
    </div>
  )
}

export default Features
