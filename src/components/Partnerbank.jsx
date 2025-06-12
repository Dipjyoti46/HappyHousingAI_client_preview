import React from 'react'
import { motion } from "motion/react"
import boi from '../img/bank/noi.png'
import sbi from '../img/bank/sbi.png'
import icici from '../img/bank/icici.png'
import hdfc from '../img/bank/hdfc.png'
import union from '../img/bank/download.png'

const Partnerbank = () => {
  return (
    <div className='w-full overflow-hidden bg-white backdrop-blur-md h-auto min-h-[200px]'>
      <h1 className='text-black text-2xl md:text-4xl font-bold ml-5 mt-10'>Our Partnered Banks</h1>

      <motion.div
        className='flex mt-10 gap-5 md:gap-10 w-max'
        animate={{ x: ['5%', '-100%'] }}
        transition={{ duration: 60, ease: 'linear', repeat: Infinity }}
      >
        {[boi, sbi, hdfc, union, icici, boi, sbi, hdfc, union, icici,sbi, hdfc, union, icici,sbi, hdfc, union, icici,sbi, hdfc, union, icici,sbi, hdfc, union, icici].map((logo, index) => (
          <img key={index} src={logo} alt="bank logo" className='h-12 md:h-20 w-auto' />
        ))}
      </motion.div>
      <motion.div
        className="flex gap-5 md:gap-10 w-max mt-5"
        animate={{ x: ['-100%', '5%'] }}
        transition={{
          duration: 60,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {[boi, sbi, hdfc, union, icici, boi, sbi, hdfc, union, icici,sbi, hdfc, union, icici,sbi, hdfc, union, icici,sbi, hdfc, union, icici,sbi, hdfc, union, icici].map((logo, i) => (
          <img key={`row2-${i}`} src={logo} alt="bank logo" className="h-12 md:h-20 w-auto" />
        ))}
      </motion.div>
    </div>
    
  )
}

export default Partnerbank
