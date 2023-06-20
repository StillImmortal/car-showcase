"use client"

import React from 'react'
import { CustomButtonProps } from '@/types'
import { Button } from '../ui/button'

const CustomButton = ({ title, containerStyles, handleClick, btnType, variant, Icon }: CustomButtonProps) => {
  return (
    <Button
      variant={variant}
      disabled={false}
      type={btnType || "button"}
      className={`${containerStyles}`}
      onClick={handleClick} 
    >
      <span className={`${Icon ? "basis-5/6" : "flex-1"} flex-center whitespace-nowrap`}>
        {title}
      </span>
      {Icon && <span className='basis-1/6 flex-center p-2 border-l '>
        <Icon className='text-3xl' />
      </span>}
    </Button>
  )
}

export default CustomButton