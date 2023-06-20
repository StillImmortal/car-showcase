import React from 'react'
import { v4 as uuidv4 } from "uuid"

import { Hero, SearchBar, CustomFilter } from '@/components'
import { fetchCars } from '@/services/carService'
import CarCard from '@/components/home/CarCard'

const Home = async () => {

  const allCars = await fetchCars()
  const isDataEmpty = false

  return ( 
    <main className="overflow-x-hidden">
        <Hero />

        <div className='bg-[#fafafa] py-8'>
          <div id='discover' className='mt-12 padding-x padding-y max-width'>
            <div className='home__text-container'>
              <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
              <p className='text-gray-500'>Explore the cars you might like</p>
            </div>

            <div className='home__filters'>
              <SearchBar />

              <div className='home__filter-container'>
                <CustomFilter title="fuel" />
                <CustomFilter title="year" />
              </div>
            </div>

            {!isDataEmpty ? (
              <div className='home__cars-wrapper'>
                {allCars?.map((car) => (
                  <CarCard key={`${car.model}-${uuidv4()}`} car={car} />
                ))}
              </div>
            ) : (
              <div>
                Empty
              </div>
            )}
          </div>
        </div>
    </main>
  )
}

export default Home