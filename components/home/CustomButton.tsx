"use client"

import React from 'react'
import { CustomButtonProps } from '@/types'

const CustomButton = ({ title, containerStyles, handleClick, btnType, Icon }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`flex items-center focus:outline-nono border rounded ${containerStyles}`}
      onClick={handleClick} 
    >
      <span className={`${Icon ? "basis-5/6" : "flex-1"} flex-center text-xl whitespace-nowrap`}>
        {title}
      </span>
      {Icon && <span className='basis-1/6 flex-center p-2 border-l '>
        <Icon className='text-3xl' />
      </span>}
    </button>
  )
}

export default CustomButton