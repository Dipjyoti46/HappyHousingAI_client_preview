import React from 'react'
import { FaCalculator } from 'react-icons/fa'

const Calculatorcard = ({cname,cdescription,clogo,btnname}) => {
  return (  
        <div className='bg-blue-400 w-full h-auto min-h-[160px] text-white flex flex-row items-center justify-start p-4 rounded-xl'>
            <div className='flex-shrink-0'>
              <img className='w-16 md:w-24 h-auto' src={clogo} alt="" />
            </div>
            <div className='flex flex-col items-start justify-center ml-4 flex-grow'>
              <h1 className='text-lg md:text-xl font-semibold'>{cname}</h1>
              <p className='text-sm md:text-base'>{cdescription}</p>
              <button className='bg-[#03dac5] text-black px-4 py-2 rounded-lg mt-2 text-sm md:text-base hover:bg-blue-600 hover:text-white hover:border-1 hover:border-offset-2 hover:border-white hover:font-bold transition-all duration-300 flex items-center gap-2'>
                <FaCalculator className="text-lg" />
                {btnname}
              </button>
            </div>
        </div>
  )
}

export default Calculatorcard
