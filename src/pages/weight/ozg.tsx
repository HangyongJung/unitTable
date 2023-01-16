import React from 'react'
import Card from '../components/Card'

const weight = () => {

  return (
    <div className='flex justify-center'>
      <div className='py-20 flex flex-col gap-2'>
        <div className='text-4xl mb-8 font-bold text-center border-y border-gray-700'>oz to g</div>
        {[...Array(999)].map((_, index) => (
          <div key={index}>
            <Card num1={index} num2={index * 28.349523} unit1="oz" unit2="g" />
          </div>
        )
        )}
      </div>
    </div>
  )
}

export default weight