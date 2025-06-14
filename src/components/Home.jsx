import React, { useState, useEffect } from 'react'
import Tagline from './Tagline'
import Searchbar from './Searchbar'
import Topoffers from './Topoffers'
import Features from './Features'
import Partnerbank from './Partnerbank'
import Calculators from './Calculators'
import Footer from './Footer'
import Adsslide from './Adsslide'

// Import all background images
import bg1 from '../img/home_bg/1.jpg'
import bg2 from '../img/home_bg/2.jpg'
import bg3 from '../img/home_bg/3.jpg'
import bg4 from '../img/home_bg/4.jpg'
import bg5 from '../img/home_bg/5.jpg'
import bg6 from '../img/home_bg/6.jpg'
import bg7 from '../img/home_bg/7.jpg'
import bg8 from '../img/home_bg/8.jpg'
import bg9 from '../img/home_bg/9.jpg'
import bg10 from '../img/home_bg/10.jpg'
import bg11 from '../img/home_bg/11.jpg'

const Home = () => {
  const [bgImage, setBgImage] = useState(bg1)

  useEffect(() => {
    const backgrounds = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11]
    const randomIndex = Math.floor(Math.random() * backgrounds.length)
    setBgImage(backgrounds[randomIndex])
  }, [])

  return (
    <div
        style={{
            width: "100%",
            minHeight: "80vh",
            backgroundImage: `URL(${bgImage})`,
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

export default Home
