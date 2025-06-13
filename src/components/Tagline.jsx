import React from 'react'

const Tagline = () => {
  return (
    <div className='flex flex-col items-center justify-center h-40 md:h-48 bg-transparent px-4 py-8'>    
      <h1 className='text-3xl md:text-4xl text-black font-serif font-bold text-center tracking-wider mb-3 relative'>
        <span className='relative z-10'>We want you make you happy</span>
        <span className='absolute inset-0 w-full h-full bg-white/40 '></span>
        <span className='absolute inset-0 w-full h-full bg-white/50 tracking-[1em]'></span>
      </h1>
      <h1 className='text-3xl md:text-4xl text-black font-serif font-bold text-center tracking-wider mb-3 relative'>
        <span className='relative z-10'>In every phase of your Real Estate journey.</span>
        <span className='absolute inset-0 w-full h-full bg-white/40 '></span>
        <span className='absolute inset-0 w-full h-full bg-white/50 tracking-[1em]'></span>
      </h1>
    </div>
  )
}

export default Tagline
