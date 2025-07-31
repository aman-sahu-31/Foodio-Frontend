import React from 'react'
import RestoarentCard from '../Components/RestoarentCard'

function Restaurent() {
  return (
    <>
    <div className='mt-15 shadow-sm  '>
     <div className=" bg-white rounded-2xl gap-6 p-2">
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