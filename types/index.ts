import { MouseEventHandler } from "react"
import { IconType } from "react-icons"

export interface CustomButtonProps {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType: "button" | "submit"
  Icon?: IconType
}

export interface CustomFilterProps {
  title: string
}

export interface SearchBarInputs {
  manufacturer: string
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarCardProps {
  model: string
  make: string
  mpg: number
  transmission: string
  year: number
  drive: string
  cityMPG: number
}

