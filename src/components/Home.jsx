import React from 'react'
import Tagline from './Tagline'
import Searchbar from './Searchbar'
import bg_image from '../img/background.jpg'
import Topoffers from './Topoffers'
import Features from './Features'
import Partnerbank from './Partnerbank'
import Calculators from './Calculators'
import Footer from './Footer'
import Adsslide from './Adsslide'

const home = () => {
  return (
    <div
        style={{
            width: "100%",
            minHeight: "100vh",
            backgroundImage: `URL(${bg_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
        }}
        className='flex flex-col item-center'
    >
        <div className='pt-20'>
            <Tagline/>
        </div>
        <div className='mt-10'>
            <Searchbar/>
        </div>
        <div className='flex flex-col item-center justify-center'>
            <Features/>
            <Adsslide />
            <Topoffers/>
            <Partnerbank/>
            <Calculators/>
            <Footer/>
        </div>
    </div>
  )
}

export default home
