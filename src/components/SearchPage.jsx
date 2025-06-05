import React, { useState } from 'react'
import Searchbar from './Searchbar'
import Propertycard from './modal/Propertycard'
import Projectdetails from './modal/Projectdetails'
import FLatprice from './modal/FLatprice'
import Borcher from './modal/Borcher'
import Realotrs from './modal/Realotrs'
import PriceAvailability from './modal/PriceAvailability'
import RealtorSchedule from './modal/RealtorSchedule'
import InvestSQFT from './modal/InvestSQFT'
// Brochures
import dayasagr from "../brochures/p1.pdf"
import divine from "../brochures/p2.pdf"
import marigold from "../brochures/p3.pdf"
// Certificates
// Dayasagar
import ds_rera from "../certificate/dayasagar/ds_rera.pdf"
import ds_noc from "../certificate/dayasagar/ds_noc.pdf"
import ds_pp from "../certificate/dayasagar/ds_pp.pdf"
// Divine Tower
import dt_rera from "../certificate/Divin_tower/dt_rera.pdf"
import dt_noc from "../certificate/Divin_tower/dt_noc.pdf"
import dt_pp from "../certificate/Divin_tower/dt_pp.pdf"

const SearchPage = () => {
  const [showProjectdetails, setshowProjectdetails] = useState(false);
  const [showInvestSQFT, setshowInvestSQFT] = useState(false);
  const [showFLatprice, setshowFLatprice] = useState(false);
  const [showBorcher, setshowBorcher] = useState(false);
  const [showRealotrs, setshowRealotrs] = useState(false);
  const [showPriceAvailability, setshowPriceAvailability] = useState(false);
  const [showRealotrSchedule, setshowRealotrSchedule] = useState(false);
  const [selectedFlat, setSelectedFlat] = useState('');
  const [selectedProject, setSelectedProject] = useState({
    rera: null,
    gmc_noc: null,
    gmda_pp: null,
    buildername: null
  });

  const toggleProjectdetails = (projectData) => {
    if (projectData) {
      setSelectedProject(projectData);
    }
    setshowProjectdetails(prev => !prev);
  };

  const toggleInvestSQFT = () => {
    setshowInvestSQFT(prev => !prev);
  };

  const toggleFLatprice = (flatNumber) => {
    setSelectedFlat(flatNumber);
    setshowFLatprice(prev => !prev);
  };

  const toggleBorcher = () => {
    setshowBorcher(prev => !prev);
  };

  const toggleRealotrs = () => {
    setshowRealotrs(prev => !prev);
  };

  const togglePriceAvailability = () => {
    setshowPriceAvailability(prev => !prev);
  };

  const toggleRealotrSchedule = () => {
    setshowRealotrSchedule(prev => !prev);
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Search Section */}
      <div className='bg-black/100 py-10'>
        <div className='container mx-auto px-4'>
          <h1 className='text-3xl font-bold text-white mb-6 text-center'>Find Your Dream Home</h1>
          <Searchbar />
        </div>
      </div>

      {/* Results Section */}
      <div className='container mx-auto px-4 py-8'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-bold text-gray-800'>Search Results</h2>
          <div className='flex gap-4'>
            <select className='p-2 border border-gray-300 rounded-lg bg-white'>
              <option>Sort by: Latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Area: Low to High</option>
              <option>Area: High to Low</option>
            </select>
            <select className='p-2 border border-gray-300 rounded-lg bg-white'>
              <option>Filter by: All</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
              <option>4 BHK</option>
              <option>Villa</option>
            </select>
          </div>
        </div>

        {/* Results Grid */}
        <div className='flex flex-col gap-6 max-w-5xl mx-auto'>
          <Propertycard 
            toggleProjectdetails={toggleProjectdetails}
            toggleInvestSQFT={toggleInvestSQFT}
            togglePriceAvailability={togglePriceAvailability}
            toggleRealotrs={toggleRealotrs}
            toggleBorcher={toggleBorcher}
            toggleFLatprice={toggleFLatprice}
            toggleRealotrSchedule={toggleRealotrSchedule}
            pname="Divyasagar"
            plocation="GARCHUK, Guwahati, Assam 781035"
            plocationlink="https://maps.app.goo.gl/TySDARxCTdozPV4c8"
            pbrochure={dayasagr}
            buildername="Divyasagar Developers"
            rera={ds_rera}
            gmc_noc={ds_noc}
            gmda_pp={ds_pp}
            pimage="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
          <Propertycard 
            toggleProjectdetails={toggleProjectdetails}
            toggleInvestSQFT={toggleInvestSQFT}
            togglePriceAvailability={togglePriceAvailability}
            toggleRealotrs={toggleRealotrs}
            toggleBorcher={toggleBorcher}
            toggleFLatprice={toggleFLatprice}
            toggleRealotrSchedule={toggleRealotrSchedule}
            pname="Devine Tower"
            plocation="Radhanagr, Sixmile VIP Road, Guwahati-22"
            plocationlink="https://maps.app.goo.gl/646iostATcYnfQ9S6"
            pbrochure={divine}
            buildername="Ganapati Builders"
            rera={dt_rera}
            gmc_noc={dt_noc}
            gmda_pp={dt_pp}
            pimage="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          />
          <Propertycard 
            toggleProjectdetails={toggleProjectdetails}
            toggleInvestSQFT={toggleInvestSQFT}
            togglePriceAvailability={togglePriceAvailability}
            toggleRealotrs={toggleRealotrs}
            toggleBorcher={toggleBorcher}
            toggleFLatprice={toggleFLatprice}
            toggleRealotrSchedule={toggleRealotrSchedule}
            pname="Merigold"
            plocation="Jalukbari, Guwahati, Assam 781011"
            plocationlink="https://maps.app.goo.gl/D1H2Mj35QhUaWqjt7"
            pbrochure={marigold}
            buildername="Native Tree"
            rera="RERA789"
            gmc_noc="GMC123"
            gmda_pp="GMDA456"
            pimage="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
        </div>
      </div>

      {/* Modals */}
      {showProjectdetails && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center bg-black/90 items-center">
          <Projectdetails 
            toggleProjectdetails={toggleProjectdetails} 
            rera={selectedProject.rera}
            gmc_noc={selectedProject.gmc_noc}
            gmda_pp={selectedProject.gmda_pp}
            buildername={selectedProject.buildername}
          />
        </div>
      )}
      {showInvestSQFT && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center bg-black/90 items-center">
          <InvestSQFT toggleInvestSQFT={toggleInvestSQFT} />
        </div>
      )}
      {showFLatprice && (
        <div className="fixed top-0 left-0 w-full h-full z-51 flex justify-center bg-black/90 items-center">
          <FLatprice toggleFLatprice={toggleFLatprice} flatNumber={selectedFlat} />
        </div>
      )}
      {showBorcher && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center bg-black/90 items-center">
          <Borcher toggleBorcher={toggleBorcher} />
        </div>
      )}
      {showRealotrs && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center bg-black/90 items-center">
          <Realotrs toggleRealotrs={toggleRealotrs} toggleRealotrSchedule={toggleRealotrSchedule} />
        </div>
      )}
      {showPriceAvailability && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center bg-black/90 items-center">
          <PriceAvailability togglePriceAvailability={togglePriceAvailability} toggleFLatprice={toggleFLatprice} />
        </div>
      )}
      {showRealotrSchedule && (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center bg-black/90 items-center">
          <RealtorSchedule toggleRealotrSchedule={toggleRealotrSchedule} />
        </div>
      )}
    </div>
  )
}

export default SearchPage
