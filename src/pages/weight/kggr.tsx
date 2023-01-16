import React from 'react'
import Card from '../components/Card'

const weight = () => {

  return (
    <div className='flex justify-center'>
      <div className='py-20 flex flex-col gap-2'>
        <div className='text-4xl mb-8 font-bold text-center border-y border-gray-700'>kg to gr</div>
        {[...Array(999)].map((_, index) => (
          <div key={index}>
            <Card num1={index} num2={index * 15432.3584} unit1="kg" unit2="gr" />
          </div>
        )
        )}
      </div>
    </div>
  )
}

export default weight