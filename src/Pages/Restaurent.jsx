import React from 'react'
import RestoarentCard from '../Components/RestoarentCard'

function Restaurent() {
  return (
    <>
    <div className='mt-15 shadow-xl  mb-10'>
     <div className="min-h-screen bg-gray-100  rounded-2xl gap-6 p-6">
         <h1 className="font-Arbic text-3xl sm:text-4xl mb-6  font-bold text-gray-800">
        Restau  rent
        </h1>
     <RestoarentCard />
          </div>
    </div>
    </>
  )
}

export default Restaurent