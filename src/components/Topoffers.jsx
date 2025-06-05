import React, { useState } from 'react'
import Offercard from './Offercard'
import Projectdetails from './modal/Projectdetails'
import FLatprice from './modal/FLatprice'
import Borcher from './modal/Borcher'
import Realotrs from './modal/Realotrs'
import PriceAvailability from './modal/PriceAvailability'
import RealtorSchedule from './modal/RealtorSchedule'
import InvestSQFT from './modal/InvestSQFT'
// Borchure
import dayasagr from "../brochures/p1.pdf"
import divine from "../brochures/p2.pdf"
import marigold from "../brochures/p3.pdf"
// certifficates
// dayasagar
import ds_rera from "../certificate/dayasagar/ds_rera.pdf"
import ds_noc from "../certificate/dayasagar/ds_noc.pdf"
import ds_pp from "../certificate/dayasagar/ds_pp.pdf"
//Divine Tower
import dt_rera from "../certificate/Divin_tower/dt_rera.pdf"
import dt_noc from "../certificate/Divin_tower/dt_noc.pdf"
import dt_pp from "../certificate/Divin_tower/dt_pp.pdf"

const Topoffers = () => {
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
  const [currentCard, setCurrentCard] = useState(0);
  const totalCards = 3;

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

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % totalCards);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + totalCards) % totalCards);
  };

  return (
    <div className='relative'>
      <div className='flex flex-col item-center w-full h-auto bg-black/10 backdrop-blur-md rounded-xl'>
        <div className='container mx-auto px-4 py-8'>
          <h1 className='text-3xl md:text-4xl font-bold text-white mb-8'>Top Offers Project</h1>
          
          {/* Mobile view with buttons */}
          <div className='md:hidden w-full relative'>
            <div className='overflow-x-hidden'>
              <div 
                className='flex transition-transform duration-300 ease-in-out'
                style={{ transform: `translateX(-${currentCard * 100}%)` }}
              >
                <div className='w-full flex-shrink-0'>
                  <Offercard 
                    toggleProjectdetails={toggleProjectdetails}
                    toggleInvestSQFT={toggleInvestSQFT}
                    togglePriceAvailability={togglePriceAvailability} 
                    toggleRealotrs={toggleRealotrs} 
                    toggleBorcher={toggleBorcher} 
                    toggleFLatprice={toggleFLatprice} 
                    toggleRealotrSchedule={toggleRealotrSchedule} 
                    pname={"Daya Sagar"} 
                    plocation={"GARCHUK, Guwahati, Assam 781035"} 
                    plocationlink={"https://maps.app.goo.gl/TySDARxCTdozPV4c8"} 
                    pbrochure={dayasagr}
                    buildername={"Daysagar"} 
                    rera={ds_rera} 
                    gmc_noc={ds_noc} 
                    gmda_pp={ds_pp}
                  />
                </div>
                <div className='w-full flex-shrink-0'>
                  <Offercard 
                    toggleProjectdetails={toggleProjectdetails}
                    toggleInvestSQFT={toggleInvestSQFT}
                    togglePriceAvailability={togglePriceAvailability} 
                    toggleRealotrs={toggleRealotrs} 
                    toggleBorcher={toggleBorcher} 
                    toggleFLatprice={toggleFLatprice} 
                    toggleRealotrSchedule={toggleRealotrSchedule} 
                    pname={"Divine Tower"} 
                    plocation={"Radhanagr,Sixmile VIP Road, Guwahati-22"} 
                    plocationlink={"https://maps.app.goo.gl/646iostATcYnfQ9S6"} 
                    pbrochure={divine} 
                    buildername={"Ganapati Builders"} 
                    rera={dt_rera} 
                    gmc_noc={dt_noc} 
                    gmda_pp={dt_pp}
                  />
                </div>
                <div className='w-full flex-shrink-0'>
                  <Offercard 
                    toggleProjectdetails={toggleProjectdetails}
                    toggleInvestSQFT={toggleInvestSQFT}
                    togglePriceAvailability={togglePriceAvailability} 
                    toggleRealotrs={toggleRealotrs} 
                    toggleBorcher={toggleBorcher} 
                    toggleFLatprice={toggleFLatprice} 
                    toggleRealotrSchedule={toggleRealotrSchedule} 
                    pname={"Marigold Parks"} 
                    plocation={"Jalukbari, Guwahati, Assam 781011"} 
                    plocationlink={"https://maps.app.goo.gl/D1H2Mj35QhUaWqjt7"} 
                    pbrochure={marigold} 
                    buildername={"Native Tree"}
                  />
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevCard}
              className='absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextCard}
              className='absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className='hidden md:grid md:grid-cols-3 gap-6'>
            <Offercard 
              toggleProjectdetails={toggleProjectdetails}
              toggleInvestSQFT={toggleInvestSQFT}
              togglePriceAvailability={togglePriceAvailability} 
              toggleRealotrs={toggleRealotrs} 
              toggleBorcher={toggleBorcher} 
              toggleFLatprice={toggleFLatprice} 
              toggleRealotrSchedule={toggleRealotrSchedule} 
              pname={"Daya Sagar"} 
              plocation={"GARCHUK, Guwahati, Assam 781035"} 
              plocationlink={"https://maps.app.goo.gl/TySDARxCTdozPV4c8"} 
              pbrochure={dayasagr}
              buildername={"Daysagar"} 
              rera={ds_rera} 
              gmc_noc={ds_noc} 
              gmda_pp={ds_pp}
            />
            <Offercard 
              toggleProjectdetails={toggleProjectdetails}
              toggleInvestSQFT={toggleInvestSQFT}
              togglePriceAvailability={togglePriceAvailability} 
              toggleRealotrs={toggleRealotrs} 
              toggleBorcher={toggleBorcher} 
              toggleFLatprice={toggleFLatprice} 
              toggleRealotrSchedule={toggleRealotrSchedule} 
              pname={"Divine Tower"} 
              plocation={"Radhanagr,Sixmile VIP Road, Guwahati-22"} 
              plocationlink={"https://maps.app.goo.gl/646iostATcYnfQ9S6"} 
              pbrochure={divine} 
              buildername={"Ganapati Builders"} 
              rera={dt_rera} 
              gmc_noc={dt_noc} 
              gmda_pp={dt_pp}
            />
            <Offercard 
              toggleProjectdetails={toggleProjectdetails}
              toggleInvestSQFT={toggleInvestSQFT}
              togglePriceAvailability={togglePriceAvailability} 
              toggleRealotrs={toggleRealotrs} 
              toggleBorcher={toggleBorcher} 
              toggleFLatprice={toggleFLatprice} 
              toggleRealotrSchedule={toggleRealotrSchedule} 
              pname={"Marigold Parks"} 
              plocation={"Jalukbari, Guwahati, Assam 781011"} 
              plocationlink={"https://maps.app.goo.gl/D1H2Mj35QhUaWqjt7"} 
              pbrochure={marigold} 
              buildername={"Native Tree"}
            />
          </div>
        </div>
      </div>

      {/* Show Modal if true */}
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

export default Topoffers
