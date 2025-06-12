import React from 'react'
import Calculatorcard from './Calculatorcard'
import emi from "../img/emi.png"
import loan from "../img/loan.png"
import credit from "../img/credit.png"

const Calculators = () => {
  return (
    <div className='flex flex-col items-center w-full min-h-[400px] bg-white backdrop-blur-md mb-0'>
        <div className='w-full'>
            <h1 className='text-black text-2xl md:text-4xl font-bold ml-5 mt-10'>Calculators</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5 w-full px-4'>
          <Calculatorcard cname={"EMI Calculator"} cdescription={"Calculate your EMI amount "} clogo={emi} btnname={"Calculate"}/>
          <Calculatorcard cname={"Loan Eligibility"} cdescription={"Check your eligibility for loan in bank "} clogo={loan} btnname={"Check"}/>
          <Calculatorcard cname={"Credit Score"} cdescription={"Check your credit score"} clogo={credit} btnname={"Check"}/>
        </div>
    </div>
  )
}

export default Calculators
