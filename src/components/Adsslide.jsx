import { useState, useEffect } from 'react'
import ads_1 from '../img/ads/ad_1.jpg'
import ads_2 from '../img/ads/ad_2.jpg'
import ads_3 from '../img/ads/ads_3.jpg'
import ads_4 from '../img/ads/ads_4.jpg'
import ads_5 from '../img/ads/ads_5.jpg'
import ads_6 from '../img/ads/ads_6.jpg'

const Adsslide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [ads_1, ads_2, ads_3, ads_4, ads_5, ads_6];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full overflow-hidden mt-0 h-auto relative bg-black/10 backdrop-blur-md'>
      <div className="absolute inset-0 bg-white-to-br from-whitw via-black to-gray-900 opacity-90"></div>
      <h1 className='text-white text-2xl md:text-4xl font-bold pl-5 mt-5 mb-5 relative z-20'>Get Best Deals</h1>
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full relative z-10"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className="min-w-full h-full"
          >
            <img 
              src={slide} 
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
      
      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 text-white p-2 rounded-full hover:bg-white/20 transition-colors z-20 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 text-white p-2 rounded-full hover:bg-white/20 transition-colors z-20 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Slide Tracker */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Adsslide



