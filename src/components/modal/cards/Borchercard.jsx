import React from 'react'


const Borchercard = ({img,viewfrom}) => {
  return (
    <div className='w-auto bg-white rounded-lg shadow-md p-4 mb-4'>
      <img src={img} alt="Property" className='max-w-100 max-h-100 object-contain rounded-lg' />
      <h1 className='text-xl font-bold text-gray-800 mb-2'>{viewfrom}</h1>
    </div>
  )
}

export default Borchercard
