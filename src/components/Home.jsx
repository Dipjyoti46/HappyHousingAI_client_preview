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
import { Link } from 'react-router-dom'

const Home = () => {
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
        className='flex flex-col items-center'
    >
        <div className='pt-20'>
            <Tagline/>
        </div>
        <div className='mt-10'>
            <Searchbar/>
        </div>
        <div className='flex flex-col items-center justify-center w-full'>
            <div className='text-center my-12 px-4'>
                <h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                    Find Your Dream Home with AI
                </h1>
                <p className='text-xl text-white mb-8 max-w-2xl mx-auto'>
                    Discover the perfect property with our AI-powered search and personalized recommendations
                </p>
                <Link 
                    to="/propgpt" 
                    className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300'
                >
                    Try PropGPT
                </Link>
            </div>
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
