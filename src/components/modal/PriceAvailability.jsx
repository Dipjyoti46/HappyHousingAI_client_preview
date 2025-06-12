import React, { useState } from 'react'

const PriceAvailability = ({togglePriceAvailability,toggleFLatprice}) => {

  const [blockName, setBlockName] = useState("Block 1");
  
  // Demo status for flats
  const flatStatus = {
    'A01': 'sold',    // Green
    'B02': 'sold',    // Green
    'C03': 'sold',    // Green
    'D01': 'booked',  // Orange
    'E02': 'booked',  // Orange
    'F03': 'booked',  // Orange
  };

  const getButtonStyle = (flat) => {
    const baseStyle = "w-full h-full px-4 py-2 text-sm md:text-base font-semibold rounded-lg transition-all duration-200 ease-in-out";
    
    if (flatStatus[flat] === 'sold') {
      return `${baseStyle} bg-gradient-to-br from-green-50 to-green-100 border border-green-200 shadow-sm
              hover:from-green-100 hover:to-green-200 hover:shadow-md hover:scale-105
              active:scale-95 text-green-800 hover:text-green-900`;
    }
    
    if (flatStatus[flat] === 'booked') {
      return `${baseStyle} bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 shadow-sm
              hover:from-orange-100 hover:to-orange-200 hover:shadow-md hover:scale-105
              active:scale-95 text-orange-800 hover:text-orange-900`;
    }
    
    return `${baseStyle} bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 shadow-sm
            hover:from-blue-100 hover:to-blue-200 hover:shadow-md hover:scale-105
            active:scale-95 text-blue-800 hover:text-blue-900`;
  };

  const handleBlockClick = (block) => {
    setBlockName(block);
    console.log(`${block} clicked`);
  };

  return (
    <div className='w-full md:w-3/4 h-[80vh] bg-white p-0 rounded-xl shadow-lg relative overflow-hidden'>
      {/* Header */}
      <div className='w-full h-16 md:h-20 bg-blue-800/90 rounded-tl-xl rounded-tr-xl p-3 md:p-5 relative'>
        <button
          onClick={togglePriceAvailability}
          className='absolute w-8 h-8 md:w-10 md:h-10 rounded-xl top-2 right-2 bg-white text-black font-bold text-lg md:text-xl'
        >
          X
        </button>
        <h1 className='text-xl md:text-2xl font-bold text-white'>Availability and Price</h1>
      </div>

      {/* Vertically scrollable content */}
      <div className='h-[calc(100%-4rem)] md:h-[calc(100%-5rem)] overflow-y-auto overflow-x-hidden p-3 md:p-5'>
          {/* Block Table */}
          <p className='text-sm md:text-base'><span className='text-red-900'>*</span> Select the block and click on the flat no. to know Price and Availability</p>
          <div className='p-2 md:p-5 overflow-x-auto w-full'>
            <table className='table-auto w-full bg-blue-300 text-white'>
              <tbody>
                <tr className=''>
                  {['Block 1', 'Block 2', 'Block 3', 'Block 4', 'Block 5', 'Block 6'].map((block, index) => (
                    <td key={index} className='p-1 md:p-3'>
                      <button
                        className='transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 w-full h-full bg-white/80 text-black font-bold rounded-xl border-2 border-black p-2 md:p-4 hover:bg-green-400 cursor-pointer text-sm md:text-base'
                        onClick={() => handleBlockClick(block)}
                      >
                        {block}
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          {/* FLoor and Flate table */}
          <div className='p-2 md:p-5 overflow-x-auto w-full'>
          <div className="overflow-x-auto rounded-xl shadow-lg">
           <div className='flex flex-col w-full items-center justify-center h-auto bg-blue-900 pt-2 pb-2'>
              <h1 className='font-bold text-2xl md:text-3xl text-white'>{blockName}</h1>
           </div>
            <table className="min-w-max w-full border-collapse bg-white text-gray-800">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-2 md:py-4 px-3 md:px-6 text-left">FLOOR</th>
                  {Array(4).fill().map((_, i) => (
                    <th key={i} className="py-2 md:py-4 px-3 md:px-6 text-center">
                      <p className="font-semibold text-base md:text-lg">3 BHK</p>
                      <p className="text-xs font-light">1430 sqft</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 transition-colors">
                  <th className="py-2 md:py-3 px-3 md:px-6 text-left font-medium text-gray-700">1st</th>
                  {['A01', 'A02', 'A03', 'A04'].map((flat, i) => (
                    <td key={i} className="py-2 md:py-3 px-3 md:px-6 text-center font-medium">
                      <button 
                        className={getButtonStyle(flat)}
                        onClick={() => toggleFLatprice(flat)}
                      >
                        {flat}
                      </button>
                    </td>
                  ))}
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 transition-colors">
                  <th className="py-2 md:py-3 px-3 md:px-6 text-left font-medium text-gray-700">2nd</th>
                  {['B01', 'B02', 'B03', 'B04'].map((flat, i) => (
                    <td key={i} className="py-2 md:py-3 px-3 md:px-6 text-center font-medium">
                      <button 
                        className={getButtonStyle(flat)}
                        onClick={() => toggleFLatprice(flat)}
                      >
                        {flat}
                      </button>
                    </td>
                  ))}
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 transition-colors">
                  <th className="py-2 md:py-3 px-3 md:px-6 text-left font-medium text-gray-700">3rd</th>
                  {['C01', 'C02', 'C03', 'C04'].map((flat, i) => (
                    <td key={i} className="py-2 md:py-3 px-3 md:px-6 text-center font-medium">
                      <button 
                        className={getButtonStyle(flat)}
                        onClick={() => toggleFLatprice(flat)}
                      >
                        {flat}
                      </button>
                    </td>
                  ))}
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 transition-colors">
                  <th className="py-2 md:py-3 px-3 md:px-6 text-left font-medium text-gray-700">4th</th>
                  {['D01', 'D02', 'D03', 'D04'].map((flat, i) => (
                    <td key={i} className="py-2 md:py-3 px-3 md:px-6 text-center font-medium">
                      <button 
                        className={getButtonStyle(flat)}
                        onClick={() => toggleFLatprice(flat)}
                      >
                        {flat}
                      </button>
                    </td>
                  ))}
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 transition-colors">
                  <th className="py-2 md:py-3 px-3 md:px-6 text-left font-medium text-gray-700">5th</th>
                  {['E01', 'E02', 'E03', 'E04'].map((flat, i) => (
                    <td key={i} className="py-2 md:py-3 px-3 md:px-6 text-center font-medium">
                      <button 
                        className={getButtonStyle(flat)}
                        onClick={() => toggleFLatprice(flat)}
                      >
                        {flat}
                      </button>
                    </td>
                  ))}
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 transition-colors">
                  <th className="py-2 md:py-3 px-3 md:px-6 text-left font-medium text-gray-700">6th</th>
                  {['F01', 'F02', 'F03', 'F04'].map((flat, i) => (
                    <td key={i} className="py-2 md:py-3 px-3 md:px-6 text-center font-medium">
                      <button 
                        className={getButtonStyle(flat)}
                        onClick={() => toggleFLatprice(flat)}
                      >
                        {flat}
                      </button>
                    </td>
                  ))}
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 transition-colors">
                  <th className="py-2 md:py-3 px-3 md:px-6 text-left font-medium text-gray-700">7th</th>
                  {['G01', 'G02', 'G03', 'G04'].map((flat, i) => (
                    <td key={i} className="py-2 md:py-3 px-3 md:px-6 text-center font-medium">
                      <button 
                        className={getButtonStyle(flat)}
                        onClick={() => toggleFLatprice(flat)}
                      >
                        {flat}
                      </button>
                    </td>
                  ))}
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 transition-colors">
                  <th className="py-2 md:py-3 px-3 md:px-6 text-left font-medium text-gray-700">8th</th>
                  {['H01', 'H02', 'H03', 'H04'].map((flat, i) => (
                    <td key={i} className="py-2 md:py-3 px-3 md:px-6 text-center font-medium">
                      <button 
                        className={getButtonStyle(flat)}
                        onClick={() => toggleFLatprice(flat)}
                      >
                        {flat}
                      </button>
                    </td>
                  ))}
                </tr>
                <tr className="odd:bg-gray-100 even:bg-gray-50 hover:bg-blue-100 transition-colors">
                  <th className="py-2 md:py-3 px-3 md:px-6 text-left font-medium text-gray-700">9th</th>
                  {['I01', 'I02', 'I03', 'I04'].map((flat, i) => (
                    <td key={i} className="py-2 md:py-3 px-3 md:px-6 text-center font-medium">
                      <button 
                        className={getButtonStyle(flat)}
                        onClick={() => toggleFLatprice(flat)}
                      >
                        {flat}
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          </div>
      </div>
    </div>
  )
}

export default PriceAvailability
