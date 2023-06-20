"use client"

import React from 'react'
import Image from 'next/image'
import { AiOutlineCar } from "react-icons/ai"

import { CustomButton } from '@/components'

const Hero = () => {
  const handleScroll = () => {

  }

  return (
    <div className="hero">
      <div className="flex-1 pt-28 sm:pt-36 xl:pt-60 padding-x">
        <h1 className='text-gray-200 font-extrabold text-4xl md:text-5xl'>Your journey starts here - buy, rent, and enjoy!</h1>

        <p className='text-gray-500 font-light mt-5 text-lg md:text-xl lg:text-2xl'>Embark on a journey to new horizons: Let our exceptional cars pave the way as you unleash the thrill of the open road.</p>

        <CustomButton 
          title={"Explore Cars"}
          containerStyles={"w-full shadow-hero-btn border-gray-200 text-gray-200 transition-colors hover:bg-white/5 sm:w-1/2 xl:w-4/5 mt-8 xl:mt-16"}
          handleClick={handleScroll}
          btnType="button"
          Icon={AiOutlineCar}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image 
            className="object-contain"
            src={"/images/hero.png"}
            alt="hero"
            fill
          />
        </div>
        <div className='hero__image-overlay' />
      </div>
    </div>
  )
}

export default Hero