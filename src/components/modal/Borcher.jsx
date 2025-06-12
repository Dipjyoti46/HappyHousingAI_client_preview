import React from 'react'
import Borchercard from './cards/Borchercard'
import img1 from '../../img/property/dayasagr/rangoni/img1.jpg'
import img4 from '../../img/property/dayasagr/rangoni/img4.jpg'
import img7 from '../../img/property/dayasagr/rangoni/img7.jpg'
import img10 from '../../img/property/dayasagr/rangoni/img10.jpg'
import img2 from '../../img/property/dayasagr/metro_height/img2.jpg'
import img3 from '../../img/property/dayasagr/metro_height/img3.jpg'
import img6 from '../../img/property/dayasagr/metro_height/img6.jpg'
import img5 from '../../img/property/dayasagr/bkb/img5.jpg'
import img8 from '../../img/property/dayasagr/bkb/img8.jpg'

const Borcher = ({toggleBorcher}) => {
  return (
        <div className='w-3/4 h-[80vh] bg-white p-0 rounded-xl shadow-lg relative overflow-hidden'>
          {/* Header */}
          <div className='w-full h-20 bg-blue-800/90 rounded-tl-xl rounded-tr-xl p-5 relative'>
            <button
              onClick={toggleBorcher}
              className='absolute w-10 h-10 rounded-xl top-2 right-2 bg-white text-black font-bold text-xl border border-green-700 hover:bg-green-700 hover:text-white transition-all duration-300'
            >
              X
            </button>
            <h1 className='text-2xl font-bold text-white'>Property Brochure</h1>
          </div>
    
          {/* Vertically scrollable content */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-[calc(100%-5rem)] overflow-y-auto overflow-x-hidden p-5 text-black'>
            <Borchercard img={img1} viewfrom={"Parking1"}/>
            <Borchercard img={img2} viewfrom={"parking2"}/>
            <Borchercard img={img3} viewfrom={"Gate view 1"}/>
            <Borchercard img={img4} viewfrom={"Gate view 2"}/>
            <Borchercard img={img5} viewfrom={"lift view 1"}/>
            <Borchercard img={img6} viewfrom={"lift view 2"}/>
            <Borchercard img={img7} viewfrom={"Building view from ground"}/>
            <Borchercard img={img8} viewfrom={"Building view from ground"}/>
            <Borchercard img={img9} viewfrom={"Parking "}/>
            <Borchercard img={img10} viewfrom={"Ground view"}/>
          </div>
        </div>
  )
}

export default Borcher
