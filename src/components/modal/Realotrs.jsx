import React from 'react';
import Realtorscard from './cards/Realtorscard';

const Realotrs = ({ toggleRealotrs,toggleRealotrSchedule}) => {
  return (
    <div className='w-full md:w-3/4 h-[90vh] md:h-[80vh] bg-white p-0 rounded-xl shadow-lg relative overflow-hidden'>
      {/* Header */}
      <div className='w-full h-16 md:h-20 bg-blue-800/90 rounded-tl-xl rounded-tr-xl p-3 md:p-5 relative'>
        <button
          onClick={toggleRealotrs}
          className='absolute w-8 h-8 md:w-10 md:h-10 rounded-xl top-2 right-2 bg-white text-black font-bold text-lg md:text-xl'
        >
          X
        </button>
        <h1 className='text-xl md:text-2xl font-bold text-white'>Available Realtors</h1>
      </div>

      {/* Vertically scrollable content */}
      <div className='h-[calc(100%-4rem)] md:h-[calc(100%-5rem)] overflow-y-auto overflow-x-hidden p-3 md:p-5'>
        <Realtorscard toggleRealotrSchedule={toggleRealotrSchedule} />
        <Realtorscard toggleRealotrSchedule={toggleRealotrSchedule} />
        <Realtorscard toggleRealotrSchedule={toggleRealotrSchedule} />
        <Realtorscard toggleRealotrSchedule={toggleRealotrSchedule} />
        <Realtorscard toggleRealotrSchedule={toggleRealotrSchedule} />
        <Realtorscard toggleRealotrSchedule={toggleRealotrSchedule} />
        <Realtorscard toggleRealotrSchedule={toggleRealotrSchedule} />
        <Realtorscard toggleRealotrSchedule={toggleRealotrSchedule} />
        <Realtorscard toggleRealotrSchedule={toggleRealotrSchedule} />
        <Realtorscard toggleRealotrSchedule={toggleRealotrSchedule} />
        <Realtorscard toggleRealotrSchedule={toggleRealotrSchedule} />
        <Realtorscard toggleRealotrSchedule={toggleRealotrSchedule} />
        <Realtorscard toggleRealotrSchedule={toggleRealotrSchedule} />
      </div>
    </div>
  );
};

export default Realotrs;
