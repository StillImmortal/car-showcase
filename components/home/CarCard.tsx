"use client"

import React from 'react'
import { CarProps } from '@/types';
import {
  GiSteeringWheel,
  GiCarWheel,
} from "react-icons/gi"
import {
  BsFillFuelPumpFill
} from "react-icons/bs"

interface CarCardProps {
  car: CarProps;
}

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import CustomButton from './CustomButton';

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  return (
    <Card className='hover:bg-secondary transition-colors hover:cursor-pointer'>
      <CardHeader>
        <CardTitle className='capitalize'>{make} {model}</CardTitle>
        <CardDescription>$<span className='text-black text-base font-extrabold'>54</span>/day</CardDescription>
      </CardHeader>
      <CardContent className='flex-center flex-col w-full min-h-[300px] mt-8'>
        <div className='relative'>
          <Image 
            className='object-contain'
            src={"/images/hero.png"}
            alt='car'
            width={240}
            height={200}
          />
        </div>

        <div className='relative flex-between w-full text-sm font-light text-muted-foreground mt-12'>
            <div className='flex-center flex-col gap-2'>
              <GiSteeringWheel className='text-blue-600 text-2xl' />
              <p>
                {transmission === 'a' ? "Automatic" : "Manual"}
              </p>
            </div>
            <div className='flex-center flex-col gap-2'>
              <GiCarWheel className='text-pink-600 text-2xl' />
              <p className='uppercase'>
                {drive}
              </p>
            </div>
            <div className='flex-center flex-col gap-2'>
              <BsFillFuelPumpFill className='text-green-600 text-2xl' />
              <p>
                {city_mpg} MPG
              </p>
            </div>
        </div>

        <div className='w-full mt-4'>
          <CustomButton 
            title='Узнать подробнее'
            containerStyles={"w-full text-md font-normal hover:bg-primary"}
            btnType='button'
            handleClick={() => {}}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default CarCard