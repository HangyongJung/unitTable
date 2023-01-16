import React from 'react'

interface CardProps {
  num1: number
  num2: number
  unit1: string
  unit2: string
}

const Card = ({
  num1,
  num2,
  unit1,
  unit2,
}: CardProps) => {
  return (
    <div className={`px-10 py-2 border border-gray-400 rounded-md text-center ${num1 % 10 == 0 ? "bg-gray-200" : ""}`}>
      {num1.toString()} {unit1} = {num2.toFixed(2).toString()} {unit2}
    </div>
  )
}

export default Card
