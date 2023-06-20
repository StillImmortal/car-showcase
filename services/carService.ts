import { CarProps } from "@/types"

export async function fetchCars() {
  try {
    const res = await fetch("http://localhost:3000/api/cars")
    const cars: CarProps[] = await res.json()
    return cars
  } catch (error) {
    console.log(error)
  }
}