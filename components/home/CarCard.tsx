import React from 'react'
import { CarProps } from '@/types';

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

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  return (
   <Card className='hover:bg-secondary transition-colors hover:cursor-pointer'>
    <CardHeader>
      <CardTitle className='capitalize'>{make} {model}</CardTitle>
      <CardDescription>$<span className='text-black text-base font-extrabold'>54</span>/day</CardDescription>
    </CardHeader>
    <CardContent className='flex justify-center min-h-[300px]'>
      <div className='relative flex-1 max-w-[300px] max-h-[300px]'>
        <Image 
          className='object-contain'
          src={"/images/hero.png"}
          alt='car'
          fill
        />
      </div>
      
    </CardContent>
   </Card>
  )
}

export default CarCard